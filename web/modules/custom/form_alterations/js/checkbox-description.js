(function($) {
  'use strict';

  /**
   * Shows a description set on a checkbox when the checkbox is checked.
   */
  $(function() {
    var $checkboxes = $('.form-checkbox[data-description]').closest('.form-checkboxes');

    $checkboxes.on('click', function(e) {
      if (e.target.tagName.toUpperCase() === 'LABEL') {
        return;
      }

      var $container = $(e.target).closest('.form-type-checkbox');
      var $checkbox = $container.find('input');
      var description = $checkbox.data('description');

      if (!description) {
        return;
      }

      var $description = $container.find('.form-checkbox--description');

      if ($checkbox.is(':checked')) {
        if (!$description.length) {
          $description = $('<div>')
            .addClass('form-checkbox--description description').hide().html(
              $checkbox.data('description')
            );

          $container.append($description);
        }
        $description.stop(true).slideDown();
      }
      else if ($description.length) {
        $description.stop(true).slideUp();
      }
    });
  });

}(jQuery));
