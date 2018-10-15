(function($, window) {
  'use strict';

  var MainMenu = function() {
    var self = this;
    var $context = $('.region-primary-menu');
    var $burger = $context.find('.burger');

    $burger.on('click', function() {
      self._changeState($context);
    });

    $(window).on('resize', function() {
      self._repositionSubMenu();
    });

    this._repositionSubMenu();
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
        $burger.addClass('close');
        this._repositionSubMenu();
      } else {
        $menu.removeClass('active');
        $burger.removeClass('close');
      }
    },

    /**
     * Repositions the sub-menu to the currently active 1st level item of the
     * main menu.
     */
    _repositionSubMenu: function() {
      var $mainMenu = $('.menu--main');
      if ($mainMenu.length > 1) {
        var $activeItem = $mainMenu.first().find('.menu-item--active-trail');
        if ($activeItem) {
          $mainMenu.last().css('marginTop', $activeItem.offset().top + 'px');
        }
      }
    }

  });

  new MainMenu();

}(jQuery, window));
