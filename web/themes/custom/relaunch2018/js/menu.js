/**
 * @file
 * Main menu behaviour.
 */
(function($) {
  'use strict';

  $(function() {
    var $primaryMenu = $('.region-primary-menu');

    considerAdminToolbarOffset($primaryMenu);
    initAnimations($primaryMenu);
  });

  /**
   * @param {jQuery} $primaryMenu
   */
  function initAnimations($primaryMenu) {
    var $toggler = $('.navbar-toggler');
    var $menu = $('#mainMenu');
    var $menuContainer = $menu.closest('.navbar--menu');

    $primaryMenu
      .find('.dropdown-toggle')
      .on('click', function(e) {
        e.preventDefault();
      })
      .parent()
      .on('show.bs.dropdown hide.bs.dropdown', function(e) {
        $(this)
          .find('.dropdown-menu')
          .stop(true)
          [e.type === 'show' ? 'slideDown' : 'slideUp']({
            duration: 'fast',
            easing: 'easeInOutCirc'
          });
      });

    $menu.on('show.bs.collapse hide.bs.collapse', function(e) {
      var show = e.type === 'show';

      $toggler.toggleClass('collapsed', !show).attr('aria-expanded', show);

      $menuContainer.toggleClass('show', show);

      updateMenuItemTransitionDelays($menu, !show);
    });

    updateMenuItemTransitionDelays($menu, false);
  }

  /**
   * @param $menu
   * @param isShown
   */
  function updateMenuItemTransitionDelays($menu, isShown) {
    $menu.find('.menu > li').each(function(i) {
      $(this).css('transition-delay', (isShown ? 0 : i * 0.05) + 's');
    });
  }

  /**
   * @param {jQuery} $primaryMenu
   */
  function considerAdminToolbarOffset($primaryMenu) {
    var $body = $('body');

    if (
      $body.hasClass('toolbar-horizontal') ||
      $body.hasClass('toolbar-vertical')
    ) {
      var $navbar = $primaryMenu.find('.navbar.fixed-top');
      setPositions($navbar);

      $(window).on('resize', function() {
        setPositions($navbar);
      });
    }
  }

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
        .css(
          'top',
          $this.position().top + parseFloat($('body').css('paddingTop'))
        );

      if (isFixed) {
        $this.css('position', 'fixed');
      }
    });
  }
})(jQuery);
