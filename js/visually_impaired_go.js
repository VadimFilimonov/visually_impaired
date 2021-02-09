(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.visually_impaired = {
    attach: function () {
      console.error('This module is outdated')
      console.error('Use visually_impaired_module instead');
      console.error('https://www.drupal.org/project/visually_impaired_module');

      const siteversion = localStorage.getItem('version');
      const sitefontsize = localStorage.getItem('visually_impairedfontsize');
      const sitecolor = localStorage.getItem('visually_impairedcolor');
      const siteimages = localStorage.getItem('visually_impairedimages');

      if (siteversion === null) {
        localStorage.setItem('version', 'normal');
      }

      if (siteversion === 'normal') {
        $('.js-visually-impaired').attr('data-buttonto', 'visually_impaired');
      } else if (siteversion === 'visually_impaired') {
        $('.js-visually-impaired').attr('data-buttonto', 'normal');
      }

      if ($('html').attr('data-version') === 'normal') {
        $('html').removeAttr('data-fontsize');
        $('html').removeAttr('data-color');
        $('html').removeAttr('data-images');
      }

      if (sitefontsize === 'litle') {
        $('html').attr('data-fontsize', 'litle');
        $('.js-btn-small').addClass('active');
      }

      if (sitefontsize === 'medium') {
        $('html').attr('data-fontsize', 'medium');
        $('.js-btn-medium').addClass('active');
      }

      if (sitefontsize === 'large') {
        $('html').attr('data-fontsize', 'large');
        $('.js-btn-large').addClass('active');
      }

      if (sitecolor === 'blackonwhite') {
        $('html').attr('data-color', 'blackonwhite');
      }

      if (sitecolor === 'whiteonblack') {
        $('html').attr('data-color', 'whiteonblack');
        $('.js-btn-dark').addClass('active');
      }

      if (sitecolor === 'whiteonblue') {
        $('html').attr('data-color', 'whiteonblue');
        $('.js-btn-blue').addClass('active');
      }

      if (siteimages === 'all') {
        $('html').attr('data-images', 'all');
        $('.js-btn-all').addClass('active');
      }

      if (siteimages === 'bw') {
        $('html').attr('data-images', 'bw');
        $('.js-btn-bw').addClass('active');
      }

      if (siteimages === 'alt') {
        $('html').attr('data-images', 'alt');
        $('.js-btn-alt').addClass('active');
      }

      if (siteimages === 'none') {
        $('html').attr('data-images', 'none');
        $('.js-btn-none').addClass('active');
      }

      $('.js-visually-impaired' + '[data-buttonto="normal"]').text(
        'Обычная версия сайта'
      );

      $('.js-visually-impaired').click(function () {
        if ($(this).attr('data-buttonto') === 'normal') {
          document.cookie = 'version=normal; path=/; http_only=true';
          $('html').attr('data-version', 'normal');
          $('.js-visually-impaired').attr('data-buttonto', 'visually_impaired');
          $('.js-visually-impaired' + '[data-buttonto="visually_impaired"]').text(
            'Версия для слабовидящих'
          );
          localStorage.setItem('version', 'normal');
          $('html').removeAttr('data-fontsize');
          $('html').removeAttr('data-color');
          $('html').removeAttr('data-images');
        } else {
          document.cookie = 'version=visually_impaired; path=/; http_only=true';
          $('html').attr('data-version', 'visually_impaired');
          $('.js-visually-impaired').attr('data-buttonto', 'normal');
          $('.js-visually-impaired' + '[data-buttonto="normal"]').text(
            'Обычная версия сайта'
          );
          localStorage.setItem('version', 'visually_impaired');
        }
      });

      $('.js-btn-small').click(function () {
        localStorage.setItem('visually_impairedfontsize', 'litle');
        $('html').attr('data-fontsize', 'litle');
        $('.js-btn-size').removeClass('active');
        $(this).addClass('active');
      });

      $('.js-btn-medium').click(function () {
        localStorage.setItem('visually_impairedfontsize', 'medium');
        $('html').attr('data-fontsize', 'medium');
        $('.js-btn-size').removeClass('active');
        $(this).addClass('active');
      });

      $('.js-btn-large').click(function () {
        localStorage.setItem('visually_impairedfontsize', 'large');
        $('html').attr('data-fontsize', 'large');
        $('.js-btn-size').removeClass('active');
        $(this).addClass('active');
      });

      $('.js-btn-white').click(function() {
        localStorage.setItem('visually_impairedcolor', 'blackonwhite');
        $('html').attr('data-color', 'blackonwhite');
        $('.js-btn-color').removeClass('active');
        $(this).addClass('active');
      });

      $('.js-btn-dark').click(function () {
        localStorage.setItem('visually_impairedcolor', 'whiteonblack');
        $('html').attr('data-color', 'whiteonblack');
        $('.js-btn-color').removeClass('active');
        $(this).addClass('active');
      });

      $('.js-btn-blue').click(function () {
        localStorage.setItem('visually_impairedcolor', 'whiteonblue');
        $('html').attr('data-color', 'whiteonblue');
        $('.js-btn-color').removeClass('active');
        $(this).addClass('active');
      });

      $('.js-btn-all').click(function () {
        localStorage.setItem('visually_impairedimages', 'all');
        $('html').attr('data-images', 'all');
        $('.js-btn-image').removeClass('active');
        $(this).addClass('active');
        if ($('.visible_alt').html()) {
          $('img').unwrap();
          $('span.alttext').remove();
        }
      });

      $('.js-btn-bw').click(function () {
        localStorage.setItem('visually_impairedimages', 'bw');
        $('html').attr('data-images', 'bw');
        $('.js-btn-image').removeClass('active');
        $(this).addClass('active');
        if ($('.visible_alt').html()) {
          $('img').unwrap();
          $('span.alttext').remove();
        }
      });

      $('.js-btn-alt').click(function () {
        localStorage.setItem('visually_impairedimages', 'alt');
        $('html').attr('data-images', 'alt');
        $('.js-btn-image').removeClass('active');
        $(this).addClass('active');
        if ($('img').closest('div').hasClass('visible_alt') === false) {
          $('img').wrap('<div class="visible_alt"></div>');
        }
        $('.visible_alt').each(function () {
          $('.alttext', this).remove();
          var alt_text = $('img', this).attr('alt');
          $(this).append('<span class="alttext">' + alt_text + '</span>');
        });
      });

      if (siteimages === 'alt') {
        $('.js-btn-alt').click();
      }

      $('.js-btn-none').click(function () {
        localStorage.setItem('visually_impairedimages', 'none');
        $('html').attr('data-images', 'none');
        $('.js-btn-image').removeClass('active');
        $(this).addClass('active');
        if ($('.visible_alt').html()) {
          $('img').unwrap();
          $('span.alttext').remove();
        }
      });

    },
  };
})(jQuery, Drupal);
