$(document).ready(function () {

    $('.js-toggle-catalog').on('click', function () {

        $(this).find('.catalog-plate').toggleClass('__active');
        $(this).closest('.catalog').toggleClass('__opened');
        $(this).nextAll('.catalog__body').toggleClass('__opened');



    });



    $(document).on('click', function (e) {
        if ($(e.target).closest(".catalog__body").length === 0 && $(e.target).closest('.js-toggle-catalog').length === 0)  {
            $('.catalog-plate').removeClass('__active');
            $('.catalog').removeClass('__opened');
            $('.catalog__body').removeClass('__opened');
        }
    });



    $('.js-catalog-mCustomScrollbar').mCustomScrollbar({
        theme: "dark",
    });



    /*Filter accordion in catalog: toggle categories*/
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



});