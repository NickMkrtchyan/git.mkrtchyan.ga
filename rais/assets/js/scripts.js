/* ----------------------------------------------------------------------------------------
* Author            : Nababur
* Author Web        : www.nababur.com
* Template Name     : Raisa Multipurpose Business Agency
* File              : Coder custom Js file
* Version           : 1.0.0
* ---------------------------------------------------------------------------------------- */
(function ($) {
    "use strict";

    /* Google Map */
    function myMap() {
      var mapCanvas = document.getElementById("map");
      var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2), zoom: 10
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
    }

    // Active Preloader Js
    var preLoader = $(window);
    preLoader.on("load", function () {
        var preloader = jQuery('.preloader');
        var spinnerTime = jQuery('.spinner');
        preloader.fadeOut();
        spinnerTime.delay(400).fadeOut('slow');
    });


    /* document scripts */
    jQuery(document).ready(function($) {

    	// Counter active js
        $('.counter').counterUp({
		    delay: 10,
		    time: 3000,
		    offset: 70,
		    beginAt: 100
		});

        // skillbar active js
        jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },3000);
        });

    });

    /* document scripts */
    jQuery(document).ready(function($) {
        /* Latest Work */
        $('#latest-work').owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            navText: ["<i class='icofont icofont-arrow-left'></i>","<i class='icofont icofont-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:true,
                    dots: false,
                    loop:true,
                    autoplay:true,
                    autoplayTimeout:3000,
                    autoplayHoverPause:true,
                },
                600:{
                    items:3,
                    nav:true,
                    loop:true,
                    dots: false,
                    slideSpeed : 300,
                    autoplay:true,
                    autoplayHoverPause:true,
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true,
                    dots: false,
                    slideSpeed : 300,
                    autoplay:true,
                    autoplayHoverPause:true,
                },
                1100:{
                    items:4,
                    nav:true,
                    loop:true,
                    dots: false,
                    slideSpeed : 300,
                    autoplay:true,
                    autoplayHoverPause:true,
                }
            }
        });

        /* Testimonial */
        $('#testimonial-area').owlCarousel({

            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            loop:true,
            margin:10,
            center: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    pagination : false,
                    dots: false,
                    loop:true,
                    autoplay:true,
                    autoplayTimeout:3000,
                    autoplayHoverPause:true,
                },
                600:{
                    items:3,
                    nav:false,
                    pagination : false,
                    dots: false,
                    autoplayHoverPause:true,
                },
                1000:{
                    autoplay:true,
                    loop:true,
                    items:3,
                    nav:false,
                    navigation : false, // Show next and prev buttons
                    slideSpeed : 300,
                    pagination : false,
                    dots: false
                }
            }
        });
        /* Testimonial */
        $('#award-carousel').owlCarousel({

            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            loop:true,
            margin:10,
            center: true,
            responsiveClass:true,
            navText: ["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    pagination : false,
                    dots: false,
                    autoplayHoverPause:true,
                },
                600:{
                    items:1,
                    nav:false,
                    pagination : false,
                    dots: false
                },
                1000:{
                    autoplay:true,
                    loop:true,
                    items:1,
                    nav:true,
                    navigation : true, // Show next and prev buttons
                    slideSpeed : 300,
                    pagination : false,
                    dots: false
                }
            }
        });


        //Isotop active js
        $('.grid').isotope({
          itemSelector: '.grid-item',
        });

        // filter items on button click
        $('.filter-button-group').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $('.grid').isotope({ filter: filterValue });
          $('.filter-button-group li').removeClass('active');
          $(this).addClass('active');
        });



        
    });




    // Top to Scroll 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
          $(".scroll-top-top").fadeIn('600');
        }else{
          $(".scroll-top-top").fadeOut('700');
        }
    });

    // Top to Scroll 
    $(document).ready(function() {
        $(".scroll-top-top").on("click", function(){
           $('html, body').animate({scrollTop: 0}, 'slow');
        });
    });




})(jQuery);


