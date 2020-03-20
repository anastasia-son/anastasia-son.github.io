$(document).ready(function () {

    var owl = false;

    if (window.matchMedia("(min-width: 768px)").matches) {
        initOwl();
    }

    $(window).on('resize', function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
            initOwl();
        } else {
            destroyOwl();
        }
    });


    function initOwl() {
        var $owlNode = $('.articles-slider--desktop');

        if (!!owl) {
            return true;
        }

        $owlNode.owlCarousel({
            items: 1,
            dots: true,
            nav: true,

            dotsContainer: $('.js-dots--articles-slider--desktop'),


            navContainer: $('.articles-slider--desktop .articles-slider__item').length > 1 ? $('.js-arrows--articles-slider--desktop') : false,

            navText: ['Назад<svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg>', 'Дальше<svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>'],

            callbacks: true,

        });


        $owlNode.on('translated.owl.carousel', counter); // change numbers after slide changing


        owl = $owlNode.data('owl.carousel');

        return true;
    }


    function destroyOwl() {
        if (!!owl) {
            owl.destroy();
            owl = false;
        }
    }


});