$(document).ready(function () {

    var $aboutSlider = $('.about-slider');


    $aboutSlider.owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        dotsContainer: $('.js-dots--about-slider'),
        navContainer: $('.js-arrows--about-slider'),
        navText: ['Назад<svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg>', 'Дальше<svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>'],

        callbacks: true,



        responsive: {
            768: {

                navText: ['Назад<svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg>', '<span class="default-slider-header__right-link btn-arrow btn-arrow--green"><span class="btn-arrow__text">Дальше<svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg></span></span>'],

            }
        }

    });

    $aboutSlider.on('translated.owl.carousel', counter); // change numbers after slide changing



});