<?php

/**
 * Implements hook_views_data_alter().
 * 
 * @param array $data 
 */
function views_entity_reference_views_data_alter(array &$data) {
  $fieldConfigStorage = \Drupal::entityTypeManager()->getStorage('field_config');
  /** @var \Drupal\field\FieldConfigInterface[] $fieldConfigs */
  $fieldConfigs = $fieldConfigStorage->loadByProperties([
    'field_type' => 'entity_reference',
  ]);
  foreach ($fieldConfigs as $fieldConfig) {
    $tableName = $fieldConfig->getTargetEntityTypeId() . '__' . $fieldConfig->getName();
    $columnName = $fieldConfig->getName() . '_target_id';
    if (isset($data[$tableName][$columnName])) {
      $data[$tableName][$columnName . '_views_entity_reference'] = [
        'title' => t('@label (Views Entity Reference selector)', [
          '@label' => $fieldConfig->label(),
        ]),
        'group' => $data[$tableName][$columnName]['group'],
        'help' => $data[$tableName][$columnName]['help'],
        'filter' => [
          'field' => $columnName,
          'table' => $tableName,
          'id' => 'views_entity_reference',
          'additional fields' => [],
          'field_name' => $fieldConfig->getName(),
          'entity_type' => $fieldConfig->getTargetEntityTypeId(),
          'views_entity_reference_target_entity_type_id' => $fieldConfig->getSetting('target_type'),
          'allow empty' => TRUE,
        ],
      ];
    }
  }
}