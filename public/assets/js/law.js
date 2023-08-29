/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_law = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.RXMobileMenu();
				this.scrollTop();
				this.MianSlider();
				this.RXPortfolioSlide();
				this.counterUp();
				this.RXTestimonial();
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('.rx_main_navigation ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
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
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.header_style_four').addClass('rx-sticky-menu')
					} else {
						jQuery('.header_style_four').removeClass('rx-sticky-menu')
					}
				})
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 250) {
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
			RXMobileMenu: function (){
				$('.rx-open_mobile_menu').on("click", function() {
					$('.rx-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.rx-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.rx-mobile_menu li.dropdown ul').length){
					$('.rx-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.rx-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
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
			},
			MianSlider: function (){
				jQuery('#slider_id').owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: true,
					navSpeed: 800,
					smartSpeed: 1000,
					animateOut: 'fadeOut',
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
				});
			},
			RXPortfolioSlide: function (){
				$('#portfolio-slide-id').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: false,
					dots: true,
					loop:true,
					autoplay: false,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:2,
						},
						800:{
							items:2,
						},
						900:{
							items:2,
						},
						1000:{
							items:2,
						},
						1100:{
							items:3,
						},
						1300:{
							items:3,
						},
						1400:{
							items:4,
						},
						1500:{
							items:4,
						},
						1920:{
							items:5,
						},
					},
				})
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
					});
				}
			},
			RXTestimonial: function (){
				$('#rx-testimonial-slide-id').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: false,
					dots: true,
					loop:true,
					autoplay: false,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,
						}
					},
				})
			},
		}
	}
	jQuery(document).ready(function (){
		SaaSio_law.init();
	});

})();