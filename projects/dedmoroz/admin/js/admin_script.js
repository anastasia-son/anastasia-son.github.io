$(document).ready(function () {


    $('.landing-page-edit-form-one-tab').on('click', function () {
        $('.landing-page-edit-form-one-tab.__active').removeClass('__active');

        $(this).addClass('__active');

        var landingPageEditFormOneTabId = $(this).data('tab-id');

        $('.landing-page-edit-form-one-tab-cont.__active').removeClass('__active');

        $('.landing-page-edit-form-one-tab-cont[data-tab-id="' + landingPageEditFormOneTabId + '"]').addClass('__active');


    })
});