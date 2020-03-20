$(document).ready(function () {
    $('.js-show-filters').on('click', function (e) {
        e.preventDefault();
        $('.js-filters').toggleClass('visible');
        $('body').toggleClass('show-filters');
    });


    $('.js-filters--left-close').on('click', function () {
        $('.js-filters').toggleClass('visible');
        $('body').removeClass('show-filters');
    });
});