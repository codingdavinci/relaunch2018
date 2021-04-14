<?php

namespace Drupal\dd_views_filters\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Database;

use Drupal\Core\Language\LanguageInterface;
use Drupal\taxonomy\Entity\Term;

use Drupal\image\Entity\ImageStyle;


use Symfony\Component\HttpFoundation\JsonResponse;

class FilterApi extends ControllerBase {

  public function projecttypes() {
    return $this->loadTaxonomy("project_types");
  }

  public function objecttypes() {
    return $this->loadTaxonomy("object_types");
  }

  public function subObjecttypes() {
    $objectTypes = $this->loadNestedTaxonomy("object_types");
    return $objectTypes;
  }

  public function theme() {
    return $this->loadTaxonomy("theme");
  }

  public function licenses() {
    return $this->loadTaxonomy("licenses");
  }

  public function institutions() {
    $database = \Drupal::database();
    $query = $database->query("SELECT DISTINCT author_name FROM {dd_views_datasets}");
    $data = [];
    while ($row = $query->fetchAssoc()) {
      $data []= ['name' => $row['author_name']];
    }
    return new JsonResponse($data);
  }

  public function loadTaxonomy($vid) {
    $out = array();

    $langcode = \Drupal::service('language_manager')->getCurrentLanguage(LanguageInterface::TYPE_CONTENT)->getId();

    $database = \Drupal::database();
    $query = $database->query(sprintf("SELECT
        taxonomy_term_data.tid,
        taxonomy_term_field_data.name
      FROM
        taxonomy_term_data taxonomy_term_data
      LEFT JOIN taxonomy_term_field_data ON taxonomy_term_field_data.tid = taxonomy_term_data.tid
      LEFT JOIN taxonomy_term__parent ON taxonomy_term__parent.entity_id = taxonomy_term_data.tid
      WHERE
        taxonomy_term_data.vid='%s' AND taxonomy_term_field_data.langcode='de' AND taxonomy_term__parent.parent_target_id=0
      ORDER by taxonomy_term_field_data.name ASC", $vid));

    while ($row = $query->fetchAssoc()) {
      $taxonomy_term = Term::load($row['tid']);
      $taxonomy_term_trans = \Drupal::service('entity.repository')->getTranslationFromContext($taxonomy_term, $langcode);

      $out[]= array("tid"=>$row['tid'], "title"=>$taxonomy_term_trans->name->value);
    }

    return new JsonResponse($out);
  }


  public function loadNestedTaxonomy($vid) {
    $out = array();
    $langcode = \Drupal::service('language_manager')->getCurrentLanguage(LanguageInterface::TYPE_CONTENT)->getId();

    $query = \Drupal::entityQuery('taxonomy_term');
    $query->condition('vid', $vid);
    $tids = $query->execute();

    foreach ($tids as $tid) {
      $subterms = array();
      $childTermIds = \Drupal::service('entity_type.manager')->getStorage("taxonomy_term")->loadChildren($tid);
      if ($childTermIds) {
        foreach (array_keys($childTermIds) as $childTermId) {
          $taxonomy_term = Term::load($childTermId);
          $taxonomy_term_trans = \Drupal::service('entity.repository')->getTranslationFromContext($taxonomy_term, $langcode);
          $subterms[] = array( "tid"=> $childTermId, "title" => $taxonomy_term_trans->name->value);
        }
      }
      $out[$tid] = $subterms;
    }

    return new JsonResponse($out);
  }


  public function events() {
    $out = array();

    $curr_langcode = \Drupal::service('language_manager')->getCurrentLanguage(LanguageInterface::TYPE_CONTENT)->getId();

    $database = \Drupal::database();
    $query = $database->query(" SELECT
      node_field_data.nid,
      node_field_data.title,
      node_field_data.created
    FROM
	    node_field_data
    WHERE (node_field_data.type IN ('event')) AND (node_field_data.status = '1') AND (node_field_data.langcode = 'de')
    ORDER BY title ASC");

    while ($row = $query->fetchAssoc()) {
      $node = \Drupal::entityTypeManager()->getStorage("node")->load($row['nid']);
      $node_trans = \Drupal::service('entity.repository')->getTranslationFromContext($node, $curr_langcode);

      $out[]= array("nid"=>$row['nid'], "title"=>$node_trans->title->value);
    }

    return new JsonResponse($out);
  }

  public function cards() {
    $out = array();
    $limit  = 24;
    $offset = (isset($_GET['offset']))? (int)$_GET['offset'] : 0;

    $q = "";
    $where = "";
    $projects = [];
    $projects_where = "";

    $events = [];
    $events_where = "";

    $host = \Drupal::request()->getSchemeAndHttpHost();

    $langcode = \Drupal::service('language_manager')->getCurrentLanguage(LanguageInterface::TYPE_CONTENT)->getId();

    $database = \Drupal::database();


    if (isset($_GET['projects']) && !empty($_GET['projects'])) {
      $projects     = explode(",", $_GET['projects']);
      $projects_tmp = array();

      foreach ($projects as $project) {
        $projects_tmp[]= "projecttype_tids like '%" . (int)$project ."%'";
      }

      if (count($projects_tmp)!= 0) {
        $projects_where = join(" OR ", $projects_tmp);
      }
    }

    if (isset($_GET['events']) && !empty($_GET['events'])) {
      $events     = explode(",", $_GET['events']);
      $events_tmp = array();

      foreach ($events as $event) {
        $events_tmp[]= "event_nid=". (int)$event;
      }

      if (count($events_tmp)!= 0) {
        $events_where .= " ( ";
        $events_where .= join(" OR ", $events_tmp);
        $events_where .= " ) ";
      }
    }

    if (isset($_GET['q']) && !empty($_GET['q'])) {
      $term = $database->escapeLike($_GET['q']);
      $q .= " ( ";
      $q .= "node_title like '%" . $term ."%' OR description like '%" . $term ."%'";
      $q .= " ) ";
    }

    if (!empty($projects_where) || !empty($events_where) || !empty($q)) {

      $where = " WHERE ";
      $join = "";

      if (!empty($events_where)) {
        $where .= $events_where;
        $join = " OR ";
      }

      if (!empty($projects_where)) {
        $where .= $join . $projects_where;
        $join = " AND ";
      }

      if (!empty($q)) {
        $where .= $join . $q;
      }
    }


    $test_query = $database->query(sprintf("SELECT count(*) FROM {dd_views_projects} %s", $where));
    $count = $test_query->fetchField();
    #echo sprintf("SELECT * FROM {dd_views_projects} %s ORDER BY event_nid DESC, winner DESC, node_created DESC LIMIT %d OFFSET %d ", $where, $limit, $offset);
    $query = $database->query(sprintf(" SELECT DISTINCT * FROM {dd_views_projects} %s ORDER BY event_nid DESC, winner_tid DESC, node_created DESC LIMIT %d OFFSET %d ", $where, $limit, $offset));

    while ($row = $query->fetchAssoc()) {

      $project_types_titles = array();
      $event_title = "";

      $node = \Drupal::entityTypeManager()->getStorage("node")->load($row['nid']);
      $node_trans = \Drupal::service('entity.repository')->getTranslationFromContext($node, $langcode);

      $media_entity = $node->get("field_attributed_image")->referencedEntities()[0];
      $uri = $media_entity->get('field_inline_image')->entity->uri->value;
      $image_url = ImageStyle::load('project_preview_cropped')->buildUrl($uri);

      $project_types = $node->field_tags->referencedEntities();

      foreach ($project_types as $term) {
        $project_types_titles[]= $term->getName();
      }

      if ($event = \Drupal::entityTypeManager()->getStorage("node")->load($row['event_nid'])) {
        $event_trans = \Drupal::service('entity.repository')->getTranslationFromContext($event, $langcode);
        $event_title = $event_trans->title->value;
      }

      $out[]= array(
        "nid"=>$row['nid'],
        "title"=>$node_trans->title->value,
        "url"=> $host . \Drupal::service('path_alias.manager')->getAliasByPath('/node/'. $row['nid'], $langcode),
        "description"=>$node_trans->field_short_description->value,
        "image_url"=>$image_url,
        "winner_title"=>$row['winner_title'],
        "project_types"=>$project_types_titles,
        "event_nid"=>$row['event_nid'],
        "event_title"=>$event_title,
        "event_url"=> $host . \Drupal::service('path_alias.manager')->getAliasByPath('/node/'. $row['event_nid'], $langcode),
      );
    }

    return new JsonResponse(array("count"=>$count, "data"=>$out));
  }

  public function datasets() {
    $out = array();
    $limit  = 24;
    $offset = (isset($_GET['offset']))? (int)$_GET['offset'] : 0;

    $q = "";
    $where = "";
    $objecttypes = [];
    $objecttypes_where = "";

    $subobjecttypes = [];
    $subobjecttypes_where = "";
    $exclude_parent_objecttypes = [];

    $events = [];
    $events_where = "";

    $licenses = [];
    $licenses_where = "";

    $theme = [];
    $theme_where = "";

    $institution_where = "";

    $args = [];

    $host = \Drupal::request()->getSchemeAndHttpHost();

    $langcode = \Drupal::service('language_manager')->getCurrentLanguage(LanguageInterface::TYPE_CONTENT)->getId();

    $database = \Drupal::database();

    $object_types_first_level = dd_views_filters_load_taxonomy("object_types");

    // subobject are separate to filter
    if (isset($_GET['subobjecttypes']) && !empty($_GET['subobjecttypes'])) {

      $objecttypes     = explode(",", $_GET['subobjecttypes']);
      $objecttypes_tmp = array();

      foreach ($objecttypes as $objecttype) {
        // exclude parent objecttypes
        $parent_objecttype = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadParents($objecttype);
        foreach (array_keys($parent_objecttype) as $parent_objecttype_id) {
          $exclude_parent_objecttypes []= $parent_objecttype_id;
        }
        // filter to sub-terms
        $objecttypes_tmp[]= "subobject_types_tids like '%" . (int)$objecttype ."%'";
      }

      if (count($objecttypes_tmp)!= 0) {
        $subobjecttypes_where = join(" OR ", $objecttypes_tmp);
      }
    }


    if (isset($_GET['objecttypes']) && !empty($_GET['objecttypes'])) {
      $objecttypes     = explode(",", $_GET['objecttypes']);
      $objecttypes_tmp = array();

      foreach ($objecttypes as $objecttype) {
        if (false === in_array((int)$objecttype, $exclude_parent_objecttypes)) {
          $objecttypes_tmp[]= "object_types_tids like '%" . (int)$objecttype ."%'";
        }
      }

      if (count($objecttypes_tmp)!= 0) {
        $objecttypes_where = join(" OR ", $objecttypes_tmp);
      }
    }

    if (isset($_GET['events']) && !empty($_GET['events'])) {
      $events     = explode(",", $_GET['events']);
      $events_tmp = array();

      foreach ($events as $event) {
        $events_tmp[]= "events_nids like '%". (int)$event ."%'";
      }

      if (count($events_tmp)!= 0) {
        $events_where .= " ( ";
        $events_where .= join(" OR ", $events_tmp);
        $events_where .= " ) ";
      }
    }

    if (isset($_GET['licenses']) && !empty($_GET['licenses'])) {
      $licenses     = explode(",", $_GET['licenses']);
      $licenses_tmp = array();

      foreach ($licenses as $license) {
        $licenses_tmp[]= "field_media_license=". (int)$license;
      }

      if (count($licenses_tmp)!= 0) {
        $licenses_where .= " ( ";
        $licenses_where .= join(" OR ", $licenses_tmp);
        $licenses_where .= " ) ";
      }
    }

    if (isset($_GET['theme']) && !empty($_GET['theme'])) {
      $theme     = explode(",", $_GET['theme']);
      $theme_tmp = array();

      foreach ($theme as $th) {
        $theme_tmp[]= "theme_nids like '%". (int)$th ."%'";
      }

      if (count($theme_tmp)!= 0) {
        $theme_where .= " ( ";
        $theme_where .= join(" OR ", $theme_tmp);
        $theme_where .= " ) ";
      }
    }

    if (isset($_GET['institution']) && !empty($_GET['institution'])) {
      $author_name = trim($_GET['institution']);
      $institution_where .= " ( author_name = :author_name ) ";
      $args[':author_name'] = $author_name;
    }

    if (isset($_GET['q']) && !empty($_GET['q'])) {
      $term = $database->escapeLike($_GET['q']);
      $q .= " ( ";
      $q .= "title like '%" . $term ."%' OR description like '%" . $term ."%'";
      $q .= " ) ";
    }

    if (!empty($objecttypes_where) || !empty($subobjecttypes_where) || !empty($events_where) || !empty($licenses_where) || !empty($theme_where) || !empty($institution_where) || !empty($q)) {

      $where = " WHERE ";
      $join = "";

      if (!empty($events_where)) {
        $where .= $events_where;
        $join = " AND ";
      }

      if (!empty($subobjecttypes_where)) {
        // object and subobject is OR
        if (!empty($objecttypes_where)) {
          $where .= $join . '(' . $objecttypes_where . ')';
          $join = " OR ";
        }
        $where .= $join . '(' . $subobjecttypes_where . ')';
        $join = " AND ";
      } else if (!empty($objecttypes_where)) {
        // and without sub-terms
        $where .= $join . $objecttypes_where;
        $join = " AND ";
      }

      if (!empty($licenses_where)) {
        $where .= $join . $licenses_where;
        $join = " AND ";
      }

      if (!empty($theme_where)) {
        $where .= $join . $theme_where;
        $join = " AND ";
      }

      if (!empty($institution_where)) {
        $where .= $join . $institution_where;
        $join = " AND ";
      }

      if (!empty($q)) {
        $where .= $join . $q;
      }

    }


    $test_query = $database->query(sprintf("SELECT count(*) FROM {dd_views_datasets} %s", $where), $args);
    $count = $test_query->fetchField();
    $query = $database->query(sprintf(" SELECT DISTINCT * FROM {dd_views_datasets} %s ORDER BY created DESC LIMIT %d OFFSET %d ", $where, $limit, $offset), $args);

    while ($row = $query->fetchAssoc()) {
      $objecttypes_titles = array();
      $event_titles = array();
      $event_title = "";
      $image_url = "";

      $node = \Drupal::entityTypeManager()->getStorage("node")->load($row['nid']);
      $node_trans = \Drupal::service('entity.repository')->getTranslationFromContext($node, $langcode);

      $media_entity = $node->get("field_attributed_image")->referencedEntities()[0];
      if ($media_entity) {
        $uri = $media_entity->get('field_inline_image')->entity->uri->value;
        $image_url = file_create_url($uri);
      }


      $objecttypes = $node->field_object_type->referencedEntities();
      foreach ($objecttypes as $term) {
        if (in_array($term->id(), $object_types_first_level)) {
          $objecttypes_titles[]= $term->getName();
        }
      }

      if ($row['events_nids']) {
        if ($event_nids = explode(", ", $row['events_nids'])) {
          foreach ($event_nids as $event_nid) {
            if ($event = \Drupal::entityTypeManager()->getStorage("node")->load($event_nid)) {
              $event_trans = \Drupal::service('entity.repository')->getTranslationFromContext($event, $langcode);
              $event_title = $event_trans->title->value;
              $url = $host . \Drupal::service('path_alias.manager')->getAliasByPath('/node/'. $event_nid, $langcode);
              $event_titles[] = array('title'=>$event_title, "url"=> $url);
            }
          }
        }
      }

      $out[]= array(
        "nid"=>$row['nid'],
        "title"=>$node_trans->title->value,
        "url"=> $host . \Drupal::service('path_alias.manager')->getAliasByPath('/node/'. $row['nid'], $langcode),
        "description"=> !empty($row['description']) ? $row['description'] : "",
        "image_url"=>$image_url,
        "objecttypes_titles"=>$objecttypes_titles,
        "event_titles"=>$event_titles,
        "author_name"=>$row['author_name'],
      );
    }

    return new JsonResponse(array("count"=>$count, "data"=>$out));
  }

}