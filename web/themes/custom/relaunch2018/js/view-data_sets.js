(function($) {
  'use strict';

  $(function() {
    var $dataSets = $('.view-data-sets');


    // Since, when no filter value is selected, the effect is that all values
    // are selected, the initial visual state is selected. When hovering a
    // filter value, all other values should appear visually deselected.
    var filterWrapperClasses = [
      '.form-item-object-type',
      '.form-item-license',
      '.form-item-metadata-format',
      '.form-item-event-id'
    ];

    $.each(filterWrapperClasses, function() {
      var $wrapper = $dataSets.find(this);
      var $links = $wrapper.find('.bef-links');
      var $items = $links.children('ul').children('li');
      var $active = $items.children('div.bef-link-active');

      if (!$items.length) {
        $items = $links.children('div');
        $active = $items.filter('.bef-link-active');
      }

      if ($items.length === $active.length) {
        $active.children('a').hover(
          function(e) {
            var $a = $(e.target);
            $active.not($a.parent()).children('a').addClass('bef-link-inactive');
            $a.addClass('bef-link-hover');
          },
          function() {
            $active.children('a').removeClass('bef-link-inactive bef-link-hover');
          }
        );
      }
    });
  });

})(jQuery);
