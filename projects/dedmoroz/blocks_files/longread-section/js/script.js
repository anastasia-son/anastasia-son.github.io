$(document).ready(function () {

    $.fn.isPartiallyInViewport = function () {
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var elementHeight = $(this).outerHeight();
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + elementHeight;
        return ((elementTop <= viewportBottom) && (elementBottom >= viewportTop));

    };


    $.fn.isBelowViewport = function () {
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var elementHeight = $(this).outerHeight();
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + elementHeight;
        return ((elementTop > viewportTop) && (elementBottom > viewportBottom));

    };


    $.fn.isFullyInViewport = function () {
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var elementHeight = $(this).outerHeight();
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + elementHeight;
        return ((elementTop <= viewportTop) && (elementBottom > viewportBottom));

    };


    $.fn.startedLeavingViewport = function () {
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var elementHeight = $(this).outerHeight();
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + elementHeight;
        return ((elementTop <= viewportTop) && (elementBottom <= viewportBottom));
    };


    longreadSectionFixBackground();
    $(window).on('scroll resize', function () {
        longreadSectionFixBackground();
    });


    function longreadSectionFixBackground() {
        var windowHeight = $(window).height();


        $('.longread-section').each(function () {


            if ($(this).outerHeight() > windowHeight) {
                $(this).find('.longread-section__bg').addClass('__longread-has-content');
            }

            if (($(this).outerHeight() > windowHeight) && ($(this).isBelowViewport())) {
                $(this).find('.longread-section__bg').removeClass('__sticky-centered __sticky-bottom').addClass('__sticky-top');
            }

            if (($(this).outerHeight() > windowHeight) && ($(this).isFullyInViewport())) {
                $(this).find('.longread-section__bg').removeClass('__sticky-bottom __sticky-top').addClass('__sticky-centered');
            }

            if (($(this).outerHeight() > windowHeight) && ($(this).startedLeavingViewport())) {
                $(this).find('.longread-section__bg').removeClass('__sticky-top __sticky-centered').addClass('__sticky-bottom');
            }


            if ($(this).find('.longread-section__bg_fixed') && ($(this).isPartiallyInViewport())) {
                $(this).find('.longread-section__bg_fixed').css('z-index', '1');
            } else {
                $(this).find('.longread-section__bg_fixed').css('z-index', 'auto');
            }


        });
    }



});