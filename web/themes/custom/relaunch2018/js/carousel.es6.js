/**
 * @file
 * Enhancements for bootstrap's carousel.
 */
(function($, Hammer, window) {
  $(() => {
    $('.carousel').each(function() {
      const $carousel = $(this);

      $(window).on('resize orientationchange', () =>
        normalizeCarouselHeights($carousel)
      );

      $carousel.on('slide.bs.carousel', e => {
        const $nextItem = $carousel.find('.carousel-item').eq(e.to);
        const $content = $nextItem.children('article');
        setTimeout(() => {
          $content.css(
            'top',
            `${$nextItem.height() / 2 - $content.height() / 2}px`
          );
        }, 0);
      });

      new Hammer(this).on('panleft', () => $carousel.carousel('next'));

      new Hammer(this).on('panright', () => $carousel.carousel('prev'));

      $carousel.find('.carousel-item').each(function() {
        $(this)
          .find('img')
          .attr('draggable', 'false');
      });

      normalizeCarouselHeights($carousel);
    });
  });

  /**
   * @param {jQuery} $carousel
   */
  function normalizeCarouselHeights($carousel) {
    const $items = $carousel.find('.carousel-item');
    let maxHeight = 0;

    $items.each(function() {
      const height = $(this).height();

      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    $items.each(function() {
      $(this).height(maxHeight);
    });
  }
})(jQuery, Hammer, window);
