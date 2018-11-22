(function($, Drupal) {
  'use strict';

  /**
   * Adds multi-step functionality to horizontal tabs.
   */
  $(function() {
    var $tabs = $('.horizontal-tabs');
    var $panes = $tabs.find('.horizontal-tabs-panes > details');

    $panes.each(function(i) {
      var $pane = $(this);
      $pane.append(
        '<div class="form-alter--multistep">'
          + '<div class="form-alter--multistep--back"></div>'
          + '<div class="form-alter--multistep--next"></div>'
        + '</div>'
      );

      if (this !== $panes.get(0)) {
        $('<button class="button button--primary">' + Drupal.t('back') + '</button>')
          .appendTo($pane.find('.form-alter--multistep--back'))
          .on('click', function() {
            $panes.eq(i - 1).data('horizontalTab').tabShow();
            scrollToTop($panes.eq(i - 1));
            return false;
          });
      }

      if (this !== $panes.get($panes.length - 1)) {
        $('<button class="button button--primary">' + Drupal.t('next') + '</button>')
          .appendTo($pane.find('.form-alter--multistep--next'))
          .on('click', function() {
            $panes.eq(i + 1).data('horizontalTab').tabShow();
            scrollToTop($panes.eq(i + 1));
            return false;
          });
      }
    });

  });

  /**
   * @param {jQuery} $pane
   */
  function scrollToTop($pane) {
    var offsetTop = $pane.closest('.horizontal-tabs').offset().top;
    var $toolbar = $('#toolbar-bar');

    if ($toolbar.length && $toolbar.is(':visible')) {
      offsetTop -= $toolbar.outerHeight();

      var $toolbarTray = $toolbar.find('.toolbar-tray-horizontal');

      if ($toolbarTray.length && $toolbarTray.is(':visible')) {
        offsetTop -= $toolbarTray.outerHeight();
      }
    }

    $('html, body').animate({
      scrollTop: offsetTop - 20
    });
  }

}(jQuery, Drupal));
