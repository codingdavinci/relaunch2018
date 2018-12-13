/**
 * @file
 * Tiled header initialisation and interaction behaviour.
 * Original code:
 * https://github.com/codingdavinci/codingdavinci.de/blob/gh-pages/js/codingdavinci.js
 */
(function($) {
  'use strict';

  $(function() {
    var html = [], l, t;
    var tileContainer = $('.tiles');
    var containerWidth = tileContainer.width();
    var maxCover = 1200;
    var originalTileSize = 214;
    var tileSize = Math.sqrt(originalTileSize * originalTileSize * 2);
    var offset = containerWidth > maxCover
      ? Math.floor(((containerWidth - maxCover) / 2) / tileSize) : 0;
    var topEven = 39;
    var leftEven = -113 + (offset * tileSize);
    var topOdd = topEven - tileSize / 2;
    var leftOdd = leftEven + (tileSize / 2);
    var n = 0, r;

    for (var i=0; i < 5; i += 1) {
      for (var j=0; j < 6; j += 1) {
        n += 1;
        if (j % 2 === 0) {
          t = topEven + (j / 2) * tileSize;
          l = leftEven + i * tileSize;
        } else {
          t = topOdd + Math.floor(j / 2) * tileSize;
          l = leftOdd + i * tileSize;
        }

        t = Math.round(t * 10) / 10;
        l = Math.round(l * 10) / 10;

        r = Math.floor(Math.random() * 9) + 1;

        html.push(''
          + '<div class="header-tile" style="left:' + l + 'px;top:' + t + 'px;">'
          + '<div class="flipper" style="transition-delay:0s;">'
          + '<div class="front cdv-tiles'+ n + '"></div>'
          + '<div class="back code-tile' + r + '"></div>'
          + '</div>'
          + '</div>');
      }
    }

    tileContainer.html(html.join(''));
  });

})(jQuery);
