$(window).load(function () {

    var $facesSlider = $('.faces-slider');


    $facesSlider.slick({
        mobileFirst: true,

        variableWidth: true,
        dots: true,
        arrows: true,

        appendDots: $('.js-dots--faces-slider'),
        appendArrows: $('.js-arrows--faces-slider'),

        prevArrow: '<button class="slick-prev">Назад <svg aria-hidden="true"><use xlink:href="#arrow-left"></use></svg></button>',

        nextArrow: '<button class="slick-next">Вперед <svg aria-hidden="true"><use xlink:href="#arrow-right"></use></svg></button>',



        responsive: [
            {
                breakpoint: 767,
                settings: {
                    variableWidth: false,
                }
            },
        ]






    });

    $facesSlider.on('afterChange', function (event, slick, currentSlide) {
        counterSlick(event, slick, currentSlide, this);
    });

});