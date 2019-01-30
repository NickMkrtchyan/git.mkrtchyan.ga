$(function(){
	"use strict";
	
	var portfolio = $('.portfolio-items'),
		blog = $('.blog-posts'),
		sect = $( window.location.hash );
	
	
	function switchSection(sect){
		
		var sec_id = $(sect).attr('id'),
			tab_link = $('.tabs a[href="#'+ sec_id +'"]');
		
		if( sect.length==1){
			
			$('.section.active').removeClass('active');
			sect.addClass('active');
			
			if( tab_link.length == 1 ){
				
				$('.tabs a.active').removeClass('active');
				tab_link.addClass('active');
				
			}
			
		}
	}
	
	$('.skill').each(function(){
		
		var $this = $(this),
			percent = $this.data('percent');
			
		$this.append("<span class='percent' >"+percent+"%</span><div class='skill-bar' ><div style='width:"+percent+"%;' ></div></div>");
		
	});
	
	
	
	switchSection(sect);
	
	/*=========================================================================
		Testimonials Slider
	=========================================================================*/
	$('.testimonials-slider').owlCarousel({
		items: 1
	});
	
	$(window).on('load', function(){
		
		portfolio.shuffle({
			gutterWidth: 8
		});
		
		blog.shuffle({
			gutterWidth: 20
		});
		
		$('body').addClass('loaded');
		
	});
	
	/*=========================================================================
		Portfolio Filters Function
	=========================================================================*/
	$('.portfolio-filters > li > a').on('click', function (e) {
		e.preventDefault();
		var groupName = $(this).attr('data-group');
		$('.portfolio-filters > li > a').removeClass('active');
		$(this).addClass('active');
		portfolio.shuffle('shuffle', groupName );
	});
	
	
	$('.section-link').on('click', function(e){
		
		var $this = $(this),
			sect = $this.attr('href'),
			sect = $(sect);
			
		switchSection(sect);
		
	});
	
	/*=========================================================================
		Portfolio Popups
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
	
	$('figure').fitVids();
	
	
	/*=========================================================================
		Contact Form
	=========================================================================*/
	function isJSON(val){
		var str = val.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
		return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
	}
	$('#contact-form').validator().on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			// If there is no any error in validation then send the message
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
			$.ajax({
				url: 'mail.php',
				type: 'post',
				data: $this.serialize(),
				success: function(data){
					if( isJSON(data) ){
						data = $.parseJSON(data);
						if(data['error'] == false){
							$('#contact-form-result').html(alerts.success);
							$('#contact-form').trigger('reset');
						}else{
							$('#contact-form-result').html(
							"<div class='form-group' >\
								<div class='alert alert-danger alert-dismissible' role='alert'> \
									<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
										<i class='ion-ios-close-empty' ></i> \
									</button> \
									"+ data['error'] +"\
								</div>\
							</div>"
							);
						}
					}else{
						$('#contact-form-result').html(alerts.error);
					}
				},
				error: function(){
					$('#contact-form-result').html(alerts.error);
				}
			});
		}
	});
	
	
});