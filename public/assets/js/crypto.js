/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_Crypto = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.empreloader();
				this.BackgroundImage();
				this.CrStickeyHeader();
				this.Animation();
				this.CrPartnerSlide();
				this.CRcountDown();
				this.CrblogSlide();
			},
			empreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#cr-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.gl-header-section').addClass('sticky-on')
					} else {
						jQuery('.gl-header-section').removeClass('sticky-on')
					}
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.cr-scrollup').fadeIn();
					} else {
						$('.cr-scrollup').fadeOut();
					}
				});

				$('.cr-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			CrStickeyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.cripto-header-section').addClass('sticky-on')
					} else {
						jQuery('.cripto-header-section').removeClass('sticky-on')
					}
				});
				$('.cr-open_mobile_menu').on("click", function() {
					$('.cr-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.cr-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.cr-mobile_menu li.dropdown ul').length){
					$('.cr-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.cr-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				};
				$('.cripto-main-navigation ul li a').on("click", function(){
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
			CrPartnerSlide: function (){
				$('.cr-partner-slide').owlCarousel({
					margin:100,
					responsiveClass:true,
					nav: false,
					dots: false,
					loop:true,
					items: 5,
					autoplay: true,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:2,
						},
						400:{
							items:2,
						},
						600:{
							items:2,
						},
						700:{
							items:3,
						},
						1000:{
							items:5,

						}
					},
				});
			},
			CRcountDown:  function (){
				if ($('.coming-countdown').length > 0) {
					var deadlineDate = new Date('April 26, 2023 23:59:59').getTime();
					var countdownDays = document.querySelector('.days .cr-count-down-number');
					var countdownHours = document.querySelector('.hours .cr-count-down-number');
					var countdownMinutes = document.querySelector('.minutes .cr-count-down-number');
					var countdownSeconds = document.querySelector('.seconds .cr-count-down-number');
					setInterval(function () {
						var currentDate = new Date().getTime();
						var distance = deadlineDate - currentDate;
						var days = Math.floor(distance / (1000 * 60 * 60 * 24));
						var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
						var seconds = Math.floor((distance % (1000 * 60)) / 1000);
						countdownDays.innerHTML = days;
						countdownHours.innerHTML = hours;
						countdownMinutes.innerHTML = minutes;
						countdownSeconds.innerHTML = seconds;
					}, 1000);

				};	
			},
			CrblogSlide: function (){
				$('.cr-blog-slider').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: false,
					dots: true,
					loop:true,
					items: 3,
					autoplay: true,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:2,
						},
						700:{
							items:2,
						},
						1000:{
							items:3,

						}
					},
				});
			},
/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	SaaSio_Crypto.init();
});

})();