$(document).ready(function () {

    /*Моб. меню:*/
    $('.mobile-menu-button-overlay').click(function () {
        $(this).toggleClass('active');
        $('.header-menu').toggleClass('open');
        $('.dark-overlay').fadeToggle("fast");
    });
    
    /*slick slider*/
    $('.our-clients-slider').show();
    $('.our-clients-slider').slick({
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 3500,
        easing: 'linear',
        slidesToShow: 7,
        slidesToScroll: 3,
        pauseOnHover:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    });

});

