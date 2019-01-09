$(document).ready(function () {


    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Закрыть (Esc)', // Alt text on close button
        tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
        gallery: {
            tPrev: 'Назад (Стрелка влево)', // Alt text on left arrow
            tNext: 'Дальше (Стрелка вправо)', // Alt text on right arrow
            tCounter: '%curr% из %total%' // Markup for "1 of 7" counter
        },
        image: {
            tError: '<a href="%url%">Изображение</a> не было загружено.' // Error message when image could not be loaded
        },
        ajax: {
            tError: '<a href="%url%">Содержимое</a> не было загружено.' // Error message when ajax request failed
        },
        iframe: {
            tError: '<a href="%url%">Контент</a> не удалось загрузить.'
        },
    });


    $('.gallery__slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [1, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });

    $(document).ready(function() {
        $('.video__link').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });



    $('.gallery__slider').slick({
        rows: 3,
        slidesPerRow: 4,
        dots: false,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    rows: 4,
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rows: 6,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                }
            }

        ]

    });

    $('.feedback__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }

        ]
    });
    
    /*Установка одинаковой высоты всем слайдам feedback-slider:*/
    $('.feedback__slider').on('setPosition', function () {
        resizeFeedbackSlider();
    });

    $(window).on('resize', function(e) {
        resizeFeedbackSlider();
    });


    $('.partners__list').slick({
        arrows: true,
        dots: false,
        // variableWidth: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });


    $('.footer__button-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 900);
        return false;
    });

    

    function resizeFeedbackSlider(){
        $slickSlider = $('.feedback__slider');
        $slickSlider.find('.slick-slide').height('auto');

        var slickTrack = $slickSlider.find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();

        $slickSlider.find('.slick-slide').css('height', slickTrackHeight + 'px');
    }


});