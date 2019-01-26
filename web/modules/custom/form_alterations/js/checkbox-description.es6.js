(function($) {
  /**
   * Shows a description set on a checkbox when the checkbox is checked.
   */
  $(() => {
    const $checkboxes = $('.form-checkbox[data-description]').closest(
      '.form-checkboxes'
    );

    $checkboxes.on('click', e => {
      if (e.target.tagName.toUpperCase() !== 'LABEL') {
        updateCheckboxDescription($(e.target).closest('.form-type-checkbox'));
      }
    });

    $checkboxes.each(function() {
      $(this)
        .find('.form-type-checkbox')
        .each(function() {
          updateCheckboxDescription($(this), true);
        });
    });
  });

  /**
   * @param {jQuery} $checkboxContainer
   * @param {bool} [init]
   */
  function updateCheckboxDescription($checkboxContainer, init) {
    const $checkbox = $checkboxContainer.find('input');
    const description = $checkbox.data('description');

    if (!description) {
      return;
    }

    let $description = $checkboxContainer.find('.form-checkbox--description');

    if ($checkbox.is(':checked')) {
      if (!$description.length) {
        $description = $('<div>').addClass(
          'form-checkbox--description description'
        );

        if (!init) {
          $description.hide();
        }

        $description.html($checkbox.data('description'));

        $checkboxContainer.append($description);
      }
      $description.stop(true).slideDown();
    } else if ($description.length) {
      $description.stop(true).slideUp();
    }
  }
})(jQuery);
