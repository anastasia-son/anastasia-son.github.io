$(document).ready(function () {

    var $singleImageSlider = $('.single-image-slider');


    $singleImageSlider.owlCarousel({
        items: 1,
        autoWidth: true,
        dots: true,
        nav: true,
        dotsContainer: $('.js-dots--single-image-slider'),
        navContainer: $('.js-arrows--single-image-slider'),
        navText: ['Назад<svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg>', 'Дальше<svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>'],



        callbacks: true,



        responsive: {
            576: {
                autoWidth: false,
            }
        }

    });

    $singleImageSlider.on('translated.owl.carousel', counter); // change numbers after slide changing



});