/*
Template Name: Aphrodite
Author: Ingrid Kuhn
Author URI: themeforest/user/ingridk
Version: 1.1
*/

	//----------------------------------- Document ready -----------------------------------//
	$(document).ready(function () {
		"use strict";
		
		 // get current URL path and assign 'active' class

		 $(function($) {
		  let url = window.location.href;
		  $('nav ul li a').each(function() {
			if (this.href === url) {
				$(this).addClass('active');
			  $(this).parents('li').find('a.nav-link').addClass('active');
			}
		  });
		});
		
		//Scrolling feature 

		$('.page-scroll a').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		// Close Navbar when clicked outside
		
		$(window).on('click', function(event){
			var clickOver = $(event.target)
			if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
				$('button[aria-expanded="true"]').click();
			}
		});
		
		//	Back Top Link

		var offset = 500;
		var duration = 500;
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});

		
	}); // end document ready


	//----------------------------------- Window load function -----------------------------------//

	$(window).on('load', function(){
	"use strict";	
	
	
		//Slick Slider
		$('.slider-centered').slick({
			dots: true,
			arrows:false,
			autoplaySpeed: 1000,
			slidesToShow: 2,
			centerMode: true,
		    centerPadding: '80px',
			responsive: [{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		$('.slider-1').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 1

		});
		$('.slider-2').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 2,
			responsive: [{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$('.slider-3').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		$('.slider-4').slick({
			dots: true,
			autoplaySpeed: 2000,
			slidesToShow: 4,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
		
		
	   // Magnific Popup

		$('#lightbox-wrap').magnificPopup({
			delegate: 'a', 
			type: 'image',
			gallery: {
				enabled: true
			}
		});
				

	}); // end window load function

