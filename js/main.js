$(function(){
    $('.slider').slick({
        arrows: false,   /*чтобы убрать кнопки со слайдерв*/
        fade: true,
        autoplay: 3000,
        dots: true
    });

    $('.header-btn').on('click', function(){     /*чтобы появилось меню*/
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function(){    /*чтобы убрать меню*/
        $('.menu').removeClass('active');
    });

});