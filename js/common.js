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

	// $.fn.tabSample = function(){
	// 	$(this).each(function(idx, el){
	// 		var $this = $(this);
	// 		$this.delegate('.tabs__nav li', 'click', function(event){
	// 			var index = $this.find(".tabs__nav li").index(event.target);
	// 			$this.find(".tabs__items div").removeClass('active');
	// 			var item = $this.find(".tabs__items div:eq(" + index + ")").addClass('active');
	// 			console.log(item, index);
	// 		});
	// 		$this.find('.tabs__items div:eq(0)').addClass('active');
	// 	});
	// };
	// $(".tabs").tabSample();

	// function tabs() {
	// 	$('.tabs__nav a').on('click', function(event) {
	// 		// alert("I'm clicked, dude!")
	// 		if ($('.tabs__nav li').hasClass('is-active')) {
	// 			$('.tabs__nav li').removeClass('is-active');
	// 			$(this).parent().addClass('is-active');
	// 		} else{
	// 			var index = $(this).parent().index(event.target);
	// 			console.log(index);
	// 			$(this).parent().addClass('is-active');
	// 		}
	// 		return false;
	// 	});
	// } tabs();

});