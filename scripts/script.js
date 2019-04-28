$(window).on('load' , function() {

    // services accordion

    $('.services__service').on('click' , function() {
        var elem = $(this).children('.service__content');

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
});