$(document).ready(function () {

    /*Mobile menu*/
    $('.js-mobile-menu-btn').click(function () {
        $(this).toggleClass('__active');

        $('.js-mobile-menu').slideToggle(500, 'swing');

    });
    /*! Mobile menu*/


    /*footer menu*/
    $('.js-footer-menu-btn').click(function () {
        $(this).toggleClass('__active');

        $('.js-footer-content__menu .h-menulist').slideToggle(500, 'swing');
    });

    $(window).on('resize', function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $('.js-footer-content__menu .h-menulist').show();
        }
    })
    /*! footer menu*/


    $('.js-search-result-mCustomScrollbar').mCustomScrollbar({
        theme: "dark",
    });


    /*Form Inputs:*/


    $('.js-input-edit-btn').click(function () {
        $(this).prev('.input-box__input').focus();
    });

    $('.input-box__input').on('change focus', function () {
        $(this).closest('.input-box').removeClass('input-box--success input-box--error');
    });

    $('.input-box__select').styler();


    /*notification*/
    setTimeout(function () {
        $('.js-notification').addClass('__show').slideDown(1000);
    }, 2000);

    $('.js-notification-close').on('click', function () {
        $(this).closest('.js-notification').removeClass('__show').slideUp(500);
    });



});