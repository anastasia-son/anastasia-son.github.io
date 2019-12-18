$(document).ready(function () {

    var $galleryMainSlider = $('.gallery-main-slider');
    var $galleryNavSlider = $('.gallery-nav-slider');
    var $galleryTextSlider = $('.gallery-text-slider');


    $galleryMainSlider.slick({
        mobileFirst: true,
        variableWidth: true,
        slidesToShow: 1,
        arrows: true,
        dots: true,

        appendArrows: $('.js-arrows--gallery-slider'),
        prevArrow: '<button class="slick-prev">Назад <svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg></button>',

        nextArrow: '<button class="slick-next">Вперед <svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg></button>',

        appendDots: $('.js-dots--gallery-slider'),
        slidesToScroll: 1,

        asNavFor: $('.gallery-nav-slider, .gallery-text-slider'),

        responsive: [
            {
                breakpoint: 575,
                settings: {
                    variableWidth: false,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 767,
                settings: {
                  arrows: false,
                    dots: false,
                    variableWidth: false,
                    slidesToScroll: 1,
                }
            },



        ]


    });

    $galleryNavSlider.slick({
        mobileFirst: true,
        slidesToShow: 1,
        variableWidth: true,

        slidesToScroll: 1,
        asNavFor: $('.gallery-main-slider, .gallery-text-slider'),
        dots: false,
        arrows: false,

        focusOnSelect: true,


        responsive: [
            {
                breakpoint: 575,
                settings: {
                    variableWidth: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,

                }
            },
        ]

    });


    $galleryTextSlider.slick({
        mobileFirst: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,

        asNavFor: $('.gallery-main-slider, .gallery-nav-slider'),


        responsive: [
            {
                breakpoint: 767,
                settings: {

                    arrows: true,
                    dots: true,


                    appendArrows: $('.js-arrows--gallery-text-slider'),
                    prevArrow: '<button class="slick-prev">Назад <svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg></button>',

                    nextArrow: '<button class="slick-next">Вперед <svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg></button>',


                    appendDots: $('.js-dots--gallery-text-slider'),

                }
            },

        ]

    });


    $galleryMainSlider.on('afterChange', function (event, slick, currentSlide) {
        counterSlick(event, slick, currentSlide, this);
    });

    $galleryTextSlider.on('afterChange', function (event, slick, currentSlide) {
        counterSlick(event, slick, currentSlide, this);
    });

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
            /*author_attr: "> .test"*/
        });

    }


});

