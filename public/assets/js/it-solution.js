/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_IT_Solution = {
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
				this.MainSLider();
				this.ShapeScrollImg();
				this.CarouselSliderJS();
				this.PortfolioFilter();
				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('.xis-it-main-navigation-area ul li a').on("click", function(){
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
						jQuery('.xis-it-header-section').addClass('sticky-on')
					} else {
						jQuery('.xis-it-header-section').removeClass('sticky-on')
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
			ShapeScrollImg: function (){
				(function($) {
					$.fn.visible = function(partial) {
						var $t            = $(this),
						$w            = $(window),
						viewTop       = $w.scrollTop(),
						viewBottom    = viewTop + $w.height(),
						_top          = $t.offset().top,
						_bottom       = _top + $t.height(),
						compareTop    = partial === true ? _bottom : _top,
						compareBottom = partial === true ? _top : _bottom;
						return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
					};
				})(jQuery);
				$(window).on('scroll', function() {

					$(".bg-shape, .bg-img-area").each(function(i, el) {
						var el = $(el);
						if (el.visible(true)) {
							el.addClass("view-on"); 
						} else {
							el.removeClass("view-on");
						}
					});
				});
			},
			MainSLider: function(){
				var	tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider21"] = {once: RS_MODULES.modules["revslider21"]!==undefined ? RS_MODULES.modules["revslider21"].once : undefined, init:function() {
					window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_2_1") : window.revapi2;
					if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider21"].init()}); return;}
					window.revapi2 = jQuery(window.revapi2);
					if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_2_1"); return;}
					revapi2.revolutionInit({
						revapi:"revapi2",
						DPR:"dpr",
						sliderLayout:"fullwidth",
						visibilityLevels:"1240,1024,778,480",
						gridwidth:"1240,1024,778,480",
						gridheight:"1020,768,650,450",
						perspective:600,
						perspectiveType:"global",
						editorheight:"1020,768,650,450",
						responsiveLevels:"1240,1024,778,480",
						progressBar:{disableProgressBar:true},
						navigation: {
							wheelCallDelay:1000,
							onHoverStop:false,
							arrows: {
								enable:true,
								tmp:"<div class=\"tp-title-wrap\">  	<div class=\"tp-arr-imgholder\"></div> </div>",
								style:"zeus",
								left: {
									h_offset:40
								},
								right: {
									h_offset:40
								}
							}
						},
						parallax: {
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
							type:"scroll",
							origo:"slidercenter",
							speed:0
						},
						scrolleffect: {
							set:true,
							multiplicator:1.3,
							multiplicator_layers:1.3
						},
						viewPort: {
							global:false,
							globalDist:"-200px",
							enable:false
						},
						fallbacks: {
							allowHTML5AutoPlayOnAndroid:true
						},
					});

				}} 
				if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
			},
			CarouselSliderJS: function (){
				$('.xis-it-sponsor-slider').slick({
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
				$('.xis-it-testimonial-slider').slick({
					arrow: false,
					dots: true,
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1,
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
							slidesToShow: 2,
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
			PortfolioFilter:  function (){
				var $grid = $('.grid').imagesLoaded( function() {
					$grid.masonry({
						percentPosition: true,
						itemSelector: '.grid-item',
						columnWidth: '.grid-sizer'
					}); 
				});
				var $grid = $(".grid").isotope({
					itemSelector: ".grid-item",
					layoutMode: "fitRows"
				});
				var filterFns = {
					numberGreaterThan50: function() {
						var number = $(this)
						.find(".number")
						.text();
						return parseInt(number, 10) > 50;
					},
					ium: function() {
						var name = $(this)
						.find(".name")
						.text();
						return name.match(/ium$/);
					}
				};
				$(".button-group").on("click", "button", function() {
					var filterValue = $(this).attr("data-filter");
					filterValue = filterFns[filterValue] || filterValue;
					$grid.isotope({ filter: filterValue });
				});

				$(".button-group").each(function(i, buttonGroup) {
					var $buttonGroup = $(buttonGroup);
					$buttonGroup.on("click", "button", function() {
						$buttonGroup.find(".is-checked").removeClass("is-checked");
						$(this).addClass("is-checked");
					});
				});
			},

		}
	}
	jQuery(document).ready(function (){
		SaaSio_IT_Solution.init();
	});

})();