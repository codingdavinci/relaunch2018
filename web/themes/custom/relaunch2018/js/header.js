/**
 * @file
 * Tiled header initialisation and interaction behaviour.
 * Original code:
 * https://github.com/codingdavinci/codingdavinci.de/blob/gh-pages/js/codingdavinci.js
 */
(function($) {
  'use strict';

  $(function() {
    var $tileContainer = $('.tiles');
    var originalTileSize = $tileContainer.hasClass('tiles--frontpage') ? 214 : 280;
    var tileSize = Math.sqrt(originalTileSize * originalTileSize * 2);

    // Top left edge of the unrotated tile in even columns:
    var even = {top: 39, left: -113};

    // Top left edge of the unrotated tile in odd columns:
    var odd = {top: even.top - tileSize / 2, left: even.left + tileSize / 2};

    var frontSideTilesCount = $tileContainer.hasClass('tiles--frontpage') ? 31 : 20;
    var backSideTileCount = 9;
    var maxLines = $tileContainer.hasClass('tiles--frontpage') ? 8 : 6;

    var html = [];
    var frontSide_i = 0;
    var backSide_i;
    var l;
    var t;

    for (var i = 0; i < maxLines; i++) {

      // Build a line of even and odd tiles:
      for (var j = 0; j < 6; j++) {

        if (j % 2 === 0) {
          t = even.top + (j / 2) * tileSize;
          l = even.left + i * tileSize;
        } else {
          t = odd.top + Math.floor(j / 2) * tileSize;
          l = odd.left + i * tileSize;
        }

        t = Math.round(t * 10) / 10;
        l = Math.round(l * 10) / 10;

        backSide_i = Math.floor(Math.random() * backSideTileCount) + 1;

        html.push(''
          + '<div class="header-tile" style="left:' + l + 'px;top:' + t + 'px;">'
          + '<div class="flipper">'
          + '<div class="front cdv-tiles'+ (frontSide_i % frontSideTilesCount + 1) + '"></div>'
          + '<div class="back code-tile' + backSide_i + '"></div>'
          + '</div>'
          + '</div>');

        frontSide_i++;
      }
    }

    $tileContainer.html(html.join(''));

    $('.header-tile')
    .on('mouseenter', function(e) {
      $(e.target).closest('.header-tile').addClass('hover');
    })
    .on('mouseleave', function(e) {
      $(e.target).closest('.header-tile').removeClass('hover');
    });
  });

})(jQuery);
