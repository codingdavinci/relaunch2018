/**
 * @file
 * Tiled header initialisation and interaction behaviour.
 * Original code:
 * https://github.com/codingdavinci/codingdavinci.de/blob/gh-pages/js/codingdavinci.js
 */
(function($, drupalSettings) {
  $(() => {
    const $tileContainer = $('.tiles');
    const isFrontPage = $tileContainer
      .closest('body')
      .hasClass('path-frontpage');
    const originalTileSize = isFrontPage ? 214 : 280;
    const tileSize = Math.sqrt(originalTileSize * originalTileSize * 2);

    // Top left edge of the unrotated tile in even columns:
    const even = { top: 39, left: -113 };

    // Top left edge of the unrotated tile in odd columns:
    const odd = {
      top: even.top - tileSize / 2,
      left: even.left + tileSize / 2
    };

    const frontSideTilesCount = isFrontPage ? 42 : 20;
    const backSideTileCount = 24;
    const maxLines = isFrontPage ? 8 : 6;
    const lineLength = isFrontPage ? 8 : 6;

    const html = [];
    let frontSideI = 0;
    let backSideI;
    let l;
    let t;

    for (let i = 0; i < maxLines; i++) {
      // Build a line of even and odd tiles:
      for (let j = 0; j < lineLength; j++) {
        if (j % 2 === 0) {
          t = even.top + (j / 2) * tileSize;
          l = even.left + i * tileSize;
        } else {
          t = odd.top + Math.floor(j / 2) * tileSize;
          l = odd.left + i * tileSize;
        }

        t = Math.round(t * 10) / 10;
        l = Math.round(l * 10) / 10;

        frontSideI++;
        backSideI = Math.floor(Math.random() * backSideTileCount);

        /* eslint-disable prettier/prettier */
        html.push(
          `<div class="header-tile" style="left:${l}px;top:${t}px;">
          <div class="flipper">
          <div class="front cdv-tile-${frontSideI % frontSideTilesCount}"${
            drupalSettings.relaunch2018 && drupalSettings.relaunch2018.tiledHeader
            ? ` style="background-image:url(${drupalSettings.relaunch2018.tiledHeader})"`
            : ''
          }></div>
          <div class="back code-tile-${backSideI}"></div>
          </div>
          </div>`
        );
        /* eslint-enable */
      }
    }

    $tileContainer.html(html.join(''));

    $('.header-tile')
      .on('mouseenter', e => {
        $(e.target)
          .closest('.header-tile')
          .addClass('hover');
      })
      .on('mouseleave', e => {
        $(e.target)
          .closest('.header-tile')
          .removeClass('hover');
      });
  });
})(jQuery, drupalSettings);
