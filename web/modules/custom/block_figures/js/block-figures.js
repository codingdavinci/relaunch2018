(function($) {
  'use strict';

  $(function() {
    $('.block-block-figures').each(function() {
      $(this).find('[data-count]').each(function() {
        $(this).text('0');
      });

      // Set waypoint on the first item, because items might be underneath each
      // other on mobile.
      $(this).find('.block-figures--item').eq(0).waypoint({
        handler: function() {
          var $counters = $(this.element)
            .closest('.block-block-figures')
            .find('[data-count]');
          count($counters.eq(0), $counters);
          this.destroy();
        },
        offset: 'bottom-in-view'
      });
    });
  });

  /**
   * @param {jQuery} $counter
   * @param {jQuery} $counters
   */
  function count($counter, $counters) {
    $counter.countUp({
      last: $counter.data('count'),
      complete: function() {
        $counters.each(function(i) {
          if (this === $counter.get(0) && $counters.get(i + 1)) {
            count($counters.eq(i + 1), $counters);
          }
        })
      }
    });
  }

})(jQuery);
