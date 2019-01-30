$(function(){
	"use strict";
	
	var portfolio = $('.portfolio-items'),
		blog = $('.blog-posts'),
		$testimonials = $('.testimonials-slider');
	
	
	$('figure').fitVids();
	
	/*=========================================================================
		Magnific Popup (Project Popup initialization)
	=========================================================================*/
	$('.has-popup').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	
	var sect = window.location.hash;
	if ( $(sect).length == 1 ){
		$('.section.active').removeClass('active');
		$(sect).addClass('active');
		$('.menu-items > li > a.active').removeClass('active');
		$('.menu-items a[href='+sect+']').addClass('active');
		if( $(sect).data('color') == 'dark' ){
			$('body').addClass('dark-color');
		}else{
			$('body').removeClass('dark-color');
		}
		$('body, .nav').css('background-color', $(sect).data('bg'));	
	}
	
	$(window).on('load', function(){
		
		blog.shuffle();
		portfolio.shuffle();
		
		$('body').addClass('loaded');
		
	});
	
	$('.portfolio-filters > li > a').on('click', function (e) {
		e.preventDefault();
		var groupName = $(this).attr('data-group');
		$('.portfolio-filters > li > a').removeClass('active');
		$(this).addClass('active');
		portfolio.shuffle('shuffle', groupName );
	});
	
	
	$(window).on('scroll', function(){
		
		$('.dark-bg').each(function(){
			
			var $this = $(this),
				e_top = $this.offset().top,
				s_top = $(window).scrollTop() + 50,
				e_height = $this.outerHeight();
			
			
			if(  e_top < s_top  &&  s_top <  ( e_top + e_height )  ){
				$('body').addClass('light');
			}else{
				$('body').removeClass('light');
			}
			
			
		});
		
	});
	
	
	
	$testimonials.owlCarousel({items:1});
	
	
	var cTimeout = false, color, timeout;
	$('.menu-items > li > a, .section-link').on('click', function(e){
		
		var section = $(this).attr('href');
		$('body').removeClass('show-menu');
		
		if( $(section).length == 1 && !$(section).hasClass('active') ){
			
			
			
			if(cTimeout){
				
				clearTimeout(timeout);
				$('body').removeClass('switch');
				$('.ripple').remove();
		
			}
			
			if( $(section).data('color') == 'dark' ){
				$('body').addClass('dark-color');
			}else{
				$('body').removeClass('dark-color');
			}
			
			color = $(section).data('bg');
			
			setTimeout(function(){
				$('<div class="ripple" ></div>').css({
					'background' : color,
					'top' : e.clientY,
					'left' : e.clientX
				}).appendTo('body');
			}, 0);
			
			$('.menu-items > li > a.active').removeClass('active');
			$('.menu-items a[href='+section+']').addClass('active');
			
			$('body').addClass('switch');
			
			cTimeout = true;
			
			
			setTimeout(function(){
				
				$('.section.active').removeClass('active');
				
				$(section).addClass('active');
				
			}, 500);
			
			
			timeout = setTimeout(function(){
				$('body').removeClass('switch');
				$('body, .nav').css('background-color', color);
				$('.ripple').remove();
				cTimeout = false;
			}, 1000);
			
			setTimeout(function(){
				portfolio.shuffle('destroy');
				portfolio.shuffle();
				
				blog.shuffle('destroy');
				blog.shuffle();
				
				$testimonials.data('owlCarousel').onResize();
				
			}, 500);
			
		}
		
		
	});
	
	/*=========================================================================
		Contact Form (NOT WORKING IN DEMO ONLY)
	=========================================================================*/
	$('#contact-form').validator().on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			e.preventDefault();
			var $this = $(this),
				//You can edit alerts here
				alerts = {
					success: 
					"<div class='form-group' >\
						<div class='alert alert-success' role='alert'> \
							<strong>Message Sent!</strong> We'll be in touch as soon as possible\
						</div>\
					</div>",
					error: 
					"<div class='form-group' >\
						<div class='alert alert-danger' role='alert'> \
							<strong>Oops!</strong> Sorry, an error occurred. Try again.\
						</div>\
					</div>"
				};
			$('#contact-form-result').html(alerts.success);
			$('#contact-form').trigger('reset');
		}
	});
	
	
	$('.menu-btn').on('click', function(e){
		
		e.preventDefault();
		
		$('body').toggleClass('show-menu');
		
	});
	
	$('#main-wrapper').on('click', function(){
		
		$('body').removeClass('show-menu');
		
	});
	
	
});