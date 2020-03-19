$(document).ready(function () {


    AOS.init({
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });

    $(window).on('load', function() {
        AOS.refresh();
    });

    $('a.js-anchor-link').click(function () {

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;

    });


    $('.mobile-menu ').addClass('__loaded');



    $('.js-show-mobile-menu').on('click', function () {



        if ($('body').hasClass('__show-mobile-menu')) {
            $('body').removeClass('__show-mobile-menu');
        } else {
            $('body').addClass('__show-mobile-menu');
        }

    });

    $('.js-close-mobile-menu').on('click', function () {
        $('body').removeClass('__show-mobile-menu');
    });


    $('.overlay').on('touchmove', function (e) {
        e.preventDefault();
    }, false);


    $(window).scroll(function () {
        var headerPosition = $(document).scrollTop();

        var headerHeight = $('.header').outerHeight();
        var firstSection = $('.hero').outerHeight();

        if (window.matchMedia("(max-width: 767px)").matches) {
            firstSection = $('.hero__head-wrapper').outerHeight();
        }


        if (headerPosition > headerHeight) {
            $('.header').addClass('_fixed');

            if (headerPosition >= headerHeight * 2) {
                $('.header--inner:not(.header--hero)').addClass('_sticky');
            }
        } else {
            $('.header--inner').removeClass('_sticky');
            $('.header').removeClass('_fixed');
        }
        if (headerPosition >= firstSection) {
            $('.header--hero').addClass('_sticky');
        } else {
            $('.header--hero').removeClass('_sticky');
        }


    });
    

    if ((window.matchMedia("(min-width: 1200px)").matches) && !isIE() ) {
        $(window).stellar({
            scrollProperty: 'scroll',
            positionProperty: 'transform',
            // responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
        });
    }


});

function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    return is_ie;
}

function counterSlick(event, slick, currentSlide, _this) {

    currentSlideHtml = currentSlide + 1;

    var referentDataSlider = $(_this).data('slider');
    var referentSliderNavCurrent = $('.slider-nav__current[data-current = ' + referentDataSlider + ']');
    referentSliderNavCurrent.html(currentSlideHtml);

}