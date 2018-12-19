/**
 * @file
 * Color scheme specific functionality.
 */
(function($) {
  'use strict';

  $(function() {
    var options = {
      duration: 'fast'
    };

    $('[data-color-scheme-hover]').hover(
      function(e) {
        var $container = $(e.target).closest('[data-color-scheme-hover]');
        $container.stop(true).animate({
          backgroundColor: '#' + $container.data('color-scheme-hover')[1]
        }, options);
      },
      function(e) {
        var $container = $(e.target).closest('[data-color-scheme-hover]');
        $container.stop(true).animate({
          backgroundColor: '#' + $container.data('color-scheme-hover')[0]
        }, options);
      }
    );
  });

})(jQuery);
