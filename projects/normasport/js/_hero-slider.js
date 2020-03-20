$(document).ready(function () {

    var $heroSlider = $('.hero-slider');


    $heroSlider.owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        dotsContainer: $('.js-dots--hero-slider'),
        callbacks: true,
    });

    $heroSlider.on('translated.owl.carousel', counter); // change numbers after slide changing




});