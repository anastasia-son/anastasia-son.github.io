$(document).ready(function () {

    $('.js-magnific-link').magnificPopup({
        type: 'inline',
        preloader: false,
        // fixedBgPos: true,
        fixedContentPos: true,
    });

    $('.btn-close').on("click", function () {
        $.magnificPopup.close();
    });
});