$(document).ready(function () {


    $(".js-tab-link").click(function () {
        if (!$(this).hasClass("_sel")) {
            var $this = $(this);
            var contentId = $this.data("tab-code");
            mainAboutTabs(contentId);
        }
        return false;
    });


});



function mainAboutTabs(code) {
    var link = $('.js-tab-link[data-tab-code="' + code + '"]'),
        content = $('.js-tab-content[data-code="' + code + '"]');
    link.parents(".tabs").find($(".js-tab-link")).removeClass("_sel");
    link.addClass("_sel");
    link.parents(".tabs").find($(".js-tab-content")).removeClass("_sel");
    content.addClass("_sel");
    

}