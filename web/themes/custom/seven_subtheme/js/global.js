(function($) {
  'use strict';

  $(function() {
    // Hide author input box when selecting a public domain license.
    $('body').on('change', function(e) {
      if (!e.target.hasAttribute('data-public-domain')) {
        return;
      }

      var $select = $(e.target);
      var $selectWrapper = $select.closest('.form-wrapper');
      var $subForm = $selectWrapper.closest('.paragraphs-subform');
      var $author = $subForm.find('.field--name-field-author');
      var licenses = $select.data('public-domain');

      if (!$author.length) {
        return;
      }

      var isPublicDomain = $.inArray($select.val(), licenses) !== -1;
      var animate = false;

      if (isPublicDomain && ($author.is(':visible') || $author.is(':animated'))) {
        animate = $selectWrapper.css('display') === 'inline-block'
          ? 'fadeOut' : 'slideUp';
      }
      else if (!isPublicDomain && (!$author.is(':visible') || $author.is(':animated'))) {
        animate = $selectWrapper.css('display') === 'inline-block'
          ? 'fadeIn' : 'slideDown';
      }

      if (animate) {
        $author.stop(true)[animate]().promise().done(function() {
          if (!$author.is(':visible')) {
            $author.find('input').val('');
          }
        });
      }
    });
  });

})(jQuery);
