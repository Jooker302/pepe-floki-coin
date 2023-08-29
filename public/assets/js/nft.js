/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_NFT = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.empreloader();
				this.BackgroundImage();
				this.CrStickeyHeader();
				this.Animation();
				this.MarketPlaceFilter();
				this.NftcountDown();
				this.NFTSlider();
			},
			empreloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#nft-preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.nft-scrollup').fadeIn();
					} else {
						$('.nft-scrollup').fadeOut();
					}
				});

				$('.nft-scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				if($('.lightbox-image').length) {
					$('.lightbox-image').fancybox({
						openEffect  : 'fade',
						closeEffect : 'fade',
						helpers : {
							media : {}
						}
					});
				}
			},
			CrStickeyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.nft-header-section').addClass('sticky-on')
					} else {
						jQuery('.nft-header-section').removeClass('sticky-on')
					}
				});
				$('.nft-open_mobile_menu').on("click", function() {
					$('.nft-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.nft-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.nft-mobile_menu li.dropdown ul').length){
					$('.nft-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.nft-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				};
				$('.nft-main-navigation ul li a').on("click", function(){
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
			MarketPlaceFilter: function (){
				jQuery(window).on('load', function(){
					$('.filtr-container').imagesLoaded ( function(){});
					var filterizd = $('.filtr-container');

					if(filterizd.length) {
						filterizd.filterizr({

						});
						$('.filtr-button').on('click', function() {

							$('.filtr-button.filtr-active').removeClass('filtr-active');
							$(this).addClass('filtr-active');
						});
					}
				});
			},
			NftcountDown:  function (){
				$('.countdown_timer').each(function(){
					$('[data-countdown]').each(function() {
						var $this = $(this), finalDate = $(this).data('countdown');
						$this.countdown(finalDate, function(event) {
							var $this = $(this).html(event.strftime(''
								+ '<li class="days_count"><strong>%D</strong><span>Days</span></li>'
								+ '<li class="hours_count"><strong>%H</strong><span>Hours</span></li>'
								+ '<li class="minutes_count"><strong>%M</strong><span>Mins</span></li>'
								+ '<li class="seconds_count"><strong>%S</strong><span>Secs</span></li>'));
						});
					});
				});	
			},
			NFTSlider: function (){
				$('.nft-live-bid-slider').owlCarousel({
					nav: false,
					dots: true,
					loop:true,
					items: 1,
					autoplay: false,
					smartSpeed: 1000,
				});
				$(document).ready(function(){
					$('.nft-top-creator-slider').slick({
						infinite: false,
						slidesToShow: 1,
						arrow: true,
						rows: 2,
						slidesToShow: 3,
						slidesToScroll: 3,
						prevArrow: ".main_left_arrow2",
						nextArrow: ".main_right_arrow2",
						responsive: [
						{
							breakpoint: 1100,
							settings: {
								arrows: false,
								slidesToShow: 2
							}
						},
						{
							breakpoint: 768,
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
				});
				$(document).ready(function() {
					$('.language-select').on('click', function() {
						$(this).find('.lang-option').slideToggle();
					})  
				});
			},
/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	SaaSio_NFT.init();
});

})();