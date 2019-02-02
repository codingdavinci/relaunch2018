/**
 * @file
 * Main menu behaviour.
 */
(function($) {
  $(() => {
    const $primaryMenu = $('.region-primary-menu');

    considerAdminToolbarOffset($primaryMenu);
    initAnimations($primaryMenu);
  });

  /**
   * @param {jQuery} $primaryMenu
   */
  function initAnimations($primaryMenu) {
    const $toggler = $('.navbar-toggler');
    const $menu = $('#mainMenu');
    const $menuContainer = $menu.closest('.navbar--menu');

    $primaryMenu
      .find('.dropdown-toggle')
      .on('click', e => e.preventDefault())
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

    $menu.on('show.bs.collapse hide.bs.collapse', e => {
      const show = e.type === 'show';

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
      $(this).css('transition-delay', `${isShown ? 0 : i * 0.05}s`);
    });
  }

  /**
   * @param {jQuery} $primaryMenu
   */
  function considerAdminToolbarOffset($primaryMenu) {
    const $body = $('body');

    if (
      $body.hasClass('toolbar-horizontal') ||
      $body.hasClass('toolbar-vertical')
    ) {
      const $navbar = $primaryMenu.find('.navbar.fixed-top');
      setPositions($navbar);

      $(window).on('resize', () => setPositions($navbar));
    }
  }

  /**
   * Shifts positions if the admin toolbar is present.
   *
   * @param {jQuery} $elements
   */
  function setPositions($elements) {
    $elements.each(function() {
      const isFixed = $(this).css('position') === 'fixed';
      const $this = $(this);

      $this.css('position', 'absolute');

      if (typeof $this.data('relaunch2018-menu-position-top') === 'undefined') {
        $this.data('relaunch2018-menu-position-top', $this.position().top);
      }

      $this.css(
        'top',
        $this.data('relaunch2018-menu-position-top') +
          parseFloat($('body').css('paddingTop'))
      );

      if (isFixed) {
        $this.css('position', 'fixed');
      }
    });
  }
})(jQuery);
