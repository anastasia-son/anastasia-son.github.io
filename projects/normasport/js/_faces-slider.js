$(document).ready(function () {

    var $facesSlider = $('.faces-slider');


    $facesSlider.owlCarousel({
        items: 1,
        autoWidth: true,
        dots: true,
        nav: true,
        margin: 28,
        dotsContainer: $('.js-dots--faces-slider'),
        navContainer: $('.js-arrows--faces-slider'),

        navText: ['Назад<svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg>', 'Дальше<svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>'],

        callbacks: true,


        responsive: {
            767: {
                autoWidth: false,
            }
        }


    });

    $facesSlider.on('translated.owl.carousel', counter); // change numbers after slide changing
    

});