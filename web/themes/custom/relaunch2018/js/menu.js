(function($, Hammer, window) {
  'use strict';

  var MainMenu = function() {
    var self = this;
    var $context = $('.region-primary-menu');
    this.$burger = $context.find('.burger');
    this.$menuContainer = $context.find('.menu--container');
    this.$mainMenu = $context.find('.menu--main');
    this.$subMenu = $context.find('.menu--main--submenu');

    this._setBurgerPosition();

    this.$burger.on('click', function() {
      self._changeState($context);
    });

    this.$mainMenu.find('a').on('click', function(e) {
      var $a = $(e.target);
      var $item = $a.closest('.menu-item');
      var subMenuHtml = $item.data('submenu');

      self.$mainMenu.find('.active').removeClass('active');
      $item.addClass('active');

      if (subMenuHtml) {
        self.$subMenu.empty().append(subMenuHtml)
        .data('menu-parent', $item)
        .addClass('active');

        self._repositionSubMenu();
        return false;
      }
    });

    (new Hammer(this.$menuContainer.get(0))).on('panleft', function() {
      self._changeState($context);
    });

    $(window).on('resize', function() {
      self._repositionSubMenu();
    });
  };

  $.extend(MainMenu.prototype, {
    /**
     * @type {jQuery}
     */
    $burger: undefined,

    /**
     * @type {jQuery}
     */
    $menuContainer: undefined,

    /**
     * @type {jQuery}
     */
    $mainMenu: undefined,

    /**
     * @type {jQuery}
     */
    $subMenu: undefined,

    /**
     * @param {jQuery} $context
     */
    _changeState: function($context) {
      var self = this;

      if (!this.$menuContainer.hasClass('active')) {
        this.$menuContainer.addClass('active');
        this.$burger.addClass('menu--close');
        this._repositionSubMenu();

        $(window).on('click.menu', function(e) {
          var $target = $(e.target);
          if (
            !$target.closest(self.$burger).length
            && !$target.closest(self.$menuContainer).length
          ) {
            self._changeState($context);
          }
        });
      } else {
        this.$menuContainer.removeClass('active');
        this.$burger.removeClass('menu--close');
        $(window).off('.menu');
      }
    },

    /**
     * Repositions the sub-menu to the currently active 1st level item of the
     * main menu.
     */
    _repositionSubMenu: function() {
      var $parent = this.$subMenu.data('menu-parent');

      if ($parent) {
        this.$subMenu.css(
          'marginTop',
          $parent.offset().top - this.$mainMenu.offset().top + 'px'
        );
      }
    },

    /**
     * Shifts the burger position if the admin toolbar is present.
     */
    _setBurgerPosition: function() {
      if (!$('body').hasClass('toolbar-horizontal')) {
        return;
      }

      this.$burger
        .css('position', 'absolute')
        .css('top', this.$burger.position().top + this.$burger.offset().top)
        .css('position', 'fixed');
    }

  });

  new MainMenu();

}(jQuery, Hammer, window));
