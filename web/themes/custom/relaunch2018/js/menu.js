/**
 * @file
 * Main menu behaviour.
 */
(function($) {
  'use strict';

  $(function() {
    var $burger = $('.region-primary-menu').find('#toggle-icon');
    var $menu = $('#off-canvas');
    var mmenu = $menu.data('mmenu');

    mmenu.bind('open:finish', function() {
      setTimeout(function() {
        $burger.addClass('is-active');
      }, 100);
    });

    mmenu.bind('close:finish', function() {
      setTimeout(function() {
        $burger.removeClass('is-active');
      }, 100);
    });

    setMenuElementPositions($burger.add('.language-switcher-language-url '));
  });

  /**
   * Shifts positions if the admin toolbar is present.
   *
   * @param {jQuery} $elements
   */
  function setMenuElementPositions($elements) {
    var $body = $('body');

    if (
      !$body.hasClass('toolbar-horizontal')
      && !$body.hasClass('toolbar-vertical')
    ) {
      return;
    }

    $elements.each(function() {
      var isFixed = $(this).css('position') === 'fixed';
      var $this = $(this);

      $this
      .css('position', 'absolute')
      .css('top', $this.position().top + parseFloat($('.mm-page').css('paddingTop')));

      if (isFixed) {
        $this.css('position', 'fixed');
      }
    });
  }

}(jQuery));
