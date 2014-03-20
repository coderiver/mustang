$(document).ready(function() {

	$(".js-fancybox").fancybox();

	function sampleView() {

		// $('.simpleview__pic a').on('click', function() {
		// 	var getattr = $(this).attr("data-slidenum");
		// 	alert(getattr);
		// });
		// $.fancybox.jumpto( [index] )

		$('.simpleview__thumbs img').each(function() {
			var index = $(this).parent().index();
			// console.log( $(this).parent().index() );
			$(this).attr({"data-slidenum": index});
			// return(index);
		});

		$('.simpleview__thumbs img:first').each(function() {
			var src = $(this).attr('src');
			var index = $(this).parent().index();
			$(this).parent().addClass('is-active')
			$(this).parents('.simpleview')
				.find('.simpleview__pic a')
				.attr({"href": src, "data-slidenum": index})
				$div = $("<img src=" + src + ">")
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
	// $.fancybox.jumpto( [index] )

	function sampleTab() {
		$('.tabs__nav a').on('click', function() {
			var page = $(this).attr('href');
			$('.tabs__content').removeClass('is-active');
			$(page).addClass('is-active');
			return false;
		});
		$('.feedback__close').on('click', function() {
			$('.tabs__content').removeClass('is-active');
		});
	} sampleTab();

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
		if($(event.target).parents().index($('.tabs')) == -1) {
			$('.tabs__content').removeClass('is-active');
		}
		$('.js-select').removeClass('is-open');
	});

});