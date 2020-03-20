$(document).ready(function () {

    var catalogMenuPopup = $('.js-catalog-menu-popup');
    var mobileTypeCatalogPopupBreakpoint = 700;
    var tabletBreakpoint = 1100;

    /*open catalog-menu-popup*/
    $('.js-open-menu').on('click', function (e) {
        e.preventDefault();
        var dataAttr = $(this).data('catalog-link');

        setCatalogMenuPopupHeight();

        showInnerCatalog(dataAttr);
        $(this).addClass('current');

        $('.catalog-list--popup-menu .catalog-list__item--popup').removeClass('current');
        $('.catalog-list--popup-menu [data-catalog-link="' + dataAttr + '"]').closest('.catalog-list__item--popup').addClass('current');

        catalogMenuPopup.addClass('visible');
        catalogMenuPopup.removeClass('visible--catalog');
        $('body').addClass('show-catalog-menu-popup');
    });


    /*make catalog visible in popup*/
    $('.js-open-catalog-inner-mobile').on('click', function (e) {
        e.preventDefault();
        var windowWidth = $(window).width();
        var dataAttr = $(this).data('catalog-link');

        showInnerCatalog(dataAttr);
        $(this).addClass('current');

        if($(this).hasClass('catalog-list__link--popup')) {
            var thisParent = $(this).closest('.catalog-list__item--popup');
            thisParent.siblings().removeClass('current');
            thisParent.addClass('current');
        }

        if (windowWidth <= mobileTypeCatalogPopupBreakpoint) {
            catalogMenuPopup.toggleClass('visible--catalog');
        }


    });


    $('.js-close-catalog-inner-mobile').on('click', function () {
        catalogMenuPopup.toggleClass('visible--catalog');
    });


    /*open catalog-menu-popup with catalog visible*/
    $('.js-open-menu--catalog-only').on('click', function (e) {
        e.preventDefault();
        var dataAttr = $(this).data('catalog-link');
        setCatalogMenuPopupHeight();
        showInnerCatalog(dataAttr);
        $('.catalog-list--popup-menu .catalog-list__item--popup').removeClass('current');
        $('.catalog-list--popup-menu [data-catalog-link="' + dataAttr + '"]').closest('.catalog-list__item--popup').addClass('current');
        catalogMenuPopup.toggleClass('visible visible--catalog');
        $('body').toggleClass('show-catalog-menu-popup');

    });


    /*close catalog-menu-popup*/
    $('.js-close-catalog-menu-popup').on('click', function () {
        $('.js-open-menu').removeClass('active');
        catalogMenuPopup.removeClass('visible');
        catalogMenuPopup.removeClass('visible--catalog');

        $('.catalog-list--popup-menu .catalog-list__item--popup').removeClass('current');

        $('body').removeClass('show-catalog-menu-popup');
    });


    function showInnerCatalog(dataAttr) {
        $('[data-catalog-link]').removeClass('current');
        catalogMenuPopup.find('[data-catalog-menu]').removeClass('visible');
        catalogMenuPopup.find('[data-catalog-menu="' + dataAttr + '"]').addClass('visible');
    }


    /*popup height on mobile*/
    function setCatalogMenuPopupHeight() {
        var headerHeight = $('.header').outerHeight();
        var windowWidth = $(window).width();
        var heightVal = 'calc(100vh - ' + headerHeight + 'px)';


        if (windowWidth <= tabletBreakpoint) {
            catalogMenuPopup.css({'height': heightVal});
        } else {
            catalogMenuPopup.css({'height': 'auto'});
        }

    }


});