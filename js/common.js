$(document).ready(function() {


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

	$('.toolbar__desc').on('click', function() {
		$('.toolbar__desc').parent().removeClass('is-active');
		$(this).parent().addClass('is-active');
		event.stopPropagation();
	});

	$(document).on('click', function() {
		$('.toolbar__desc').parent().removeClass('is-active');
	});


});