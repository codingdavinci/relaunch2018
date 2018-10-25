(function($) {
  'use strict';

  $(function() {
    $('.node--type-article.node--view-mode-teaser').each(function() {
      var $paragraphs = $(this).find('.field--name-field-paragraphs').find('p');

      if (!$paragraphs.length) {
        return;
      }

      var $links = $(this).find('.node__links').remove();
      $paragraphs.last().append($links);
    });
  });

})(jQuery);
