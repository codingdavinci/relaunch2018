/**
 * @file
 * Main menu behaviour.
 */
(function($) {
  'use strict';

  $(function() {
    var $body = $('body');
    var $primaryMenu = $('.region-primary-menu');

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
    })
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
