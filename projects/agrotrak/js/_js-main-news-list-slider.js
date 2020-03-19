$(document).ready(function () {

    $('.js-main-news-list-slider').addClass('__loaded');

    $('.js-main-news-list-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: $('#mainNewsSliderArrows .slider-arrow-top--prev'),
        nextArrow: $('#mainNewsSliderArrows .slider-arrow-top--next'),

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });


    $('.js-main-news-list-slider').on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });


});