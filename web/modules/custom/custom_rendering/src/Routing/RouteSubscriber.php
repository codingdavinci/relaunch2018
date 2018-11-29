<?php

namespace Drupal\custom_rendering\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

class RouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    $adminRoutes = [
      'entity.user.canonical',
      'view.data_sets.page_2',
      'view.projects.page_2',
    ];

    foreach ($collection->all() as $name => $route) {
      if (in_array($name, $adminRoutes)) {
        $route->setOption('_admin_route', TRUE);
      }
    }
  }

}