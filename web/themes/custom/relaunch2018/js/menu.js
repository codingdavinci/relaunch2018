/**
 * @file
 * Main menu behaviour.
 */
(function($) {
  'use strict';

  $(function() {
    var $body = $('body');
    var $primaryMenu = $('.region-primary-menu');
    var $toggler = $('.navbar-toggler');
    var $menu = $('#mainMenu');
    var $menuContainer = $menu.closest('.navbar--menu');

    if (
      $body.hasClass('toolbar-horizontal')
      || $body.hasClass('toolbar-vertical')
    ) {

      var $navbar = $primaryMenu.find('.navbar.fixed-top');
      setPositions($navbar);

      $(window).on(resize, function() {
        setPositions($navbar);
      });
    }

    $primaryMenu.find('.dropdown-toggle').on('click', function(e) {
      e.preventDefault();
    });

    $menu.on('show.bs.collapse hide.bs.collapse', function() {
      var isShown = $menuContainer.hasClass('show');

      $toggler
      .toggleClass('collapsed', isShown)
      .attr('aria-expanded', !isShown);

      $menuContainer.toggleClass('show', !isShown);

      return false;
    });
  });

  /**
   * Shifts positions if the admin toolbar is present.
   *
   * @param {jQuery} $elements
   */
  function setPositions($elements) {
    $elements.each(function() {
      var isFixed = $(this).css('position') === 'fixed';
      var $this = $(this);

      $this
      .css('position', 'absolute')
      .css('top', $this.position().top + parseFloat($('body').css('paddingTop')));

      if (isFixed) {
        $this.css('position', 'fixed');
      }
    });
  }

}(jQuery));
