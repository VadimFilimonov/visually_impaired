(function ($, Drupal, drupalSettings) {

    'use strict';
	
	Drupal.behaviors.visually_impaired = {
	  attach: function (context) {

	  	// Кнопка, которая переключает версию сайта
	  	var buttonSwitcher = '#block-top-menu .menu-item:eq(2)';
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

	  	// Заносим в переменную значение версии сайта с localstorage
	  	var siteversion = localStorage.getItem('version');
	  	// Заносим в переменную значение размера шрифта с localstorage
	  	var sitefontsize = localStorage.getItem('visually_impairedfontsize');
	  	// Заносим в переменную значение цветовой палитры с localstorage
	  	var sitecolor = localStorage.getItem('visually_impairedcolor');

	  	// Если его нет, то
	  	if (siteversion === null){
	  		// Устанавливаем его по умолчанию в норму
	  		localStorage.setItem('version', 'normal');
	  	}
	  	// Если значение "Норма"
	  	if (siteversion === 'normal'){
	  		// Задаем соответствующие атрибуты
	  		// Для body
	  		$('body').attr('data-version', 'normal');
	  		// И для кнопки-переключателя
	  		$(buttonSwitcher).attr('data-buttonto', 'visually_impaired');
	  	}
	  	// Если значение "Для слабовидящих"
	  	else if (siteversion === 'visually_impaired'){
	  		// Задаем соответствующие атрибуты
	  		// Для body
	  		$('body').attr('data-version', 'visually_impaired');
	  		// И для кнопки-переключателя
	  		$(buttonSwitcher).attr('data-buttonto', 'normal');
	  	}

	  	// Проверяем размер шрифта с localstorage
	  	if (sitefontsize === 'litle'){
	  		$('body').attr('data-fontsize', 'litle');
	  		$(size_litle).addClass('active');
	  	}
	  	if (sitefontsize === 'medium'){
	  		$('body').attr('data-fontsize', 'medium');
	  		$(size_medium).addClass('active');
	  	}
	  	if (sitefontsize === 'large'){
	  		$('body').attr('data-fontsize', 'large');
	  		$(size_large).addClass('active');
	  	}

	  	// Проверяем цветовую палитру с localstorage
	  	if (sitecolor === 'blackonwhite'){
	  		$('body').attr('data-color', 'blackonwhite');
	  		$(color_blackOnWhite).addClass('active');
	  	}
	  	if (sitecolor === 'whiteonblack'){
	  		$('body').attr('data-color', 'whiteonblack');
	  		$(color_whiteOnBlack).addClass('active');
	  	}
	  	if (sitecolor === 'whiteonblue'){
	  		$('body').attr('data-color', 'whiteonblue');
	  		$(color_whiteOnBlue).addClass('active');
	  	}

	  	// Если мы сейчас находимся на версии сайта для слабовидящих
	  	// То меняем текст кнопки на "Обычная версия сайта"
	  	$('#block-top-menu .menu-item:eq(2)[data-buttonto="normal"]').find('span').text('Обычная версия сайта');

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
	  	$(size_litle).click(function(){
	  		localStorage.setItem('visually_impairedfontsize', 'litle');
	  		$('body').attr('data-fontsize', 'litle');
	  		$(size_common).removeClass('active');
	  		$(this).addClass('active');
	  	});
	  	$(size_medium).click(function(){
	  		localStorage.setItem('visually_impairedfontsize', 'medium');
	  		$('body').attr('data-fontsize', 'medium');
	  		$(size_common).removeClass('active');
	  		$(this).addClass('active');
	  	});
	  	$(size_large).click(function(){
	  		localStorage.setItem('visually_impairedfontsize', 'large');
	  		$('body').attr('data-fontsize', 'large');
	  		$(size_common).removeClass('active');
	  		$(this).addClass('active');
	  	});

	  	// Кнопки-Настройки цветовой палитры
	  	$(color_blackOnWhite).click(function(){
	  		localStorage.setItem('visually_impairedcolor', 'blackonwhite');
	  		$('body').attr('data-color', 'blackonwhite');
	  		$(color_common).removeClass('active');
	  		$(this).addClass('active');
	  	});
	  	$(color_whiteOnBlack).click(function(){
	  		localStorage.setItem('visually_impairedcolor', 'whiteonblack');
	  		$('body').attr('data-color', 'whiteonblack');
	  		$(color_common).removeClass('active');
	  		$(this).addClass('active');
	  	});
	  	$(color_whiteOnBlue).click(function(){
	  		localStorage.setItem('visually_impairedcolor', 'whiteonblue');
	  		$('body').attr('data-color', 'whiteonblue');
	  		$(color_common).removeClass('active');
	  		$(this).addClass('active');
	  	});

	  	// Если сейчас "Обычная версия сайта"
	  	if ($('body').attr('data-version') === "normal"){
	  		// Удаляем атрибут размера шрифта
	  		$('body').removeAttr("data-fontsize");
	  		// И атрибут цветовой гаммы
	  		$('body').removeAttr("data-color");
	  	}
	  }
	}
    

})(jQuery, Drupal, drupalSettings);
