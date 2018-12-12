/**
 * @file
 * Enhancements for bootstrap's carousel.
 */
(function($, Hammer, window) {
  'use strict';

  $(function() {
    $('.carousel').each(function() {
      var $carousel = $(this);

      $(window).on('resize orientationchange', function() {
        normalizeCarouselHeights($carousel);
      });

      $carousel.on('slide.bs.carousel', function(e) {
        var $nextItem = $carousel.find('.carousel-item').eq(e.to);
        var $content = $nextItem.children('article');
        setTimeout(function() {
          $content.css('top', ($nextItem.height() / 2 - $content.height() / 2) + 'px');
        }, 0);
      });

      (new Hammer(this)).on('panleft', function() {
        $carousel.carousel('next');
      });

      (new Hammer(this)).on('panright', function() {
        $carousel.carousel('prev');
      });

      $carousel.find('.carousel-item').each(function() {
        $(this).find('img').attr('draggable', 'false');
      });

      normalizeCarouselHeights($carousel);
    });
  });

  /**
   * @param {jQuery} $carousel
   */
  function normalizeCarouselHeights($carousel) {
    var $items = $carousel.find('.carousel-item');
    var maxHeight = 0;

    $items.each(function() {
      $(this).css('min-height', '0');
    });

    $items.each(function() {
      var height = $(this).height();

      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    $items.each(function() {
        $(this).css('minHeight', maxHeight + 'px');
    });
  }

})(jQuery, Hammer, window);
