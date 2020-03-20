$(document).ready(function () {

    var owl = false;


    if (window.matchMedia("(max-width: 575px)").matches) {
          initOwl();
    }

    $(window).on('resize', function () {
        if (window.matchMedia("(max-width: 575px)").matches) {
            initOwl();
        } else {
            destroyOwl();
        }
    });




    function initOwl() {
        var $owlNode = $('.main-news-list');

        if (!!owl) {
            return true;
        }

        $owlNode.owlCarousel({
            margin: 28,
            autoWidth: true,
            items: 1,
            callbacks: true,
            dots: true,
            dotsContainer: $('.js-dots--news-slider'),
            nav: true,
            navContainer: $('.js-arrows--news-slider'),

            navText: ['Назад<svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg>', 'Дальше<svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>'],
        });

        /*не работет TODO отладить*/

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