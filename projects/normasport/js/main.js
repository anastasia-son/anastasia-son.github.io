$(document).ready(function () {

    $(window).load(function () {
        $("#loaderAnimation").remove();
    });


    if (window.matchMedia("(max-width: 991px)").matches) {
        $('.mobile-menu ').addClass('__loaded');

    }

    $('.js-show-mobile-menu').on('click', function () {
        $('body').addClass('__show-mobile-menu');
    });

    $('.js-close-mobile-menu').on('click', function () {
        $('body').removeClass('__show-mobile-menu');
    });


    $(window).on('resize', function () {
        if (window.matchMedia("(max-width: 991px)").matches) {
            $('.mobile-menu ').addClass('__loaded');
        } else {
            $('.mobile-menu ').removeClass('__loaded');
        }
    });




    $('a.js-anchor-link').click(function(){

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800);
        return false;

    });





});




function counter(event) {
    var element = event.target;
    var currentItem = event.item.index + 1;
    var referentDataSlider = $(element).data('slider');


    var referentSliderNavCurrent = $('.slider-nav__current[data-current = ' + referentDataSlider + ']');

    referentSliderNavCurrent.html(currentItem);

}


function counterSlick(event, slick, currentSlide, _this){

    currentSlideHtml = currentSlide + 1;

    var referentDataSlider = $(_this).data('slider');
    var referentSliderNavCurrent = $('.slider-nav__current[data-current = ' + referentDataSlider + ']');
    referentSliderNavCurrent.html(currentSlideHtml);

}