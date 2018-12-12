/**
 * @file
 * FAQ view interaction behaviour.
 */
(function($) {
  'use strict';

  $(function() {
    $('.view-faq').find('.views-field-title a').on('click', function(e) {
      var $a = $(e.target);
      var $li = $a.closest('li');
      var $content = $li.find('.item-content');

      $content.stop(true)[$content.is(':visible') ? 'slideUp' : 'slideDown']({
        easing: 'easeInOutCirc'
      }).promise().done(function() {
        $li[$content.is(':visible') ? 'addClass' : 'removeClass']('active');
      });

      return false;
    });
  });

})(jQuery);
