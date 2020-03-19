$(document).ready(function () {

    var showSingleSliderBreakpoint = 768;
    var sectionRollMobileViewBreakpoint = 991;

    var detailSliderNav = $('.detail-slider-nav');
    var detailSliderView;

    var similarItemsSlider = $('.js-similar-items-slider');
    var alsoBuySlider = $('.js-also-buy-slider');



    var detailSliderNavSlick = {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.detail-slider-view',
        dots: false,
        arrows: true,
        focusOnSelect: true,

        prevArrow: '<button type="button" class="btn-chevron-arrow slick-prev slick-arrow">\n' +
        '\t\t\t\t\t\t\tПредыдущий\n' +
        '\t\t\t\t\t\t\t<span class="btn__text">\n' +
        '\t\t\t\t\t\t\t\t<svg aria-hidden="true">\n' +
        '\t\t\t\t\t\t\t\t\t<use xlink:href="#ic-chevron-up"></use>\n' +
        '\t\t\t\t\t\t\t\t</svg>\n' +
        '\t\t\t\t\t\t\t</span>\n' +
        '\t\t\t\t\t\t</button>',

        nextArrow: '<button type="button" class="btn-chevron-arrow slick-next slick-arrow">\n' +
        '\t\t\t\t\t\t\tСледующий\n' +
        '\t\t\t\t\t\t\t<span class="btn__text">\n' +
        '\t\t\t\t\t\t\t\t<svg aria-hidden="true">\n' +
        '\t\t\t\t\t\t\t\t\t<use xlink:href="#ic-chevron-down"></use>\n' +
        '\t\t\t\t\t\t\t\t</svg>\n' +
        '\t\t\t\t\t\t\t</span>\n' +
        '\t\t\t\t\t\t</button>',

        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 6,
            }
        },
            {
                breakpoint: showSingleSliderBreakpoint,
                settings: "unslick",
            },
        ]
    };


    detailSliderNav.slick(detailSliderNavSlick);


    detailSliderView = $('.detail-slider-view').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.detail-slider-nav',


        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
            }
        },
        ]

    });

    $('.js-detail-gallery').magnificPopup({
        delegate: '.js-gallery-mfp',
        type: 'image',
        mainClass: 'mfp-img-mobile my-mfp-zoom-in',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });




    alsoBuySlider.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: $('#alsoBuySliderArrows .slider-arrow-top--prev'),
        nextArrow: $('#alsoBuySliderArrows .slider-arrow-top--next'),

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    alsoBuySlider.on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });

    similarItemsSlider.addClass('__loaded');

    similarItemsSlider.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: $('#similarItemsSliderArrows .slider-arrow-top--prev'),
        nextArrow: $('#similarItemsSliderArrows .slider-arrow-top--next'),

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });

    similarItemsSlider.on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });







    $('.section-roll__tab').on('click', function () {

        var descContentInThisSectionRoll = $(this).closest('.section-roll').find('.desc-content');
        $(this).closest('.section-roll').find('.section-roll__content').slideToggle(500);
        $(this).toggleClass('__active');
        if( $(this).closest('.section-roll').find(similarItemsSlider) && $(this).hasClass('__active')) {
            similarItemsSlider.slick('setPosition');
        }


        if( $(this).closest('.section-roll').find(alsoBuySlider) && $(this).hasClass('__active')) {
            alsoBuySlider.slick('setPosition');
        }



        if ( descContentInThisSectionRoll.length !== 0) {

            var dataAttributeOfCurrentDescContent =  descContentInThisSectionRoll.data('desc-content');

            $('.desc-tabs__tab').removeClass('__active');
            $('[data-desc-tab="' + dataAttributeOfCurrentDescContent + '"]').addClass('__active');

        }


    });


    $('.desc-tabs__tab').on('click', function () {
        var dataDescTab = $(this).data('desc-tab');
        var allDescContent = $('.desc-content');
        var respectiveDescContent =   $('[data-desc-content="' + dataDescTab + '"]');

        $('.desc-tabs__tab').removeClass('__active');
        $(this).addClass('__active');

        $('.desc-content').fadeOut(0);
        respectiveDescContent.fadeIn(900);

        allDescContent.closest('.section-roll').find('.section-roll__tab').removeClass('__active');
        respectiveDescContent.closest('.section-roll').find('.section-roll__tab').addClass('__active');

    });


    $(window).on('resize', function () {
        var width = $(window).width();

        if (width > sectionRollMobileViewBreakpoint) {
            $('.desc-content').removeAttr('style');
        }





    });







});