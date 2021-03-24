<?php
namespace Drupal\dd_views_filters\Commands;

use Drush\Commands\DrushCommands;

/**
 * A drush command file.
 *
 * @package Drupal\dd_views_filters\Commands
 */
class DDViewsFiltersCustomCommands extends DrushCommands {

  /**
   * Cache product data
   *
   * @command cache-products:run
   * @aliases cache-products cache-products
   * @option uppercase
   *   Uppercase the message.
   * @option reverse
   *   Reverse the message.
   * @usage drush9_custom_commands:message --uppercase --reverse drupal8
   */
  public function cacheProducts() {
    dd_views_filters_cache_products_run();
  }

  /**
   * Cache datasets data
   *
   * @command cache-datasets:run
   * @aliases cache-datasets cache-datasets
   * @option uppercase
   *   Uppercase the message.
   * @option reverse
   *   Reverse the message.
   * @usage drush9_custom_commands:message --uppercase --reverse drupal8
   */
  public function cacheDatasets() {
    dd_views_filters_cache_datasets_run();
  }

}