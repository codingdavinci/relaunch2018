(function($) {
  'use strict';

  /**
   * Drupal flattens the taxonomy hierarchy when rendering taxonomy checkboxes.
   * This is done at an early stage in TermSelection::getReferenceableEntities.
   * Thus, there is no proper way to alter the output to reflect hierarchy in
   * the HTML using some hook or even by altering the theme registry to
   * add/alter checkbox field preprocessing.
   * However, the term output is sorted as to the hierarchy tree and
   * TermSelection::getReferenceableEntities adds one slash to the label per
   * hierarchy level.
   */
  $(function() {
    var $checkboxes = $('.form-checkboxes');

    $checkboxes.each(function() {
      var $this = $(this);
      insertHierarchyIntoHtml($this);
      addClickBehaviour($this);
    });
  });

  /**
   * Groups $items <div> tags according to their hierarchy.
   *
   * @param {jQuery} $checkboxes
   */
  function insertHierarchyIntoHtml($checkboxes) {
    var $items = $checkboxes.children();
    var currentLevel = 0;
    var currentLevelChecked = false;
    var html = '';

    $items.each(function() {
      var $item = $(this);
      var level = getLevel($(this));
      var $label = $item.find('label');
      $label.text($label.text().replace(/^-*/g, ''));

      if (level > currentLevel) {
        html +=
          '<div class="hierarchy hierarchy-level-' +
          level +
          (currentLevelChecked ? ' hierarchy-level-visible' : '') +
          '">';
      } else if (level < currentLevel) {
        html += '</div>';
      }

      html += this.outerHTML;

      currentLevel = level;
      currentLevelChecked = $item.find('input').prop('checked');
    });

    $items.remove();
    $checkboxes.html(html);
  }

  /**
   * Retrieves the hierarchy level from a checkbox item rendered by Drupal.
   *
   * @param {jQuery} $item
   */
  function getLevel($item) {
    return ($item
      .find('label')
      .text()
      .match(/^-*/g) || [])[0].length;
  }

  /**
   * Adds click event folding out / collapsing lower hierarchy checkboxes.
   *
   * @param $checkboxes
   */
  function addClickBehaviour($checkboxes) {
    var $items = $checkboxes.find('div.form-item');

    $items.on('click', function(e) {
      var $item = $(e.target).closest('div.form-item');
      var $next = $item.next();

      if ($next.hasClass('hierarchy')) {
        $next.stop(true);
        $next[$item.find('input').prop('checked') ? 'slideDown' : 'slideUp']({
          easing: 'easeInOutCirc'
        })
          .promise()
          .done(function() {
            if (!$next.is(':visible')) {
              $next.find('input').prop('checked', false);
            }
          });
      }
    });
  }
})(jQuery);
