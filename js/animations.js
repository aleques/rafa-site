/*
Template Name: Aphrodite
Author: Ingrid Kuhn
Author URI: themeforest/user/ingridk
Version: 1.1
*/

	//----------------------------------- Animations -----------------------------------//
	$(document).ready(function () {
		"use strict";
		

		//animate rows on scroll

		const boxes = gsap.utils.toArray('.row,.credits');

		boxes.forEach(box => {
		  gsap.from(box, { 
			y: -20,
			autoAlpha: 0, 
			duration:0.8,
			scrollTrigger: {
			  trigger: box,
				start: "10% bottom"
			}
		  })
		});
	
	
		//parallax bg
		
		if(document.querySelector(".parallax")) {
		  gsap.to(".parallax", {
			  backgroundPosition: "50% 100%",
			  ease: "none",
			  scrollTrigger: {
				trigger: ".parallax",
				start: "top bottom",
				end: "bottom top",
				scrub: true
			  }
		});
		}

		//animations on load

		if(document.querySelector(".affix-sidebar")) {
			gsap.from(".affix-sidebar", {duration:0.8, delay:0.7,opacity:0});
			gsap.from(".affix-sidebar .nav-link", {duration:0.5,delay:0.2,opacity:0});
			gsap.from(".affix-sidebar .social-media a", {duration:1.5,delay:0.2,opacity:0,stagger:0.3});
		}
		if(document.querySelector(".border-grid")) {
			gsap.from(".border-grid", {duration:0.8, y:'100%', ease: 'slow',delay:0.1,opacity:0});
		}
		
		if(document.querySelector(".border-grid-down")) {
			gsap.from(".border-grid-down", {duration:0.8, x:'100%', ease: 'slow',delay:0.1,opacity:0});
		}
					
        if(document.querySelector(".box-effect")) {
			gsap.fromTo(".box-effect", { autoAlpha: 0 }, {duration:0.5,delay:0.98,autoAlpha:1,stagger:0.2});
		}
		 	 
		if(document.querySelector(".text-grid")) {
			gsap.fromTo(".text-grid", { autoAlpha: 0,y:'-50%' }, {duration:0.8,y:'0%',delay:1.1,autoAlpha:1,stagger:0.5});
		}
		
		if(document.querySelector(".page-header")) {	
			gsap.from(".page-header", {duration:1, y:'-50%', ease: 'slow',opacity:0});
			gsap.from(".page-header h1,.page-header .breadcrumb", {duration:1, y:'-50%', ease: 'slow',delay:0.8,opacity:0});
		}
		
		if(document.querySelector(".inside-wrapper")) {
			gsap.fromTo(".inside-wrapper", { opacity: 0 }, {duration:1.2,y:'0%',delay:0.8,opacity:1});
		}
		   
		   	
		//intro home page index2
		if(document.querySelector(".intro-header")) {

			var introhome = gsap.timeline({
				Delay: 1
			});
			introhome.set(".intro-header", {opacity: 0})
			.to("#intro-home", {autoAlpha: 1,duration: 1})
			.to("#intro-home", {autoAlpha: 0.3,duration: 1})
			.to(".intro-header", {yPercent: -50,opacity: 1,duration: 2})
			.to(".intro-header", {
				scrollTrigger: {
					trigger: ".intro-header",
					start: "top 40%",
					end: "bottom 50%",
					scrub: 3, 
					toggleActions: "play none none reverse",
				},
				css: {
					scale: 1.4,opacity: 0
				},
				ease: 'slow'
			})
		}
						
		//Preloader

		gsap.to("#preloader", 1, {
		  top: "-100%",
		  ease: Expo.easeInOut
		})

		gsap.to(".preloader-logo", 0.6, {
		  opacity: 0,
		  ease: 'slow'
		})


		//Polygon image reveal

		if(document.querySelector(".image-polygon")) {
			gsap.to(".image-polygon", 2, {
			scrollTrigger:{
				trigger:".image-polygon",
				start: "top 40%"		 
			},
			css:{scale:1, opacity:1,  clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},
			ease: "slow"
			});
		}
		
        //Block image reveal
		
		if(document.querySelector(".block-reveal")) {
			
			gsap.to(".block-reveal", 1, {
			scrollTrigger:{
				trigger:".block-reveal",
				start: "top 40%",				
			},
			left: "-100%", 
			ease: Power1.easeOut

			});
			
		}
		
      //parallax images 
	  
	  if(document.querySelector(".parallax-effect")) {
		  
			gsap.to(".parallax-effect .para1",1, {
			scrollTrigger: {
			trigger: ".parallax-effect",
			start: "top 80%",
			end: "bottom 10%",
			scrub:5,
			toggleActions: "play none none reverse"
			},

			y:'-40%', 
			ease: 'slow'
			});

			gsap.to(".parallax-effect .para2",1, {
			scrollTrigger: {
			trigger: ".para2",
			start: "top 80%",
			end: "bottom 10%",
			scrub:5,
			toggleActions: "play none none reverse"
			},

			y:'30%',			 
			ease: 'slow'
			});
			
        }

	
	}); 
		