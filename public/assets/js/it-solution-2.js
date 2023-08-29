/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaaSio_It_Solution_Main = {
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
				this.searchPopUp();
				this.CounterUp();
				this.SkillProgress();
				this.CarouselSliderJS();
				this.MemberSocial();
				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('.ximsa-it-main-navigation ul li a').on("click", function(){
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
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.xis-it-main-header-section').addClass('sticky-on')
					} else {
						jQuery('.xis-it-main-header-section').removeClass('sticky-on')
					}
				});
				jQuery(document).ready(function (o) {
					0 < o(".navSidebar-button").length &&
					o(".navSidebar-button").on("click", function (e) {
						e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
					}),
					0 < o(".close-side-widget").length &&
					o(".close-side-widget").on("click", function (e) {
						e.preventDefault(), o(".info-group").removeClass("isActive");
					}),
					o("body").on("click", function (e) {
						o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
					}),
					o(".xs-sidebar-widget").on("click", function (e) {
						e.stopPropagation();
					})
				});
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
			searchPopUp: function (){
				if($('.search-box-outer').length) {
					$('.search-box-outer').on('click', function() {
						$('body').addClass('search-active');
					});
					$('.close-search').on('click', function() {
						$('body').removeClass('search-active');
					});
				};
				$('.or-canvas-cart-trigger').on("click", function() {
					$('.or-ofcanvas-cart-wrapper').toggleClass("or-canvas-cart-on");
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
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
			},
			CounterUp: function(){
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
			SkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
			},
			CarouselSliderJS: function (){
				$('.ximsa-it-service-slider-area').slick({
					dots: true,
					arrows: true,
					speed: 300,
					slidesToShow: 4,
					slidesToScroll: 1,
					prevArrow: ".xism-it-service-left_arrow",
					nextArrow: ".xism-it-service-right_arrow",
					responsive: [
					{
						breakpoint: 1100,
						settings: {
							arrows: false,
							slidesToShow: 3
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
				$('.ximsa-it-project-area').slick({
					dots: true,
					arrows: true,
					speed: 300,
					slidesToShow: 3,
					slidesToScroll: 1,
					prevArrow: ".xism-it-project-left_arrow",
					nextArrow: ".xism-it-project-right_arrow",
					responsive: [
					{
						breakpoint: 1100,
						settings: {
							arrows: false,
							slidesToShow: 2
						}
					},
					{
						breakpoint: 800,
						settings: {
							arrows: false,
							slidesToShow: 1
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
				$('.ximsa-it-team-slider').slick({
					dots: false,
					arrows: true,
					speed: 300,
					slidesToShow: 4,
					slidesToScroll: 1,
					prevArrow: ".xism-it-team-left_arrow",
					nextArrow: ".xism-it-team-right_arrow",
					responsive: [
					{
						breakpoint: 1100,
						settings: {
							arrows: false,
							slidesToShow: 3
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
				$('.ximsa-it-testimonial-slider').slick({
					dots: true,
					arrows: false,
					speed: 300,
					slidesToShow: 1,
					slidesToScroll: 1,
				});
				$('.ximsa-it-sponsor-slider').slick({
					arrow: false,
					dots: false,
					infinite: true,
					slidesToShow: 5,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
							dots: false
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					]
				});
				$('.ximsa-it-blog-slider').slick({
					dots: true,
					arrows: true,
					speed: 300,
					slidesToShow: 3,
					slidesToScroll: 1,
					prevArrow: ".xism-it-blog-left_arrow",
					nextArrow: ".xism-it-blog-right_arrow",
					responsive: [
					{
						breakpoint: 1000,
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
			},
			MemberSocial: function (){
				$('.ximsa-it-share').click( function(){
					if ( $(this).hasClass('current') ) {
						$(this).removeClass('current');
					} else {
						$('ximsa-it-share').removeClass('current');
						$(this).addClass('current');    
					}
				});
			},

		}
	}
	jQuery(document).ready(function (){
		SaaaSio_It_Solution_Main.init();
	});

})();