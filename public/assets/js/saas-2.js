/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_SaaS_2 = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.StickyHeader();
				this.MobileMenu();
				this.scrollTop();
				this.HoverParallax();
				this.counterUp();
				this.CarouselSliderJS();
				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('.xis-saas-main-navigation ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -50
							}, 1000);
							return false;
						}
					}
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.xis-saas-header-section').addClass('sticky-on')
					} else {
						jQuery('.xis-saas-header-section').removeClass('sticky-on')
					}
				})
			},
			MobileMenu: function (){
				$('.open_mobile_menu').on("click", function() {
					$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.mobile_menu li.dropdown ul').length){
					$('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
					$('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			HoverParallax: function(){
				if ($('.scene').length > 0 ) {
					$('.scene').parallax({
						scalarX: 10.0,
						scalarY: 10.0,
					}); 
				}
			},
			counterUp: function (){
				if ($(".odometer").length) {
					$('.odometer').appear();
					$(document.body).on('appear', '.odometer', function(e) {
						var odo = $(".odometer");
						odo.each(function() {
							var countNumber = $(this).attr("data-count");
							$(this).html(countNumber);
						});
						window.odometerOptions = {
							format: 'd',
						};
					});
				}
			},
			CarouselSliderJS: function (){
				$('.xis-saas-sponsor-slider').slick({
					dots: false,
					infinite: false,
					speed: 500,
					slidesToShow: 5,
					autoplay: true,
					responsive: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5,
							infinite: true,
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5,
							infinite: true,
						}
					},
					{
						breakpoint: 700,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}

					]
				});
				$('.xis-saas-service-slider').slick({
					dots: true,
					speed: 300,
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 700,
						settings: {
							arrows: false,
							slidesToShow: 2
						}
					},
					{
						breakpoint: 800,
						settings: {
							arrows: false,
							slidesToShow: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: false,
							slidesToShow: 1
						}
					}
					]
				});
				$(document).ready(function() {
					var $slider = $('.xis-saas-blog-slider');
					var $progressBar = $('.progress');
					var $progressBarLabel = $( '.slider__label' );

					$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
						var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

						$progressBar
						.css('background-size', calc + '% 100%')
						.attr('aria-valuenow', calc );

						$progressBarLabel.text( calc + '% completed' );
					});

					$slider.slick({
						arrow: true,
						dots: true,
						infinite: true,
						slidesToShow: 3,
						slidesToScroll: 1,
						variableWidth: true,
						easing: 'swing',
						prevArrow: ".blg-left_arrow",
						nextArrow: ".blg-right_arrow",
						customPaging : function(slider, index) { 
							var num = index + 1;
							return '<span class="dot">'+ num +'</span>';
						},
						responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								infinite: true,
								dots: true
							}
						},
						{
							breakpoint: 800,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 500,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}

						]
					});  
				});
			},


		}
	}
	jQuery(document).ready(function (){
		SaaSio_SaaS_2.init();
	});

})();