/**
 * @file
 * Puts the "read more" links from below a trimmed article teaser text to the
 * end of the article teaser text for displaying it inline with the text.
 */
(function($) {
  $(() => {
    $(
      '.node--type-article.node--view-mode-teaser, .node--type-article.node--view-mode-frontpage'
    ).each(function() {
      const $paragraphs = $(this)
        .find('.field--name-field-paragraphs')
        .find('p');

      if (!$paragraphs.length) {
        return;
      }

      let $links = $(this)
        .find('.node__links')
        .remove();

      if (!$links.length) {
        $links = $(this)
          .find('.field--name-title')
          .parent('a')
          .clone();

        if (!$links.length) {
          return;
        }

        // TODO: Resolve when https://www.drupal.org/project/drupal/issues/2662898 is done.
        $links = $('<div>')
          .addClass('node__links')
          .append(
            $('<ul>')
              .addClass('links inline')
              .append(
                $('<li class="node-readmore">').append($links.clone().text('…'))
              )
          );
      }

      $paragraphs.last().append($links);
    });
  });
})(jQuery);
