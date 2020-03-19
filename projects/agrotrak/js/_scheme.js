$(document).ready(function () {


    var $schemeList = $('.js-scheme-mCustomScrollbar');
    var schemeListHasScrollBar = false;

    if (window.matchMedia("(min-width: 992px)").matches) {
        initSchemeListScrollbar();
        schemeListHasScrollBar = true;
    }


    $(window).on('resize', function () {
        if (window.matchMedia("(max-width: 991px)").matches) {
            $schemeList.mCustomScrollbar("destroy");
            schemeListHasScrollBar = false;
        } else {
            if (schemeListHasScrollBar === false) {
                initSchemeListScrollbar();
            } else return true;
        }
    });


    function initSchemeListScrollbar() {
        $schemeList.mCustomScrollbar({
            theme: "dark",
        });
    }


    /*Filter accordion*/

    /*Filter accordion: open list*/
    $('.filter-accordion__input').click(function (e) {

        var accordion = $(this).closest('.filter-accordion').find('.accordion');
        var $this = $(this);
        if (accordion.hasClass('__active')) {
            accordion.removeClass('__active');
            accordion.slideUp(400);
            $this.removeClass('__active');


            $this.closest('.filter-accordion').find('.accordion__list').removeClass('__show');
            $this.closest('.filter-accordion').find('.accordion__list').slideUp(350);
            $this.closest('.filter-accordion').find('.accordion__link').removeClass('__opened');

        } else {
            accordion.addClass('__active');
            accordion.slideDown(400);
            $this.addClass('__active');
        }

    });


    /*Filter accordion: toggle categories*/
    $('.accordion__link').click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next('.accordion__list').hasClass('__show')) {
            $this.next('.accordion__list').removeClass('__show');
            $this.next('.accordion__list').slideUp(350);
            $this.next().find('.accordion__link').removeClass('__opened');
        } else {
            $this.parent().parent().find('li .accordion__list').removeClass('__show');
            $this.parent().parent().find('li .accordion__list').slideUp(350);

            $this.parent().parent().find('li .accordion__list').prev('.accordion__link').removeClass('__opened');

            $this.next('.accordion__list').toggleClass('__show');
            $this.next('.accordion__list').slideToggle(350);
        }


        if ($this.hasClass('__opened')) {
            $this.removeClass('__opened');
        } else {
            $this.addClass('__opened');
        }

    });


    /*Filter accordion: select item*/
    $('.accordion__elem').click(function () {

        var selectedText = $(this).html();
        var accordion = $(this).closest('.filter-accordion').find('.accordion');

        $(this).closest('.filter-accordion').find('.filter-accordion__input').html(selectedText).addClass('__specified');

        accordion.removeClass('__active');
        accordion.slideUp(400);
    })


    /*END Filter accordion*/


});