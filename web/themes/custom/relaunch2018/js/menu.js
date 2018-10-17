(function($, window) {
  'use strict';

  var MainMenu = function() {
    var self = this;
    var $context = $('.region-primary-menu');
    var $burger = $context.find('.burger');
    var $mainMenu = $context.find('.menu--main');
    var $subMenu = $context.find('.menu--main--submenu');

    $burger.on('click', function() {
      self._changeState($context);
    });

    $mainMenu.find('a').on('click', function(e) {
      var $a = $(e.target);
      var $item = $a.closest('.menu-item');
      var subMenuHtml = $item.data('submenu');

      $mainMenu.find('.active').removeClass('active');
      $item.addClass('active');

      if (subMenuHtml) {
        $subMenu.empty().append(subMenuHtml).data('menu-parent', $item).addClass('active');
        self._repositionSubMenu();
        return false;
      }
    });

    $(window).on('resize', function() {
      self._repositionSubMenu();
    });
  };

  $.extend(MainMenu.prototype, {

    /**
     * @param {jQuery} $context
     */
    _changeState: function($context) {
      var $burger = $context.find('.burger');
      var $menu = $context.find('.menu--container');

      if (!$menu.hasClass('active')) {
        $menu.addClass('active');
        $burger.addClass('menu--close');
        this._repositionSubMenu();
      } else {
        $menu.removeClass('active');
        $burger.removeClass('menu--close');
      }
    },

    /**
     * Repositions the sub-menu to the currently active 1st level item of the
     * main menu.
     */
    _repositionSubMenu: function() {
      var $mainMenu = $('.menu--main');
      var $subMenu = $mainMenu.find('.menu--main--submenu');
      var $parent = $subMenu.data('menu-parent');

      if ($parent) {
        $subMenu.css(
          'marginTop',
          $parent.offset().top - $mainMenu.offset().top + 'px'
        );
      }
    }

  });

  new MainMenu();

}(jQuery, window));
