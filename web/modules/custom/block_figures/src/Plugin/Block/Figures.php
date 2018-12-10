<?php

namespace Drupal\block_figures\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * @Block(
 *   id = "block_figures",
 *   admin_label = @Translation("Figures block"),
 *   category = @Translation("Custom"),
 * )
 */
class Figures extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#theme' => 'block_figures',
      '#count' => null,
    ];
  }

}