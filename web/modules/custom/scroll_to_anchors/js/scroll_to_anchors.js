/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  function isValidSelector(anchor) {
    return (/^#[a-z][a-z0-9_-]*$/i.test(anchor)
    );
  }

  function scrollTo(offset) {
    var $nav = $('#block-main-menu nav');

    offset -= parseInt($('body').css('padding-top').replace('px', ''), 10);

    if ($nav.length) {
      offset -= $nav.outerHeight();
    }

    var heightDifference = $(document).height() - $(window).height();
    var scrollTop = offset > heightDifference ? heightDifference : offset;
    var movement = 'scroll mousedown DOMMouseScroll mousewheel keyup';

    $('html, body').animate({ scrollTop: scrollTop }, 500, 'swing').bind(movement, function () {
      $('html, body').stop();
    });
  }

  Drupal.behaviors.scrollToAnchors = {
    attach: function attach(context) {
      $('a[href^="#"]', context).click(function (event) {
        event.preventDefault();

        var href = $(this).attr('href');
        var strippedHref = href.replace('#', '');

        if (isValidSelector(href)) {
          var offset = null;

          if ($(href).length) {
            offset = $(this.hash).offset().top;
          } else if ($('a[name=' + strippedHref + ']').length) {
            offset = $('a[name=' + strippedHref + ']').offset().top;
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