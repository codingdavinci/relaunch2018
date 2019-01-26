/**
 * @file
 * FAQ view interaction behaviour.
 */
(function($) {
  $(() => {
    $('.view-faq')
      .find('.views-field-title a')
      .on('click', e => {
        const $a = $(e.target);
        const $li = $a.closest('li');
        const $content = $li.find('.item-content');

        $content
          .stop(true)
          [$content.is(':visible') ? 'slideUp' : 'slideDown']({
            easing: 'easeInOutCirc'
          })
          .promise()
          .done(() =>
            $li[$content.is(':visible') ? 'addClass' : 'removeClass']('active')
          );

        return false;
      });
  });
})(jQuery);
