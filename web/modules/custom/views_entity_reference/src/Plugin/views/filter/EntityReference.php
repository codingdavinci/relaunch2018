<?php

namespace Drupal\views_entity_reference\Plugin\views\filter;

use Drupal\Core\Cache\Cache;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Entity\EntityTypeBundleInfoInterface;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Language\LanguageInterface;
use Drupal\Core\Language\LanguageManagerInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\TypedData\TranslatableInterface;
use Drupal\views\Plugin\views\filter\InOperator;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a Views filter for entity reference fields.
 *
 * @ingroup views_filter_handlers
 *
 * @ViewsFilter("views_entity_reference")
 */
class EntityReference extends InOperator implements ContainerFactoryPluginInterface {

  /**
   * @var \Drupal\Core\Entity\EntityTypeBundleInfoInterface
   */
  protected $entityTypeBundleInfo;

  /**
   * @var \Drupal\Core\Language\LanguageManagerInterface
   */
  protected $languageManager;

  /**
   * @var \Drupal\Core\Entity\EntityInterface[]|null
   *
   * @see static::getReferenceableEntities()
   */
  protected $referenceableEntities;

  /**
   * @var \Drupal\Core\Entity\EntityStorageInterface
   */
  protected $targetEntityStorage;

  /**
   * @var \Drupal\Core\Entity\EntityTypeInterface
   */
  protected $targetEntityType;

  /**
   * @param mixed[] $configuration
   * @param string $plugin_id
   * @param mixed[] $plugin_definition
   * @param \Drupal\Core\Language\LanguageManagerInterface $language_manager
   * @param \Drupal\Core\Entity\EntityStorageInterface $target_entity_storage
   * @param \Drupal\Core\Entity\EntityTypeBundleInfoInterface $entity_type_bundle_info
   * @param \Drupal\Core\Entity\EntityTypeInterface $target_entity_type
   */
  public function __construct(array $configuration, $plugin_id, array $plugin_definition, LanguageManagerInterface $language_manager, EntityStorageInterface $target_entity_storage, EntityTypeBundleInfoInterface $entity_type_bundle_info, EntityTypeInterface $target_entity_type) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->entityTypeBundleInfo = $entity_type_bundle_info;
    $this->targetEntityStorage = $target_entity_storage;
    $this->targetEntityType = $target_entity_type;
    $this->languageManager = $language_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    /** @var \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager */
    $entityTypeManager = $container->get('entity_type.manager');

    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('language_manager'),
      $entityTypeManager->getStorage(
        $configuration['views_entity_reference_target_entity_type_id']
      ),
      $container->get('entity_type.bundle.info'),
      $entityTypeManager->getDefinition(
        $configuration['views_entity_reference_target_entity_type_id']
      )
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['views_entity_reference_target_bundles'] = [
      'default' => [],
    ];

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);

    if (!$this->targetEntityType->hasKey('bundle')) {
      return $form;
    }

    $options = [];

    foreach ($this->entityTypeBundleInfo->getBundleInfo($this->targetEntityType->id()) as $bundle_id => $bundle_info) {
      $options[$bundle_id] = $bundle_info['label'];
    }

    $form['views_entity_reference_target_bundles'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t('Target entity bundles to filter by'),
      '#options' => $options,
      '#default_value' => array_filter(
        $this->options['views_entity_reference_target_bundles']
      ),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  protected function valueForm(&$form, FormStateInterface $form_state) {
    parent::valueForm($form, $form_state);
    // Apply cacheability metadata, because the parent class does not.
    // TODO: Remove this once https://www.drupal.org/node/2754103 is fixed.
    $cacheabilityMetdata = CacheableMetadata::createFromObject($this);
    $cacheabilityMetdata->applyTo($form);

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function getValueOptions() {
    if ($this->valueOptions !== null) {
      return $this->valueOptions;
    }

    $this->valueOptions = [];

    foreach ($this->getReferenceableEntities() as $entity) {
      $current_content_language_id = $this->languageManager->getCurrentLanguage(LanguageInterface::TYPE_CONTENT)->getId();
      if ($entity instanceof TranslatableInterface && $entity->hasTranslation($current_content_language_id)) {
        $entity = $entity->getTranslation($current_content_language_id);
      }
      $this->valueOptions[$entity->id()] = $entity->label();
    }
    natcasesort($this->valueOptions);

    return $this->valueOptions;
  }

  /**
   * Gets the entities that can be filtered by.
   *
   * @return \Drupal\Core\Entity\EntityInterface[]
   */
  protected function getReferenceableEntities() {
    if ($this->referenceableEntities !== null) {
      return $this->referenceableEntities;
    }

    $targetIds = null;

    // Filter by bundle if if the plugin was configured to do so.
    $targetBundles = array_filter(
      $this->options['views_entity_reference_target_bundles']
    );
    if ($this->targetEntityType->hasKey('bundle') && $targetBundles) {
      $query = $this->targetEntityStorage->getQuery();
      $query->accessCheck(TRUE);
      $query->condition($this->targetEntityType->getKey('published'), '1', '=');
      $query->condition(
        $this->targetEntityType->getKey('bundle'), $targetBundles, 'IN'
      );
      $targetIds = $query->execute();
    }

    $this->referenceableEntities
      = $this->targetEntityStorage->loadMultiple($targetIds);
    return $this->referenceableEntities;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheTags() {
    $cache_tags = Cache::mergeTags(parent::getCacheTags(), $this->view->storage->getCacheTags());
    $cache_tags = Cache::mergeTags($cache_tags, $this->targetEntityType->getListCacheTags());
    return $cache_tags;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheContexts() {
    $cache_contexts = Cache::mergeContexts(parent::getCacheContexts(), $this->view->storage->getCacheContexts());
    $cache_contexts = Cache::mergeContexts($cache_contexts, $this->targetEntityType->getListCacheContexts());
    return $cache_contexts;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheMaxAge() {
    $cache_max_age = Cache::mergeMaxAges(parent::getCacheMaxAge(), $this->view->storage->getCacheMaxAge());
    return $cache_max_age;
  }

}
