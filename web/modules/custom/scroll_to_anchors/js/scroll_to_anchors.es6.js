(function($) {
  /**
   * @param {string} anchor
   * @returns {boolean}
   */
  function isValidSelector(anchor) {
    return /^#[a-z][a-z0-9_-]*$/i.test(anchor);
  }

  /**
   * @param {number} offset
   */
  function scrollTo(offset) {
    const $nav = $('#block-main-menu nav');

    offset -= parseInt(
      $('body')
        .css('padding-top')
        .replace('px', ''),
      10
    );

    if ($nav.length) {
      offset -= $nav.outerHeight();
    }

    const heightDifference = $(document).height() - $(window).height();
    const scrollTop = offset > heightDifference ? heightDifference : offset;
    const movement = 'scroll mousedown DOMMouseScroll mousewheel keyup';

    $('html, body')
      .animate({ scrollTop }, 500, 'swing')
      .bind(movement, () => {
        $('html, body').stop();
      });
  }

  Drupal.behaviors.scrollToAnchors = {
    attach(context) {
      $('a[href^="#"]', context).click(function(event) {
        event.preventDefault();

        const href = $(this).attr('href');
        const strippedHref = href.replace('#', '');

        if (isValidSelector(href)) {
          let offset = null;

          if ($(href).length) {
            offset = $(this.hash).offset().top;
          } else if ($(`a[name=${strippedHref}]`).length) {
            offset = $(`a[name=${strippedHref}]`).offset().top;
          }

          if (offset) {
            scrollTo(offset);
            document.location.hash = strippedHref;
          }
        }
      });
    }
  };
})(jQuery);
