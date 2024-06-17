// JavaScript Document
jQuery(document).ready(function($) { 
	
	$('.mainmenu li:has(ul)').addClass('parent'); 
 
    $('a.menulinks').click(function() {
        $(this).next('ul').slideToggle(250);
        $('body').toggleClass('mobile-open'); 
		$('.mainmenu li.parent ul').slideUp(250);
		$('a.child-triggerm').removeClass('child-open');
        return false;
     });	 
	 
	$('.mainmenu li.parent > a').after('<a class="child-triggerm"><span></span></a>');
	
    $('.mainmenu a.child-triggerm').click(function() {
        $(this).parent().siblings('li').find('a.child-triggerm').removeClass('child-open');
        $(this).parent().siblings('li').find('ul').slideUp(250);
        $(this).next('ul').slideToggle(250);
        $(this).toggleClass('child-open');
        return false;
    });
	  //testimonials jquery
    $('.testimonials').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      cssEase: 'linear'
    });
    
    //Tabs jquery
    $('.js-tabs-title').on('click', function() {
      var openTab = $(this).data('tab'),
          linePosition = $(this).position().left;
      
      $('.js-tabs-title').removeClass('active');
      $(this).addClass('active');
      $('.js-tabs-content').removeClass('active');
      $(openTab).addClass('active');
    });

    // Gallery image hover
    if (jQuery(window).width() > 1199) {
      $( ".img-wrapper" ).hover(
        function() {
          $(this).find(".img-overlay").animate({opacity: 1}, 600);
        }, function() {
          $(this).find(".img-overlay").animate({opacity: 0}, 600);
        }
      );
    }

    // Lightbox
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left">prev</i></div>');
    var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right">next</i></div>');
    var $exitButton = $('<div id="exitButton"><i class="fa fa-times">close</i></div>');

    // Add overlay
    $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
    $("#our-gallery").append($overlay);

    // Hide overlay on default
    $overlay.hide();

    // When an image is clicked
    $(".img-overlay").click(function(event) {
      // Prevents default behavior
      event.preventDefault();
      // Adds href attribute to variable
      var imageLocation = $(this).prev().attr("href");
      // Add the image src to $image
      $image.attr("src", imageLocation);
      // Fade in the overlay
      $overlay.fadeIn("slow");
    });

    // When the overlay is clicked
    $overlay.click(function() {
      // Fade out the overlay
      $(this).fadeOut("slow");
    });

    // When next button is clicked
    $nextButton.click(function(event) {
      // Hide the current image
      $("#overlay img").hide();
      // Overlay image location
      var $currentImgSrc = $("#overlay img").attr("src");
      // Image with matching location of the overlay image
      var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
      // Finds the next image
      var $nextImg = $($currentImg.closest(".image").next().find("img"));
      // All of the images in the gallery
      var $images = $("#image-gallery img");
      // If there is a next image
      if ($nextImg.length > 0) { 
        // Fade in the next image
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
      } else {
        // Otherwise fade in the first image
        $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
      }
      // Prevents overlay from being hidden
      event.stopPropagation();
    });

    // When previous button is clicked
    $prevButton.click(function(event) {
      // Hide the current image
      $("#overlay img").hide();
      // Overlay image location
      var $currentImgSrc = $("#overlay img").attr("src");
      // Image with matching location of the overlay image
      var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
      // Finds the next image
      var $nextImg = $($currentImg.closest(".image").prev().find("img"));
      // Fade in the next image
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
      // Prevents overlay from being hidden
      event.stopPropagation();
    });

    // When the exit button is clicked
    $exitButton.click(function() {
      // Fade out the overlay
      $("#overlay").fadeOut("slow");
    });	

});//document.ready end here