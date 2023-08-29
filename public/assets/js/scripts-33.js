/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var aplit = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.APLITMobileMenu();
				this.APLITHeaderSticky(); 
				this.APLITScrollTop(); 
				this.APLITHeroSlider();
				this.APLITCounterUp();
				this.APLITCarousel();
				this.APLITProgressBar();
				this.APLITVideoPopup(); 
			},

			preloader: function (){
				$(window).on('load', function() {
					$(".loading-preloader").fadeOut();
				});
			},

			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},

            Animation: function (){
				$(window).on("load", function(){
					if($('.wow').length){
						new WOW({
							offset: 100,
							mobile: true
						}).init()
					}
				});
				
			},

			APLITMobileMenu: function (){

				$(".aplit-hamburger").on("click", function(e){
					e.preventDefault();
					$(".aplit-mobile-menu").toggleClass("aplit-mobile-menu-on");
					$(".aplit-body-overlay").toggleClass("aplit-body-overlay-on");
				});

				$(".aplit-body-overlay").on("click", function(){
					$(".aplit-mobile-menu").removeClass("aplit-mobile-menu-on");
					$(".aplit-body-overlay").removeClass("aplit-body-overlay-on");  
				});

				$(".aplit-menu-close").on("click", function(){
					$(".aplit-mobile-menu").removeClass("aplit-mobile-menu-on");
					$(".aplit-body-overlay").removeClass("aplit-body-overlay-on"); 
					$(".aplit-mobile-menu-open").removeClass("open");
				});

				$(".aplit-mobile-menu li.has-submenu a").each(function(){
					$(this).on("click", function(){
						$(this).siblings('ul').slideToggle();
						$(this).parent().toggleClass('aplit-submenu-icon-rotate');
					});
				});


			}, 

			APLITHeaderSticky: function (){
				$(window).on("scroll", function(){
					var ScrollBarPostion = $(window).scrollTop(); 
					if (ScrollBarPostion > 150 ) {
						$(".aplit-header-area").addClass("aplit-header-sticky"); 
					} else {
						$(".aplit-header-area").removeClass("aplit-header-sticky");
					}
				});
			},

			APLITScrollTop: function (){
				$(window).on("scroll", function(){
					var ScrollBarLocation = $(this).scrollTop();
					if( ScrollBarLocation > 150 ) {
						$(".aplit-scroll-top").fadeIn(); 
					} else {
						$(".aplit-scroll-top").fadeOut();
					}
				});

				$(".aplit-scroll-top").on("click", function(e){
					e.preventDefault(); 
					$("body,html").animate({
						scrollTop: 0,
					});
				});

			},

			APLITHeroSlider: function() {
				$('.aplit-hero-slider-container').on('init', function(e, slick) {
					var $firstAnimatingElements = $('.aplit-hero-single-slider:first-child').find('[data-animation]');
					doAnimations($firstAnimatingElements);    
				});
				$('.aplit-hero-slider-container').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
							var $animatingElements = $('.aplit-hero-single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
							doAnimations($animatingElements);    
				});
				$('.aplit-hero-slider-container').slick({
					autoplay: true,
					autoplaySpeed: 10000,
					dots: true,
					arrows: false,
					fade: true
				});
				function doAnimations(elements) {
					var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
					elements.each(function() {
						var $this = $(this);
						var $animationDelay = $this.data('delay');
						var $animationType = 'animated ' + $this.data('animation');
						$this.css({
							'animation-delay': $animationDelay,
							'-webkit-animation-delay': $animationDelay
						});
						$this.addClass($animationType).one(animationEndEvents, function() {
							$this.removeClass($animationType);
						});
					});
				}
			},
			
			APLITCarousel: function (){
				//Portfolio slider
				$(".aplit-portfolio-slider").each(function(){
					var ItemLength = $(this).children().length;
					if(ItemLength > 1 ) {
						$(this).slick({
							slidesToShow: 2,
							dots: true,
							autoplay: true, 
							arrows: false,
							responsive: [
								{
									breakpoint: 768, 
									settings: {
										slidesToShow: 1,
									}
								}
							]
						});
					}
				}); 

				//Team Slider 
				$(".aplit-team-slider").slick({
					slidesToShow: 4, 
					autoplay: true, 
					arrows: false, 
					dots: true,
					slidesToScroll: 2,
					responsive: [
						{
							breakpoint: 992, 
							settings: {
								slidesToShow: 3,
							}
						}, 
						{
							breakpoint: 768, 
							settings: {
								slidesToShow: 2,
							}
						}, 
						{
							breakpoint: 576, 
							settings: {
								slidesToShow: 1,
							}
						}
					]
				});



			},
			
			APLITCounterUp: function (){
				$(".counterup").counterUp({
					delay: 10,
    				time: 1000
				});
			}, 

			APLITProgressBar: function (){
				$(".progress-bar").ProgressBar();
			},

			APLITVideoPopup: function (){
				$('.aplit-video-btn').magnificPopup({
					type: 'iframe', 
					iframe: {
						patterns: {
						  youtube: {
							index: 'youtube.com/',
					  
							id: 'v=',
							src: 'https://www.youtube.com/embed/%id%?autoplay=1'
						  },
						  vimeo: {
							index: 'vimeo.com/',
							id: '/',
							src: '//player.vimeo.com/video/%id%?autoplay=1'
						  },
						  gmaps: {
							index: '//maps.google.',
							src: '%id%&output=embed'
						  }
						},
					  
						srcAction: 'iframe_src', 
					}
				}); 
			}
		}	
	}
	jQuery(document).ready(function (){
		aplit.init();
	});

})();
