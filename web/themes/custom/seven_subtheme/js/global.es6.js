(function($) {
  $(() => {
    // Hide author input box when selecting a public domain license.
    $('body').on('change', e => {
      if (!e.target.hasAttribute('data-public-domain')) {
        return;
      }

      const $select = $(e.target);
      const $selectWrapper = $select.closest('.form-wrapper');
      const $subForm = $selectWrapper.closest('.paragraphs-subform');
      const $author = $subForm.find('.field--name-field-author');
      const licenses = $select.data('public-domain');

      if (!$author.length) {
        return;
      }

      const isPublicDomain = $.inArray($select.val(), licenses) !== -1;
      let animate = false;

      if (
        isPublicDomain &&
        ($author.is(':visible') || $author.is(':animated'))
      ) {
        animate =
          $selectWrapper.css('display') === 'inline-block'
            ? 'fadeOut'
            : 'slideUp';
      } else if (
        !isPublicDomain &&
        (!$author.is(':visible') || $author.is(':animated'))
      ) {
        animate =
          $selectWrapper.css('display') === 'inline-block'
            ? 'fadeIn'
            : 'slideDown';
      }

      if (animate) {
        $author
          .stop(true)
          [animate]()
          .promise()
          .done(() => {
            if (!$author.is(':visible')) {
              $author.find('input').val('');
            }
          });
      }
    });
  });
})(jQuery);
