$(document).ready(function () {

    var $eventsSlider = $('.events-slider');


    $eventsSlider.owlCarousel({
        items: 3,
        autoWidth: true,
        dots: true,
        nav: true,
        margin: 28,
        dotsContainer: $('.js-dots--events-slider'),
        navContainer: $('.js-arrows--events-slider'),

        navText: ['Назад<svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg>', 'Дальше<svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>'],

        callbacks: true,


        responsive: {
            992: {
                autoWidth: false,
                slideBy: 3,

            }
        }


    });

    $eventsSlider.on('translated.owl.carousel', counter); // change numbers after slide changing
    

});