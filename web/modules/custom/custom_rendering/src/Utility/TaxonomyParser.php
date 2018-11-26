<?php

namespace Drupal\custom_rendering\Utility;

class TaxonomyParser {

  /**
   * @param string $vid
   * @param array|null $terms
   * @param int|null $max_depth
   * @param int $parent
   * @param array $parents_index
   * @param int $depth
   * @return array
   */
  public static function getNestedTree($vid, $terms = null, $max_depth = null, $parent = 0, array $parents_index = [], $depth = 0) {
    if ($terms === null) {
      /** @var \Drupal\taxonomy\TermStorage $storage */
      $storage = \Drupal::entityTypeManager()->getStorage('taxonomy_term');
      $terms = $storage->loadTree($vid);
    }

    $return = [];

    foreach ($terms as $term) {
      foreach ($term->parents as $term_parent) {
        if ($term_parent == $parent) {
          $return[$term->tid] = $term;
        }
        else {
          $parents_index[$term_parent][$term->tid] = $term;
        }
      }
    }

    foreach ($return as &$term) {
      if (
        isset($parents_index[$term->tid])
        && (is_null($max_depth) || $depth < $max_depth)
      ) {
        $term->children = static::getNestedTree(
          $vid,
          $parents_index[$term->tid],
          $max_depth,
          $term->tid,
          $parents_index,
          $depth + 1
        );
      }
    }

    return $return;
  }

}
