$(document).ready(function () {


    $('.news-gallery').magnificPopup({
        delegate: '.news-gallery__link',

        type: 'image',

        mainClass: 'mfp-img-mobile my-mfp-zoom-in',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },

    });




});