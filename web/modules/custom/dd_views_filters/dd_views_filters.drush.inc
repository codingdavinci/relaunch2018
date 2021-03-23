<?php

/**
* @file Contains the code to generate the custom drush commands.
*/

/**
* Implements hook_drush_command().
*/
function dd_views_filters_drush_command() {
  $items = array();
  $items['cache-products'] = [
    'description' => 'Cache product data',
    'drupal dependencies' => ['dd_views_filters'],
  ];

  $items['cache-datasets'] = [
    'description' => 'Cache datasets',
    'drupal dependencies' => ['dd_views_filters'],
  ];

  return $items;
}


/**
* Call back function drush_custom_drush_command_say_hello()
* The call back function name in the  following format
*   drush_{module_name}_{item_id_for_command}()
*/
function drush_dd_views_filters_cache_products() {
  dd_views_filters_cache_products_run();
}

function drush_dd_views_filters_cache_datasets() {
  dd_views_filters_cache_datasets_run();
}
