$(document).ready(function () {


    $('.header__section-title').on('click',  function () {
        if (window.matchMedia("(max-width: 991px)").matches) {
            if ($(this).hasClass('__active')) {
                $(this).next('.header__links-list').slideUp(500);
                $(this).removeClass('__active');
            } else {

                $('.header__section-title.__active').next('.header__links-list').slideUp(500);
                $('.header__section-title.__active').removeClass('__active');

                $(this).addClass('__active');
                $(this).next('.header__links-list').slideDown(500);
            }
        }
    });




    $('.header__btn_open').on('click', function (e) {
        e.preventDefault();
            $('body').addClass('__menu-open');
    })

    $('.header__btn_close').on('click', function (e) {
        e.preventDefault();
            $('body').removeClass('__menu-open');
    })



});