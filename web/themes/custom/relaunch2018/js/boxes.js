(function($, Hammer, window) {
  'use strict';

  $(function() {
    $('.paragraph--type--box-group').each(function() {
      var $container = $(this);
      var $nav = $container.children('.boxes--nav');
      var $left = $nav.children('.boxes--nav--left');
      var $right = $nav.children('.boxes--nav--right');
      var $boxes = $container.children('.field--name-field-boxes');

      $left.add($right).on('click', function() {
        navigate($container, this === $left.get(0) ? 'left' : 'right');
        return false;
      });

      (new Hammer(this)).on('panleft', function() {
        navigate($container, 'left');
      });

      (new Hammer(this)).on('panright', function() {
        navigate($container, 'right');
      });

      $(window).on('resize orientationchange', function() {
        $boxes.css('left', '0');
        updateNavigation($container);
      });

      updateNavigation($container);
    });
  });

  /**
   * @param {jQuery} $container
   * @param {string} direction
   */
  function navigate($container, direction) {
    var $nav = $container.children('.boxes--nav');
    var $boxes = $container.children('.field--name-field-boxes');

    if (
      $nav.children('.boxes--nav--' + direction).hasClass('inactive')
      || $boxes.is(':animated')
    ) {
      // Prevent navigating too far.
      return;
    }

    // Get the box size every time, because a viewport change might have
    // happened.
    // Since the grid is styled for every box having the same width, the
    // first box can always be used for calculating the new offset.
    var boxWidth = $boxes.children().first().width();

    var gap = pxToFloat($boxes.css('grid-column-gap'));

    if (isNaN(gap)) {
      console.error('Column gap is supposed to be specified in pixels: '
        + $container.css('grid-column-gap'));
    }

    $boxes.stop(true, true).animate({
      left: direction === 'left'
        ? '-=' + (boxWidth + gap)
        : '+=' + (boxWidth + gap)
    }).promise().done(function() {
      updateNavigation($container);
    });
  }

  /**
   * @param {jQuery} $container
   */
  function updateNavigation($container) {
    var $nav = $container.children('.boxes--nav');
    var $left = $nav.children('.boxes--nav--left');
    var $right = $nav.children('.boxes--nav--right');
    var $boxes = $container.children('.field--name-field-boxes');
    var boxWidth = $boxes.children().first().width();

    $left.toggleClass(
      'inactive',
      $boxes.children().last().offset().left + boxWidth < $container.width()
    );

    $right.toggleClass(
      'inactive',
      $boxes.children().first().offset().left >= 0
    );

    if ($left.hasClass('inactive') && $right.hasClass('inactive')) {
      // All blocks are already visible, no navigation is required.
      $nav.hide();
    }
    else {
      $nav.show();
    }
  }

  /**
   * @param {string} pixels
   * @return {Number|NaN}
   */
  function pxToFloat(pixels) {
    return parseFloat(pixels.replace(/px/, ''));
  }

})(jQuery, Hammer, window);
