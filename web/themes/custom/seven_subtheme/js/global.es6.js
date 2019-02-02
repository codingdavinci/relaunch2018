(function($) {
  $(() => {
    $('body').on('change', e => {
      if (e.target.hasAttribute('data-public-domain')) {
        hideAttributionInputOnPublicDomain(e.target);
      }
    });

    hideAttributionInputOnPublicDomain();
  });

  /**
   * @param {HTMLElement} select
   */
  function hideAttributionInputOnPublicDomain(select) {
    const isPageLoad = !select;
    const $select = select ? $(select) : $('select[data-public-domain]');

    $select.each(function() {
      const $this = $(this);
      const $selectWrapper = $this.closest('.form-wrapper');
      const $subForm = $selectWrapper.closest('.paragraphs-subform');
      const $author = $subForm.find('.field--name-field-author');
      const licenses = $this.data('public-domain');

      if (!$author.length) {
        return;
      }

      const isPublicDomain = $.inArray($this.val(), licenses) !== -1;
      let animate = false;

      if (
        isPublicDomain &&
        ($author.is(':visible') || $author.is(':animated'))
      ) {
        if (isPageLoad) {
          animate = 'hide';
        } else {
          animate =
            $selectWrapper.css('display') === 'inline-block'
              ? 'fadeOut'
              : 'slideUp';
        }
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
  }
})(jQuery);
