
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    $('.schedule-btn').click(function (e) {
        e.preventDefault();
        $('.schedule-btn').removeClass('schedule-btn-active');
        $(this).addClass('schedule-btn-active');
    });

    // handle form
    $("form").submit(function(event) {
        $.ajax({
          type: 'POST',
          url: $("form").attr("action"),
          data: $("form").serialize(),
        }).done(function(){
            $('.reg').hide()
        });
        $('.reg').hide()
        return false
    });

    $(document).ready(function(){
	     $('#nav-icon').click(function(){
		       $(this).toggleClass('open');
	     });
    });

})(jQuery); // End of use strict
