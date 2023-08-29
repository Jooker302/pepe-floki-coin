/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_NFT_2 = {
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
				this.CounterUp();
				this.NftcountDown();
				this.CarouselSliderJS();
				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('.xis-nft-main-navigation ul li a').on("click", function(){
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
						jQuery('.xis-nft-header-section').addClass('sticky-on')
					} else {
						jQuery('.xis-nft-header-section').removeClass('sticky-on')
					}
				})
				if($('select').length) {
					$(document).ready(function() {
						$('select').niceSelect();
					});
				};
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
			CounterUp: function(){
				$('.counter').counterUp({
					delay: 10,
					time: 1000
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
				var $grid = $('.grid').isotope({
					itemSelector: '.xis-nft-product'
				});
				var filters = {};
				$('.filters').on( 'change', function( event ) {
					var $select = $( event.target );
					var filterGroup = $select.attr('value-group');
					filters[ filterGroup ] = event.target.value;
					var filterValue = concatValues( filters );
					$grid.isotope({ filter: filterValue });
				});
				function concatValues( obj ) {
					var value = '';
					for ( var prop in obj ) {
						value += obj[ prop ];
					}
					return value;
				}
			},
			CarouselSliderJS: function (){
				$('.xis-nft-live-bid-slider').slick({
					arrow: true,
					dots: false,
					infinite: false,
					slidesToShow: 4,
					slidesToScroll: 1,
					variableWidth: true,
					prevArrow: ".liv-bid_left_arrow",
					nextArrow: ".liv-bid_right_arrow",
					responsive: [
					{
						breakpoint: 1300,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
						}
					},
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 2,
							infinite: true,
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
							slidesToShow: 2,
							slidesToScroll: 1
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
			},


		}
	}
	jQuery(document).ready(function (){
		SaaSio_NFT_2.init();
	});

})();