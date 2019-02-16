$(document).ready(function () {

    $(document).on('click', '.mobile-menu-btn', function () {
        $(this).toggleClass('__open');
        $('.aside-menu').toggleClass('__show');
        $('body').toggleClass('__noscroll');
    });


    if (window.matchMedia('(max-width: 1024px)').matches) {
        $('.aside-menu:not(.__first-screen)').addClass('__mobile');
    }


    $(window).on('scroll resize', function () {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            $('.aside-menu:not(.__first-screen)').addClass('__mobile');
        } else {
            $('.aside-menu:not(.__first-screen)').removeClass('__mobile');
        }
    });


    $('.js-events__list_slider').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 1000,
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
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 821,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }

        ]
    });


    $('.js-gallery__list_slider').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 1000,
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
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 821,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }

        ]
    });


    $('.js-news__list_slider').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 1000,
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
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 821,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }

        ]
    });

    /* Слайдеры на детальной мероприятия*/
    $('.js-event-images_slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,
            asNavFor: '.js-event-images-control_slider',
            arrows: false,
            dots: false,

            fade: true,
            cssEase: 'linear',
        }
    );

    $('.js-event-images-control_slider').slick({
        autoplay: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.js-event-images_slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    });


    /* END Слайдеры на детальной мероприятия*/

    $('.footer__button-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 900);
        return false;
    });


});