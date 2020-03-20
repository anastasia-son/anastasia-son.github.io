$(document).ready(function () {

    var sync1 = $("#galleryMainSlider");
    var sync2 = $("#galleryNavSlider");
    var sync3 = $("#galleryTextSlider");


    var slidesPerPage = 5; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        dots: true,
        autoWidth: true,
        dotsContainer: $('.js-dots--gallery-slider'),
        navContainer: $('.js-arrows--gallery-slider'),
        autoplay: false,
        loop: false,
        responsiveRefreshRate: 200,


        navText: ['Назад<svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg>', 'Дальше<svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>'],


        responsive: {
            576: {
                autoWidth: false,
            }
        },
    }).on('changed.owl.carousel', syncPosition);



    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            autoWidth: false,
            margin: 21,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,


            responsive: {
                576: {

                }
            },

        }).on('changed.owl.carousel', syncPosition2);


    sync3
        .on('initialized.owl.carousel', function () {
        sync3.find(".owl-item").eq(0).addClass("current");
    })
        .owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            slideSpeed: 1000,
            responsiveRefreshRate: 200,


            responsive: {
                576: {

                }
            },

        }).on('changed.owl.carousel', syncPosition);






    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        var current = el.item.index;

        //if you disable loop you have to comment this block
/*
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
*/
        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }


        sync3
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync3.find('.owl-item.active').length - 1;
        var start = sync3.find('.owl-item.active').first().index();
        var end = sync3.find('.owl-item.active').last().index();

        if (current > end) {
            sync3.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync3.data('owl.carousel').to(current - onscreen, 100, true);
        }


    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
            sync3.data('owl.carousel').to(number, 100, true);
        }
    }






    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
        sync3.data('owl.carousel').to(number, 300, true);
    });



    sync1.on('translated.owl.carousel', counter); // change numbers after slide changing




    if (($('.lc-elem').length)) {
        lc_lightbox('.lc-elem', {
            wrap_class: 'lcl_fade_oc normsport',
            gallery: true,
            thumbs_w: 110,
            thumbs_h: 85,
            skin: 'minimal',
            radius: 0,
            padding: 0,
            border_w: 0,
            show_title: false,
            cmd_position: 'outer',
            nav_btn_pos: 'middle',
            slideshow_time: 3000,
            data_position: 'over',



        });

    }


});

