(function ($, Drupal, drupalSettings) {

    'use strict';
	
	Drupal.behaviors.visually_impaired = {
	  attach: function (context) {

	  	// Тег, к которому будут добавляться атрибуты. В большинстве случаев это body или html.
	  	var attributesKeeper = 'body';

	  	// Кнопка, которая переключает версию сайта
	  	var buttonSwitcher = '.js-visually-impaired';
	  	// Кнопки для настройки версии сайта для слабовидящих
	  	// Размеры
	  	// Все кнопки
	  	var size_common = '.visually_impairedSettings .visually_impairedSettings__fsizes .visually_impairedSettings__item';
	  	// Малый шрифт
	  	var size_litle = '.visually_impairedSettings .visually_impairedSettings__fsizes .visually_impairedSettings__item.-small';
	  	// Средний шрифт
	  	var size_medium = '.visually_impairedSettings .visually_impairedSettings__fsizes .visually_impairedSettings__item.-medium';
	  	// Большой шрифт
	  	var size_large = '.visually_impairedSettings .visually_impairedSettings__fsizes .visually_impairedSettings__item.-large';
	  	// Цветовая палитра
	  	// Все кнопки
	  	var color_common = '.visually_impairedSettings .visually_impairedSettings__colors .visually_impairedSettings__item';
	  	// Черный на белом
	  	var color_blackOnWhite = '.visually_impairedSettings .visually_impairedSettings__colors .visually_impairedSettings__item.-white';
	  	// Белый на черном
	  	var color_whiteOnBlack = '.visually_impairedSettings .visually_impairedSettings__colors .visually_impairedSettings__item.-dark';
	  	// Белый на синем
	  	var color_whiteOnBlue = '.visually_impairedSettings .visually_impairedSettings__colors .visually_impairedSettings__item.-blue';
	  	// Изображения
	  	// Все кнопки
	  	var images_common = '.visually_impairedSettings__image';
	  	// Показать все изображения
	  	var images_all = '.visually_impairedSettings__image.-all';
	  	// Показать изображения в черно-белом варианте
	  	var images_bw = '.visually_impairedSettings__image.-bw';
	  	// Убрать изображения, оставить только альт.
	  	var images_alt = '.visually_impairedSettings__image.-alt';
	  	// Убрать полностью изображения
	  	var images_none = '.visually_impairedSettings__image.-none';

	  	// Заносим в переменную значение версии сайта с localstorage
	  	var siteversion = localStorage.getItem('version');
	  	// Заносим в переменную значение размера шрифта с localstorage
	  	var sitefontsize = localStorage.getItem('visually_impairedfontsize');
	  	// Заносим в переменную значение цветовой палитры с localstorage
	  	var sitecolor = localStorage.getItem('visually_impairedcolor');
	  	// Заносим в переменную значение параметра изображения с localstorage
	  	var siteimages = localStorage.getItem('visually_impairedimages');

	  	// Если его нет, то
	  	if (siteversion === null){
	  		// Устанавливаем его по умолчанию в норму
	  		localStorage.setItem('version', 'normal');
	  	}
	  	// Если значение "Норма"
	  	if (siteversion === 'normal'){
	  		// Задаем соответствующие атрибуты
	  		// Для body
	  		$(attributesKeeper).attr('data-version', 'normal');
	  		// И для кнопки-переключателя
	  		$(buttonSwitcher).attr('data-buttonto', 'visually_impaired');
	  	}
	  	// Если значение "Для слабовидящих"
	  	else if (siteversion === 'visually_impaired'){
	  		// Задаем соответствующие атрибуты
	  		// Для body
	  		$(attributesKeeper).attr('data-version', 'visually_impaired');
	  		// И для кнопки-переключателя
	  		$(buttonSwitcher).attr('data-buttonto', 'normal');
	  	}

	  	// Проверяем размер шрифта с localstorage
	  	if (sitefontsize === 'litle'){
	  		$(attributesKeeper).attr('data-fontsize', 'litle');
	  		$(size_litle).addClass('active');
	  	}
	  	if (sitefontsize === 'medium'){
	  		$(attributesKeeper).attr('data-fontsize', 'medium');
	  		$(size_medium).addClass('active');
	  	}
	  	if (sitefontsize === 'large'){
	  		$(attributesKeeper).attr('data-fontsize', 'large');
	  		$(size_large).addClass('active');
	  	}

	  	// Проверяем цветовую палитру с localstorage
	  	if (sitecolor === 'blackonwhite'){
	  		$(attributesKeeper).attr('data-color', 'blackonwhite');
	  		$(color_blackOnWhite).addClass('active');
	  	}
	  	if (sitecolor === 'whiteonblack'){
	  		$(attributesKeeper).attr('data-color', 'whiteonblack');
	  		$(color_whiteOnBlack).addClass('active');
	  	}
	  	if (sitecolor === 'whiteonblue'){
	  		$(attributesKeeper).attr('data-color', 'whiteonblue');
	  		$(color_whiteOnBlue).addClass('active');
	  	}

	  	// Проверяем параметр изображения с localstorage
	  	if (siteimages === 'all'){
	  		$(attributesKeeper).attr('data-images', 'all');
	  		$(images_all).addClass('active');
	  	}
	  	if (siteimages === 'bw'){
	  		$(attributesKeeper).attr('data-images', 'bw');
	  		$(images_bw).addClass('active');
	  	}
	  	if (siteimages === 'alt'){
	  		$(attributesKeeper).attr('data-images', 'alt');
	  		$(images_alt).addClass('active');
	  	}
	  	if (siteimages === 'none'){
	  		$(attributesKeeper).attr('data-images', 'none');
	  		$(images_none).addClass('active');
	  	}

	  	// Если мы сейчас находимся на версии сайта для слабовидящих
	  	// То меняем текст кнопки на "Обычная версия сайта"
	  	$(buttonSwitcher + '[data-buttonto="normal"]').text('Обычная версия сайта');

	  	// Если была нажата кнопка-переключатель
	  	$(buttonSwitcher).click(function(){
	  		// Определяем
	  		// Если она должна вести на "Обычную версию сайта"
	  		if ($(this).attr('data-buttonto') === 'normal'){
	  			// То заносим соответствующую переменную в local storage
	  			localStorage.setItem('version', 'normal');
	  			// И перезагружаем страницу
	  			location.reload();
	  		}
	  		// Если же на "Версию для слабовидящих"
	  		else if ($(this).attr('data-buttonto') === 'visually_impaired'){
	  			// То заносим аналогичную переменную в local storage
	  			localStorage.setItem('version', 'visually_impaired');
	  			// И тоже перезагружаем страницу
	  			location.reload();
	  		}
	  	});

	  	// Кнопки-Настройки размера шрифта
	  	// Мелкий шрифт
	  	$(size_litle).click(function(){
	  		localStorage.setItem('visually_impairedfontsize', 'litle');
	  		$(attributesKeeper).attr('data-fontsize', 'litle');
	  		$(size_common).removeClass('active');
	  		$(this).addClass('active');
	  	});
	  	// Средний шрифт
	  	$(size_medium).click(function(){
	  		localStorage.setItem('visually_impairedfontsize', 'medium');
	  		$(attributesKeeper).attr('data-fontsize', 'medium');
	  		$(size_common).removeClass('active');
	  		$(this).addClass('active');
	  	});
	  	// Большой шрифт
	  	$(size_large).click(function(){
	  		localStorage.setItem('visually_impairedfontsize', 'large');
	  		$(attributesKeeper).attr('data-fontsize', 'large');
	  		$(size_common).removeClass('active');
	  		$(this).addClass('active');
	  	});

	  	// Кнопки-Настройки цветовой палитры
	  	// Черный на белом
	  	$(color_blackOnWhite).click(function(){
	  		localStorage.setItem('visually_impairedcolor', 'blackonwhite');
	  		$(attributesKeeper).attr('data-color', 'blackonwhite');
	  		$(color_common).removeClass('active');
	  		$(this).addClass('active');
	  	});
	  	// Белый на черном
	  	$(color_whiteOnBlack).click(function(){
	  		localStorage.setItem('visually_impairedcolor', 'whiteonblack');
	  		$(attributesKeeper).attr('data-color', 'whiteonblack');
	  		$(color_common).removeClass('active');
	  		$(this).addClass('active');
	  	});
	  	// Белый на синем
	  	$(color_whiteOnBlue).click(function(){
	  		localStorage.setItem('visually_impairedcolor', 'whiteonblue');
	  		$(attributesKeeper).attr('data-color', 'whiteonblue');
	  		$(color_common).removeClass('active');
	  		$(this).addClass('active');
	  	});

	  	// Кнопки-Настройки изображений
	  	// Все изображения
	  	$(images_all).click(function(){
	  		localStorage.setItem('visually_impairedimages', 'all');
	  		$(attributesKeeper).attr('data-images', 'all');
	  		$(images_common).removeClass('active');
	  		$(this).addClass('active');
	  		if ($('.visible_alt').html()){
	  		    $("img").unwrap();
	  		    $('span.alttext').remove();
	  		}
	  	});
	  	// Черно-белые изображения
	  	$(images_bw).click(function(){
	  		localStorage.setItem('visually_impairedimages', 'bw');
	  		$(attributesKeeper).attr('data-images', 'bw');
	  		$(images_common).removeClass('active');
	  		$(this).addClass('active');
	  		if ($('.visible_alt').html()){
	  		    $("img").unwrap();
	  		    $('span.alttext').remove();
	  		}
	  	});
	  	// Алтернативный текст изображений
	  	$(images_alt).click(function(){
	  		localStorage.setItem('visually_impairedimages', 'alt');
	  		$(attributesKeeper).attr('data-images', 'alt');
	  		$(images_common).removeClass('active');
	  		$(this).addClass('active');
	  		$("img").wrap("<div class='visible_alt'></div>");
	  		$('.visible_alt').each(function () {
	  		    var alt_text = $('img', this).attr('alt');
	  		    $(this).append('<span class="alttext">'+alt_text+'</span>');
	  		});
	  	});
	  	// Отключение изображений
	  	$(images_none).click(function(){
	  		localStorage.setItem('visually_impairedimages', 'none');
	  		$(attributesKeeper).attr('data-images', 'none');
	  		$(images_common).removeClass('active');
	  		$(this).addClass('active');
	  		if ($('.visible_alt').html()){
	  		    $("img").unwrap();
	  		    $('span.alttext').remove();
	  		}
	  	});	

	  	// Если сейчас "Обычная версия сайта"
	  	if ($(attributesKeeper).attr('data-version') === "normal"){
	  		// Удаляем атрибут размера шрифта
	  		$(attributesKeeper).removeAttr("data-fontsize");
	  		// Атрибут цветовой гаммы
	  		$(attributesKeeper).removeAttr("data-color");
	  		// И атрибут изображений
	  		$(attributesKeeper).removeAttr("data-images");

	  	}
	  }
	}
    

})(jQuery, Drupal, drupalSettings);
