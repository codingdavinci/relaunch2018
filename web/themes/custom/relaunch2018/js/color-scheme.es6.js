/**
 * @file
 * Color scheme specific functionality.
 */
(function($) {
  $(() => {
    $('[data-color-scheme-hover]').hover(
      e => changeColor(e, true),
      e => changeColor(e, false)
    );
  });

  /**
   * @param {jQuery.Event} event
   * @param {boolean} mouseOver
   */
  function changeColor(event, mouseOver) {
    const $container = $(event.target).closest('[data-color-scheme-hover]');
    const color = getColor($container, mouseOver);

    if (color) {
      $container.stop(true).animate(
        {
          backgroundColor: `#${color}`
        },
        {
          duration: 'fast'
        }
      );
    }
  }

  /**
   * Retrieves a color from the color scheme saved on the container node per
   * data attribute.
   *
   * @param {jQuery} $container
   * @param {boolean} mouseOver
   * @return {string|null}
   */
  function getColor($container, mouseOver) {
    const colorScheme = $container.data('color-scheme-hover');

    if ($.isArray(colorScheme) && colorScheme.length === 2) {
      return colorScheme[mouseOver ? 1 : 0];
    }

    if (typeof colorScheme === 'string') {
      // Color scheme definition features a hover color only.
      $container.data('color-scheme-hover', [
        $container.css('background-color'),
        colorScheme
      ]);
      return colorScheme;
    }

    return null;
  }
})(jQuery);
