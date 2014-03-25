$(document).ready(function() {

	$('.callback__trigger').on('click', function() {
		$(this).parent().find('.callback__popup').slideToggle('fast');
		return false;
	});
	$('.callback__close').on('click', function() {
		$(this).parents('.callback').find('.callback__popup').slideUp('fast');
	});

	$('.feedback__trigger').on('click', function() {
		$(this).parent().find('.feedback__popup').toggleClass('is-active');
		return false;
	});
	$('.feedback__close').on('click', function() {
		$(this).parents('.feedback').find('.feedback__popup').removeClass('is-active');
	});

	$(".js-fancybox").fancybox();

	function sampleView() {

		$('.simpleview__thumbs img').each(function() {
			var index = $(this).parent().index();
			// console.log( $(this).parent().index() );
			$(this).attr({"data-slidenum": index});
			// return(index);
		});

		$('.simpleview__thumbs img:first').each(function() {
			var src = $(this).attr('src');
			var index = $(this).parent().index();
			$(this).parent().addClass('is-active');
			$(this).parents('.simpleview')
				.find('.simpleview__pic a')
				.attr({"href": src, "data-slidenum": index});
				$div = $("<img src=" + src + ">");
				$div.appendTo($(this).parents('.simpleview').find('.simpleview__pic a'));
		});
		$('.simpleview__thumbs a').on('click', function() {
			return	false;
		});
		$('.simpleview__thumbs img').on('click', function() {
			var src = $(this).attr('src');
			var index = $(this).parent().index();
					// index = $(this).parent().index();
			// console.log( $(this).parent().index() );
			$('.simpleview__thumbs img').parent().removeClass('is-active');
			// $(this).attr({"data-slidenum": index});
			$(this).parent().addClass('is-active');
			$(this).parents('.simpleview')
				.find('.simpleview__pic a')
				.attr({"href": src, "data-slidenum": index});
			$(this).parents('.simpleview')
				.find('.simpleview__pic img')
				.attr("src", src);
		});
	} sampleView();

	//select
	function select() {
		var el = $('.js-select'),
				el_title = el.children("span"),
				item = el.find('li'),
				input = el.find(".js-select-input"),
				el_text = el.find(".js-select-text"),
				list = el.find('.js-select-drop');

		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			}
			event.stopPropagation();
		});
		item.bind("click",function(){
			el.find('li').removeClass("is-selected");
			$(this).addClass("is-selected");
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			$(this).parents(".js-select").find(".js-select-input").val(id);
		});
	} select();

	$('.js-mainslider').cycle({
		fx: "scrollHorz",
		timeout: 3600,
		log: false,
		carouselVisible: 1,
		slideActiveClass: "is-active",
		pagerActiveClass: "is-active",
		disabledClass: "is-disabled",
		slideClass: "main-block__item",
		pager: ".main-block__pager",
		slides: ".main-block__item",
		pagerTemplate: "<span></span>"
	});

	$('.js-newsslider').cycle({
		fx: "scrollHorz",
		timeout: 0,
		log: false,
		carouselVisible: 1,
		slideActiveClass: "is-active",
		pagerActiveClass: "is-active",
		disabledClass: "is-disabled",
		slideClass: "newspreview__item",
		pager: ".newspreview__pager",
		slides: ".newspreview__item",
		pagerTemplate: "<span></span>"
	});

	//click document
	$(document).click(function(event) {
		$('.js-select').removeClass('is-open');
		if($(event.target).parents().index($('.callback')) == -1) {
			$('.callback__popup').slideUp('fast');
		}
		if($(event.target).parents().index($('.feedback')) == -1) {
			$('.feedback__popup').removeClass('is-active');
		}
	});

});