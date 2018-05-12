var $ = jQuery;
$(document).ready(function(){
	//main Banner
  $('#main_banner').slick({
    	dots: false,
	  	infinite: true,
	  	speed: 500,
	 	fade: true,
	 	autoplay: true,
	 	autoplaySpeed:5000,
	 	arrows: false,
	  	cssEase: 'linear'
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