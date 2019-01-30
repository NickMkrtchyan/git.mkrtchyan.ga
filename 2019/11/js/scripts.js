/*-----------------------------------------------------------------------------------

    Theme Name: Sodic
    Theme URI: http://
    Description: The Creative Onepage Template
    Author: design_story
    Author URI: http://themeforest.net/user/design_story
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function() {

    "use strict";

    var wind = $(window);



    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });



    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 1){

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });


    // close navbar-collapse when a  clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    var c4 = $('.circle');
    var myVal = $(this).attr('data-value');

    $(".sk-progress .circle").each(function () {

        c4.circleProgress({
            startAngle: -Math.PI / 4 * 2,
            value: myVal,
            fill: {
              gradient: ["#EE3158", "#e1284e"]
            }
        });

    });



    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    // === owl-carousel === //


    // Team owlCarousel
    $('.services .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay:true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay:true,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // testimonials-grid owlCarousel
    $('.testimonials-grid .owl-carousel').owlCarousel({
        loop:true,
        margin: 60,
        mouseDrag:true,
        autoplay:true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop:true,
        margin: 60,
        mouseDrag:true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                autoplay:true,
            },
            600:{
                items:3,
                autoplay:true,
            },
            1000:{
                items:6,
                autoplay:false,
            }
        }
    });

    // === End owl-carousel === //

    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });


    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // stellar
    wind.stellar();


    // countUp
    $('.numbers .counter').countUp({
        delay: 10,
        time: 1500
    });


});


// === window When Loading === //

$(window).on("load",function (){

    var wind = $(window);

    // Preloader
    $(".loading").fadeOut(500);


    // stellar
    wind.stellar();


    // isotope
    $('.masonry').isotope({
      // options
      itemSelector: '.mas'
    });

    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });


    // contact form validator
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});


// Slider 
$(document).ready(function() {

    var owl = $('.header .owl-carousel');


    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500
    });

    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h4').removeClass('animated fadeInDown fadeInLeft');
        $('h1').removeClass('animated fadeInUp fadeInRight');
        $('.slider-line').removeClass('animated zoomIn');
        $('p').removeClass('animated fadeInDown fadeInUp');
        $('.butn').removeClass('animated zoomIn');

        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        
        $('.agency .owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInDown');
        $('.agency .owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.agency .owl-item').not('.cloned').eq(item).find('.slider-line').addClass('animated zoomIn');
        $('.agency .owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });


});

// Nav to other pages
jQuery(document).ready(function($) {

  var $body                = $('body');
  var bodyHeight           = $body.outerHeight();
  var navbarFixedTopHeight = $('.navbar').outerHeight();
  var locHref              = location.href;
  var locHashIndex         = locHref.indexOf('#');
  var locHash              = locHref.substr(locHashIndex);
 

  function animateOffset( element, ms, easing ) {
    $('html, body').animate({
      scrollTop: $(element).offset().top - navbarFixedTopHeight + 75
    }, ms, easing);
  }
  $(window).load(function() {
     if ( locHashIndex !== -1 && $(locHash).length ) {
      setTimeout(function () { 
        animateOffset(locHash, 1, 'linear');
      }, 10);
     }
  });
});

// The end
