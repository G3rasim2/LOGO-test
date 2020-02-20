$(document).ready(function() {

	$('.nav__btn-menu').on('click', function(event){
		event.preventDefault();
		if ($('.nav__btn-menu').hasClass("nav__btnMenuActive")) {
			if ($(this).scrollTop() >= '20') {
				$('.nav').removeClass('nav__navActive');
			}
			$('.nav-menu').removeClass('nav-menu__active');
			$('.nav__btn-menu').removeClass('nav__btnMenuActive');
		} else {
			$('.nav').addClass('nav__navActive');
			$('.nav-menu').addClass('nav-menu__active');
			$('.nav__btn-menu').addClass('nav__btnMenuActive');
		}
	});

	$(window).on('load scroll', function() { 
		if ($(this).scrollTop() >= '20') {
			$('.nav').addClass('nav__navActive');
		} else if ($('.nav__btn-menu').hasClass("nav__btnMenuActive")) {
			$('.nav').addClass('nav__navActive');
		} else {
			$('.nav').removeClass('nav__navActive');
		}
	});

	$('#slider-block-carousel').owlCarousel({
		nav:true,
		dots:false,
		navText:" ",
		loop: true,
		startPosition:0,
		margin:10,
		responsive:{
			0:{
				items:1
			}
		}
	});
	var allSlide = $('.slider-block__wrapper');Math.floor(allSlide.length / 2)
	$('.slider-block__slider-number').html("1" + " из " + Math.floor(allSlide.length / 2));
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	owl.on('changed.owl.carousel', function(event) {
		var index = Math.round(event.item.index - event.item.count / 2);
		if (index == 0) {
			index = event.item.count;
		} else if (index > event.item.count) {
			index = 1;
		}
	    $('.slider-block__slider-number').html(index + " из " + event.item.count);
	});

	var i = 1;
	$('.slider-block__btn').on('click', function(event){
		event.preventDefault();
		$('.slider-block__block-text').toggleClass('slider-block__block-text--active');
		if (i == 1) {
			$('.slider-block__btn').html("Скрыть");
			i--;
		} else {
			$('.slider-block__btn').html("Подробнее");
			i++;
		}
	});
});