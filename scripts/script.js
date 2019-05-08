$(window).on('load' , function() {

    //menu toggler

    $('.navbar__burger').on('click' , function() {
        $('.navbar__nav').slideToggle();
    });

    $(window).resize(function() {
        if($(window).width() >= 768) {
            $('.navbar__nav').show();   
        }  else if($(window).width() <= 768) {
            $('.navbar__nav').hide();
        }
    });

    // services accordion

    $('.services__service').on('click' , function() {
        var elem = $(this).children('.service__content');

        elem.slideToggle('fast');
        if(elem.css('display') == 'flex') {
            elem.css('display' , 'none');
        } else {
            elem.css('display' , 'flex');
        }
    });

    // team photos

    $('.team__photos').children('img').on('click' , function() {
        $('.photos__photo-current').removeClass('photos__photo-current');
        $(this).addClass('photos__photo-current');
        $('.team__name').html($(this).attr('name'));
    });

    // testimonials reviews-slider

    $('.fa-chevron-up').on('click' , function() {
        var current = $('.current');
        if(current.prev().is('div')) {
            current.prev().addClass('current');
            current.removeClass('current'); 
        }             
    });

    $('.fa-chevron-down').on('click' , function() {
        var current = $('.current');
        if(current.next().is('div')) {
            current.removeClass('current');
            current.next().addClass('current'); 
        }       
    });
});