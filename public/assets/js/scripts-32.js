/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var applghu_appilo = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.APPLGHUScrollTop();
				this.APPLGHUNavScroll();
				this.APPLGHUStickyMenu();
				this.APPLGHUMobileMenu();
				this.APPLGHUAboutProgressbar();
				this.APPLGHUTeamCarousel();
				this.APPLGHUBlogCarousel();
				this.APPLGHUProjectGallery();
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

			APPLGHUScrollTop: function (){
				$(window).on("scroll", function(){
					var ScrollBarLocation = $(this).scrollTop();
					if( ScrollBarLocation > 150 ) {
						$(".applghu-scroll-top").fadeIn(); 
					} else {
						$(".applghu-scroll-top").fadeOut();
					}
				});

				$(".applghu-scroll-top").on("click", function(e){
					e.preventDefault(); 
					$("body,html").animate({
						scrollTop: 0,
					});
				});
			},

			APPLGHUNavScroll: function (){
				//Desktop Menu 
				$('.applghu-navigation li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.attr('id') == 'applghu-blog') {
							if (target.length) {
								$('html, body').animate({
									scrollTop: target.offset().top + 180
								}, 1000);
								return false;
							}
						} else {
							if (target.length) {
								$('html, body').animate({
									scrollTop: target.offset().top - 75
								}, 1000);
								return false;
							}
						}
					}
				});

				// /Mobile Menu 
				$('.applghu-mobile-menu li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.attr('id') == 'applghu-blog') {
							if (target.length) {
								$('html, body').animate({
									scrollTop: target.offset().top + 180
								}, 1000);
								return false;
							}
						} else {
							if (target.length) {
								$('html, body').animate({
									scrollTop: target.offset().top - 75
								}, 1000);
								return false;
							}
						}
					}
				});
			}, 

			//Sticky Header 
			APPLGHUStickyMenu: function() {
				$(window).on("scroll", function(){
					var ScrollBarPostion = $(window).scrollTop(); 
					if (ScrollBarPostion > 150 ) {
						$(".applghu-header-area").addClass("applghu-header-sticky"); 
					} else {
						$(".applghu-header-area").removeClass("applghu-header-sticky");
					}
				});
			},

			APPLGHUMobileMenu: function (){
				$(".applghu-mobile-menu-hamburger").on("click", function(e){
					e.preventDefault();
					$(".applghu-mobile-menu").toggleClass("applghu-mobile-menu-on");
					$(".applghu-body-overlay").toggleClass("applghu-body-overlay-on");
				});

				$(".applghu-body-overlay").on("click", function(){
					$(".applghu-mobile-menu").removeClass("applghu-mobile-menu-on");
					$(".applghu-mobile-menu-open").removeClass("open");
				});

				$(".applghu-menu-close").on("click", function(){
					$(".applghu-mobile-menu").removeClass("applghu-mobile-menu-on");
					$(".applghu-body-overlay").removeClass("applghu-body-overlay-on"); 
					$(".applghu-mobile-menu-open").removeClass("open");
				});

				$(".applghu-dropdown.has-submenu a").each(function(){
					$(this).on("click", function(e){
						e.preventDefault();
						$('.applghu-dropdown-menu').slideToggle();
						$(this).parent().toggleClass('applghu-submenu-icon-rotate');
					});
				});
			},

			APPLGHUAboutProgressbar: function() {
				$(window).scroll(function (event) {
					var aboutSectionHeight = $('.applghu-about-area').height();
					var aboutSectionOffsetTop = $('.applghu-about-area').offset().top;
					var scrollandAboutHeight = $(window).scrollTop() + aboutSectionHeight;
					if (aboutSectionOffsetTop > scrollandAboutHeight) {
						$('.applghu-single-progress').ProgressBar();
					}
				
				});
			},

			APPLGHUTeamCarousel: function() {
				$(".applghu-team-slider").owlCarousel({
					loop: true,
					nav: true,
					navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
					margin: 30,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 2
						},
						1000: {
							items: 4
						}
					}
				})
			},


			APPLGHUBlogCarousel: function() {
				$(".applghu-blog-slider").owlCarousel({
					loop: true,
					nav: false,
					margin: 30,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 2
						},
						1000: {
							items: 3
						}
					}
				})
			},
			APPLGHUProjectGallery: function() {
				var $grid = $('.applghu-project-grid').isotope({
					itemSelector: '.applghu-project-item',
					percentPosition: true,
					masonry: {
						columnWidth: 1
					}
				});

				$('.applghu-project-navigation').on('click', 'li', function() {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({filter: filterValue});
				});
				
				$('.applghu-project-navigation').on('click', 'li', function() {
					$(this).addClass('active').siblings().removeClass('active');
				});
			}

		}	
	}
	jQuery(document).ready(function (){
		applghu_appilo.init();
	});

})();
