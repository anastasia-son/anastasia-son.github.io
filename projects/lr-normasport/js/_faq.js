$(document).ready(function () {


    $('.js-faq-question').on('click', function () {

        $(this).find('.js-faq-arrow').toggleClass('__open');
        $(this).closest('.js-faq-item').find('.js-faq-answer').slideToggle(400);
    })




});