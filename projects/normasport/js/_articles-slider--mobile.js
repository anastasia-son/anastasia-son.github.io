$(document).ready(function () {

    var owl = false;


    if (window.matchMedia("(max-width: 767px)").matches) {
        initOwl();
    }

    $(window).on('resize', function () {
        if (window.matchMedia("(max-width: 767px)").matches) {
            initOwl();
        } else {
            destroyOwl();
        }
    });




    function initOwl() {
        var $owlNode = $('.articles-slider--mobile');

        if (!!owl) {
            return true;
        }

        $owlNode.owlCarousel({
            autoWidth: true,
            items: 1,
            margin: 28,
            dots: true,
            nav: true,

            dotsContainer: $('.js-dots--articles-slider--mobile'),
            navContainer: $('.js-arrows--articles-slider--mobile'),

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