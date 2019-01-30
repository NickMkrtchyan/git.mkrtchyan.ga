//
//$(window).load( function() {	
//
//
//  
//}); // window load end 



$(document).ready( function() {


    // PRELOADER
    var width = 100,
        perfData = window.performance.timing, 
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = ((EstimatedTime/1000)%50) * 100


    // Percentage Increment Animation
    var PercentageID = $(".percentage"),
            start = 0,
            end = 100,
            durataion = time;
            animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

        var range = end - start,
          current = start,
          increment = end > start? 1 : -1,
          stepTime = Math.abs(Math.floor(duration / range)),
          obj = $(id);


        var timer = setInterval(function() {
            current += increment;
            $(obj).text(current);
          //obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
  setTimeout(function(){
        $('.preloader').fadeOut();
        
        $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
            $(this).removeClass("visible closing opening").dequeue();
        });
        
  }, time);
  

    // HOME HEIGHT
     function centerInit() {
        var hometext = $('.home')
        hometext.css({
            "height": $(window).height() + "px"
        });
        $('.page').css({
            "min-height": $(window).height() + "px"
        });
    }
    centerInit();
    $(window).resize(centerInit);

  
  // IMAGE HOVER SLIDE
  function hoverslide() {
    $('.anews, .portdet').mousemove(function(e) {
       var ypos=e.clientY;
       var thisway = $(this).children('figure').children('img');
       var coord = $(this).offset();
       var dady = coord.top;
       var eTop = dady - $(window).scrollTop();
       ypos=(ypos-eTop);
        $(thisway).css('top',((0+((ypos)))*-1+"px"));    
      });

    $( ".anews" ).mouseleave(function() {
        $('.anews figure img').css('top',(0+"px")); 
    });    
  }
  hoverslide();


     //SUPER SLIDER
    function supersld(){
    if ($('#slides').length) { 
        $('#slides').superslides({
          animation: 'fade',
          play: 3000
        }); 
      }
    }
    supersld();

    //HOME VIDEO
    function bgvideo(){
       if ($('#bgndVideo').length) {
          $(function (){
            $("#bgndVideo").YTPlayer();
          });
      }
    }
    bgvideo();

    // HOME TYPED JS
    function typo() {
        if ($('.element').length) {
          $('.element').each(function () {
              $(this).typed({
                  strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')],
                  loop: $(this).data('loop') ? $(this).data('loop') : false ,
                  backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
                  typeSpeed: 10,
              });
          });
        }
      } 
      typo();

      // WRAPPER BUG FIXED
      function pagewrap(){
       var numrapper = $('.wrapper').length;
          if(numrapper >= 2){
              $('.wrapper').slice(1).remove();
          }
      }


       // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    function magnific(){
        $('.lightbox').magnificPopup({
            type:'image',
            gallery:{enabled:true},
            zoom:{enabled: true, duration: 300}
        });
    }

    if ($('.lightbox').length) {
      magnific();
    }

  

      //PAGE AJAX LOAD
            var pagenormal = function() {
              //add transition to .prev
              $('a.pagelink').cssPageTransitions( {
                  elementsOut: '.wrapper',
                  elementsIn: '.wrapper',
                  classOut: 'is-moveout',
                  classIn: 'is-movein',
                  animationEnded: function() {
                      $('.is-moveout').remove();
                      pagenormal();
                      pagewrap();
                      registerCssTransitions();
                      magnific();
                hoverslide();
                  },
                  onLoaded: function() {
                      typo();
                    centerInit();
                    bgvideo();
                    supersld();
                      $('.nav-icon').on('click', function(){
                              $('nav').slideToggle();
                      });
                  },
                  onClicked: function() {
                    if ($('#wrapper_bgndVideo').length) {
                     $('#wrapper_bgndVideo').hide(1200);
                    }
                  }
              });
          };


          $( document).ready(function() {
              pagenormal();
          });  

      //PORTFOLIO AJAX LOAD
        var registerCssTransitions = function() {
              //add transition to .prev
              $('.portdet').cssPageTransitions( {
                  elementsOut: '.wrapper',
                  elementsIn: '.wrapper',
                  classOut: 'change',
                  classIn: 'change-in',
                  animationEnded: function() {
                      $('.change').remove();
                      registerCssTransitions();
                      pagenormal();
                      magnific();
                  }
              });
          };

          $( document).ready(function() {
              registerCssTransitions();
          });

          $('.portdet').on('click', function(){
                  $(this).addClass('bu');
          });


   $('.nav-icon').on('click', function(){
            $('nav').slideToggle();
    });

}); // document read end 



$(function($) {
  
  //Watch all ajax activity
  $(document).ajaxStart(function() {
    if ($('#loading-bar').length === 0) {
      $('body').append( $('<div/>').attr('id', 'loading-bar').addClass(_lb.position) );
      _lb.percentage = Math.random() * 30 + 30;
      $("#loading-bar")[_lb.direction](_lb.percentage + "%");

      _lb.interval = setInterval(function() {
        
        _lb.percentage = Math.random() * ( (100-_lb.percentage) / 2 ) + _lb.percentage;
        
        $("#loading-bar")[_lb.direction](_lb.percentage + "%");
        
      }, 500);

    }

  }).ajaxStop(function() { 
    clearInterval(_lb.interval);
    $("#loading-bar")[_lb.direction]("101%");
    setTimeout( function() {
      $("#loading-bar").fadeOut(300, function() {
        $(this).remove();
      });
    }, 300);

  });
});
var _lb = {}
_lb.position  = 'top';
_lb.direction = 'width'
_lb.get = function( callback ) {
  _lb.loading = true;
  jQuery.ajax({
    url   : this.href,
    success: function(response) {
      _lb.loading = false;
      if ( typeof(callback) === 'function'  )
        callback( response );
    }
  });
}


