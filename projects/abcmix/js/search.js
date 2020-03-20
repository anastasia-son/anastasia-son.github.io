$(document).ready(function () {
    $('.js-show-search').on('click', function (e) {
        e.preventDefault();
        $('.js-search-line').toggleClass('visible');
        $('body').toggleClass('show-search');
    });


    $('.js-close-search').on('click', function () {
        $('.js-search-line').toggleClass('visible');
        $('body').removeClass('show-search');
    });

});