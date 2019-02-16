// Подключать этот скрипт только на страницах, где первым блоком в контентной части идет вертикально листающийся баннер

$(document).ready(function () {

    var bodyMinHeight = 0;


    setBodyMinHeight();
    $(window).on('resize', function () {
        bodyMinHeight = 0;
        setBodyMinHeight();
    });

    $.fn.isOutOfViewport = function () {
        var elementTop = $(this).offset().top;

        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();

        console.log("elementBottom: " + elementBottom);
        console.log("viewportTop: "  + viewportTop);

        return elementBottom <= viewportTop;
    };
    $.fn.isMiddleOutOfViewport = function () {
        var elementTop = $(this).offset().top;
        var elementMiddle = (elementTop + $(this).outerHeight()) / 2;
        var viewportTop = $(window).scrollTop();
        return elementMiddle < viewportTop;
    };
    $.fn.getBottomPos = function () {
        var viewportTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        return viewportTop - elementTop;
    }
    $.fn.isInView = function () {
        var elementTop = $(this).offset().top;
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return (viewportBottom > elementTop);

    }

    onMobile();

    if (window.matchMedia('(max-width: 1024px)').matches) {
        $('.aside-menu').addClass('__mobile');
    }

    if (window.matchMedia('(min-width: 1025px)').matches) {
        if ($('.hero__item:first-child .hero__content-wrap').isMiddleOutOfViewport()) {
            $('.aside-logo').removeClass('__invisible');
        } else {
            $('.aside-logo').addClass('__invisible');
        }
    }




    $(window).on('scroll resize', function () {


        $('.hero__content-wrap.__scrollable').each(function () {

            var nextHero = $(this).closest('.hero__item').next('.hero__item').find('.hero__content-wrap');

            if ($(this).isOutOfViewport()) {
                nextHero.addClass('__scrollable');
            }
            else {
                nextHero.removeClass('__scrollable');
            }
        });


        $('.hero__content-wrap.__scrollable').each(function () {
            var currentHeroId = $(this).attr('id');
            if ($(this).isInView()) {

                $('.hero__btn-item').removeClass('__current');
                $('.hero__btn-item[data-hero="' + currentHeroId + '"]').addClass('__current');

            }
        });


        if (window.matchMedia('(min-width: 1025px)').matches) {
            if ($('.hero__item:first-child .hero__content-wrap').isMiddleOutOfViewport()) {
                $('.aside-logo').removeClass('__invisible');
            } else {
                $('.aside-logo').addClass('__invisible');
            }
        }


        if ($('.hero__item:first-child .hero__content-wrap').isMiddleOutOfViewport()) {

            if (window.matchMedia('(min-width: 1025px)').matches) {
                $('.aside-menu.__first-screen').removeClass('__first-screen');
            }

        } else {
            if (window.matchMedia('(min-width: 1025px)').matches) {
                $('.aside-menu').addClass('__first-screen');
            }
        }


        if ($('.hero__item:last-child .hero__content-wrap').getBottomPos() > 200) {

            $('.aside-menu').removeClass('__theme-invert __folded')

            $('.hero__control').addClass('__hide');

        } else {

            $('.aside-menu').addClass('__theme-invert __folded');
            $('.hero__control').removeClass('__hide');

        }


        if ($('.hero__item:last-child .hero__content-wrap').isOutOfViewport()) {

            $('.aside-menu').removeClass('__onhero');

            if (window.matchMedia('(min-width: 1025px)').matches) {
                $('.aside-logo').removeClass('__onhero');
            }


        } else {

            $('.aside-menu').addClass('__onhero');

            if (window.matchMedia('(min-width: 1025px)').matches) {
                $('.aside-logo').addClass('__onhero');
            }
        }

        if ($('.hero__item:last-child .hero__content-wrap').getBottomPos() > 600) {
            $('.aside-logo').removeClass('__theme-invert')
        } else {
            $('.aside-logo').addClass('__theme-invert')
        }


        if ($('.hero__item:last-child .hero__content-wrap').hasClass('__scrollable')) {
            $('.content').removeClass('__fixed');
        } else {
            $('.content').addClass('__fixed');
        }


        onMobile();

    });


    $(document).on('click', '.hero__btn-item', function (event) {
        event.preventDefault();
        var targetHero = $(this.hash);
        console.info(targetHero);
        targetHero.closest('.hero__item').prevAll().each(function () {
            $(this).find('.hero__content-wrap').addClass('__scrollable');
        });
        targetHero.addClass('__scrollable');


        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 900);


        return false;

    });


    $(document).on('click', '.hero__down-btn', function (event) {

        $('.hero__item').each(function () {
            $(this).find('.hero__content-wrap').addClass('__scrollable');
        });

        $('html, body').animate({
            /*Скроллим с учетом паддинга элемента, к которому скроллим, минус 100 пикселей */
            scrollTop: $($.attr(this, 'href')).offset().top + (Number($($.attr(this, 'href')).css('padding-top').match(/\d+/)[0]) - 100)
        }, 1200);

        return false;
    });


    function onMobile() {
        if (window.matchMedia('(max-width: 1024px)').matches) {

            $('.aside-menu').removeClass('__first-screen __folded __onhero __theme-invert').addClass('__mobile');
        } else {
            $('.aside-menu').removeClass('__mobile');
        }
    }

    function setBodyMinHeight() {
        $('.hero__content-wrap').each(function () {
            bodyMinHeight += $(this).outerHeight();
        });
        $('body').css('min-height', bodyMinHeight).addClass('__has-slider');
    }

});