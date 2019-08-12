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

    //video modal 

    $('.hero__modal-trigger').on('click' , function() {
        $('.hero__video-modal').css('display' , 'block');
        $('.close').on('click' , function() {
            $('.hero__video-modal').css('display' , 'none');
        })
    });

    // services accordion
    $('.services__service').children('.service__content').hide();

    $('.services__service').on('click' , function() {
        var elem = $(this).children('.service__content');

        elem.slideToggle('fast');
    });

    // team photos

    $('.team__photos').children('img').on('click' , function() {
        $('.photos__photo-current').removeClass('photos__photo-current');
        $(this).addClass('photos__photo-current');
        $('.team__name').html($(this).attr('name'));
    });






    // testimonials reviews-slider
    let count = 0;
    const reviews = $('.customers__review');

    function reset() {
        reviews.each(function() {
            $(this).removeClass('current')
        });
    }

    $('#arrow_up').on('click' , function() {
        count--

        if(count <= 0) {
            count = 0;
        }

        reset()

        reviews.eq(count).addClass('current');
    })

    $('#arrow_down').on('click' , function() {
        count++

        if(count >= reviews.length - 1) {
            count = reviews.length - 1
        }
        
        reset()

        reviews.eq(count).addClass('current');
    })
});