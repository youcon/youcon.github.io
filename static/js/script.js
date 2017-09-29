
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

    $('a#desc-link').on('click', function(){
        var id = $(this).data("toggle"),
            o = $(id),
            po = $(this).parent()

        if (o) {
            o.removeClass('hide_desc')
            o.addClass('show_desc')
            po.removeClass('show_desc')
            po.addClass('hide_desc')
        }
        return false
    });

    // handle form
    $("form").submit(function(event) {
        $.ajax({
            type: 'POST',
            url: $("form").attr("action"),
            data: $("form").serialize(),
        }).done(function(){
            $('#reg_form').hide()
                $('#success').show()
        });
        $('#reg_form').hide()
            $('#success').show()
            return false
    });

    $(document).ready(function(){
	     $('#nav-icon').click(function(){
		       $(this).toggleClass('open');
	     });
    });

})(jQuery); // End of use strict
