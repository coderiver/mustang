$(document).ready(function() {

	//click document
	$(document).click(function() {
		$('.js-select').removeClass('is-open');
	});

	//select
	function select() {
		var el = $('.js-select'),
				el_title = el.children("span"),
				item = el.find('li'),
				input = el.find(".js-select-input"),
				el_text = el.find(".js-select-text"),
				checkbox = el.find(".checkbox"),
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
		checkbox.click(function(event){
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

});