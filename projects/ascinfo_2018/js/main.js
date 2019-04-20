$(document).ready(function () {

    /*Форма входа на главной*/
    $('#showLoginForm').on('click', function (e) {
        e.preventDefault();

        if ($('.banner-form').hasClass('__invisible')) {
            $('.banner-form').removeClass('__invisible').addClass('__visible');
            setTimeout(function () {
                $('.banner-form input[type="email"]').focus();
            }, 200);
        }
        else if ($('.banner-form').hasClass('__visible')) {
            $('.banner-form').removeClass('__visible').addClass('__invisible');
        }

        if (window.matchMedia('(max-width: 700px)').matches) {
            $('html, body').animate({
                scrollTop: ($(".banner-form").offset().top - $('.header').height())
            }, 600);
            setTimeout(function () {
                $('.banner-form input[type="email"]').focus();
            }, 800);
        }
    });

    /*Мобильное меню*/
    $('.mobile-menu-btn').click(function () {
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('open');
    });


    /*Верхний слайдер на главной*/
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    $('.scroll-up-btn').click(function () {
        $('html, body').animate({scrollTop: 0}, 900);
        return false;
    });

    /*Пустой select*/
    // $('select').change(function () {
    //     if ($(this).val() == "0") $(this).addClass("empty");
    //     else $(this).removeClass("empty")
    // });


    $('.form select').styler();

});

