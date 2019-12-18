$(document).ready(function () {

    $(".js-accord").on("click", function () {
        var accordContent = $(this).siblings(".js-accord__content"),
            scrollTop = $(this).offset().top;

        if (!$(this).hasClass("_active")) {
            $(this).addClass("_active");
            accordContent.slideDown();
        } else {
            $(this).removeClass("_active");
            accordContent.slideUp();
        }
    })
});