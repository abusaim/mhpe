var $ = jQuery;	
$(document).ready(function(){
	// Scrol to top 
  	$(window).scroll(function () {
		if ($(this).scrollTop() > 767) {
			$('.scrollup').fadeIn('slow');
		} else {
			$('.scrollup').fadeOut('slow');
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	// Main menu sticky	
  	/*
  	var num = $('.headerTop').innerHeight(); 
	var menu_height = $('#main_menu').innerHeight();
	$(window).bind('scroll', function () {	 
	 if ($(window).scrollTop() >= num) {
	  		$('header+section').css({'margin-top':menu_height});
			$('#main_menu').addClass('sticky');
		} else {
			$('#main_menu').removeClass('sticky');
	  		$('header+section').css({'margin-top':0});
		}		
	});*/
	var nav = $('#main_menu');
    var header = $('.headerTop');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function () {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
        	$('#main_menu').addClass('sticky');
            nav.css({
                position: 'fixed',
                top: 0,                
            });
            header.css('marginTop', 50);
            isFixed = true;
        } else if (!shouldBeFixed && isFixed) {
        	$('#main_menu').removeClass('sticky');
            nav.css({
                position: 'relative'
            });
            header.css('marginTop', 0);
            isFixed = false;
        }
    });

	//main Banner
  $('#main_banner').slick({
    	dots: false,
	  	infinite: true,
	  	speed: 500,
	 	fade: true,
	 	autoplay: true,
	 	autoplaySpeed:5000,
	 	arrows: false,
	 	touchMove: true,
  });
  // Brand Logo
  $('#brand_logo').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 9,
	  slidesToScroll: 1,
	  autoplay: true,
	  arrows:false,
	  responsive: [
	    {
	      breakpoint: 1230,
	      settings: {
	      	slidesToShow: 9,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	      	slidesToShow: 8,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 6,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	      	slidesToShow: 5,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 380,
	      settings: {
	      	slidesToShow: 2,
	      }
	    }
	  ]
	});
});
var wow = new WOW ({
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false       // trigger animations on mobile devices (true is default)
  });
wow.init();












