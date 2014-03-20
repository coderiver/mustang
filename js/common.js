$(document).ready(function() {

	$("a[rel=fancybox]").fancybox();

	function sampleView() {
		$('.simpleview__thumbs img:first').each(function() {
			var src = $(this).attr('src');
			$(this).parent().addClass('is-active')
			$(this).parents('.simpleview')
				.find('.simpleview__pic a')
				.attr({"href": src, "rel": "fancybox"})
				$div = $("<img src=" + src + ">")
				$div.appendTo($(this).parents('.simpleview').find('.simpleview__pic a'));
		});
		$('.simpleview__thumbs img').on('click', function() {
			// $('.simpleview__pic').animate({opacity: 0.8}, 'slow', function() {
	  //     $(this)
	  //         .animate({opacity: 1});
		 //  });
			var src = $(this).attr('src');
			$('.simpleview__thumbs img').parent().removeClass('is-active');
			$(this).parent().addClass('is-active');
			$(this).parents('.simpleview')
				.find('.simpleview__pic a')
				.attr({"href": src, "rel": "fancybox"});
			$(this).parents('.simpleview')
				.find('.simpleview__pic img')
				.attr("src", src);
		});
	} sampleView();

	function sampleTab() {
		$('.tabs__nav a').on('click', function() {
			// $('.tabs__nav').removeClass('is-active');
			// $(this).parent().addClass('is-active');
			var page = $(this).attr('href');
			$('.tabs__content').removeClass('is-active');
			$(page).addClass('is-active');
			return false;
		});
		// $('.tabs__content').on('click', function(event) {
		// 	event.stopPropagation();
		// });
	} sampleTab();

	//select
	function select() {
		var el = $('.js-select'),
				el_title = el.children("span"),
				item = el.find('li'),
				input = el.find(".js-select-input"),
				el_text = el.find(".js-select-text"),
				// checkbox = el.find(".checkbox"),
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
		// checkbox.click(function(event){
		// 	event.stopPropagation();
		// });
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
		timeout: 0,
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
		$('.tabs__content').removeClass('is-active');
	});

});