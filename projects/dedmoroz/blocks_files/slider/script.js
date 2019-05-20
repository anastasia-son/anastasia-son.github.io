$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        speed: 2000,
        swipeToSlide: true,

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
});
