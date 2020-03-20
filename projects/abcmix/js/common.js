$(document).ready(function () {
    /*fixed footer*/
    setFooter();

    $(window).on('resize', function () {
        setFooter();
    })

    function setFooter() {
        var footerHeight = $('.sticky-footer__footer').outerHeight();

        $('.sticky-footer__body').css({
            'margin-bottom': footerHeight + 'px',
        });
    }

    /*END fixed footer*/


    /*sticky header*/


    $('.header__bottom').sticky({topSpacing:0});

    /*
        $(window).scroll(function (e) {
            var headerSticky = $('.header-sticky');
            var headerPosition = $(document).scrollTop();


            if (headerPosition > headerHeight) {
                headerSticky.addClass('fixed');

                if (headerPosition >= (headerHeight * 2.5)) {
                    headerSticky.addClass('sticky');
                    headerSticky.addClass('sticky-transition');
                } else {
                    headerSticky.removeClass('sticky');
                }
            } else {
                headerSticky.removeClass('fixed');
                headerSticky.removeClass('sticky-transition');
            }

        });

        */
    //
    // function stickyHeader() {
    //
    //     var stickyHeader = $('.header__bottom');
    //     var stickyHeaderParent = $('.header-sticky');
    //     var headerStickyHeight = stickyHeader.outerHeight();
    //
    //     var windowTop = $(window).scrollTop();
    //     var headerStickyPosition = stickyHeaderParent.offset().top;
    //
    //
    //     console.log(windowTop);
    //     console.log(headerStickyPosition);
    //
    //     if (windowTop >= headerStickyPosition) {
    //         stickyHeader.addClass('fixed');
    //         // $('.header-sticky').css('padding-top', headerStickyHeight + 'px');
    //     } else {
    //         // stickyHeader.removeClass('fixed');
    //         // $('body').css('padding', 0);
    //     }
    // }


    // stickyHeader();
    // $(window).scroll(function () {
    //     stickyHeader();
    // });


    /*END sticky header*/


    /*scroll to top btn*/
    $('.btn-scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    /*END scroll to top btn*/


    /*select2 style form selects*/
    $('.js-select2').select2({
        language: "ru",
        dropdownParent: $('.sticky-footer__body'),
    });

});