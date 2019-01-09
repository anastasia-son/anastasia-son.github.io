$(document).ready(function () {
    /*начало - положение плавающих кнопок*/
    var main_section_top_position = "";

    main_section_top_position = $(".main-section").offset().top;
    $(window).on("scroll", function () {
        main_section_top_position = $(".main-section").offset().top;
        calcButtonsPosition()
    });


    $(window).on("resize", function () {
        main_section_top_position = $(".main-section").offset().top;
        calcButtonsPosition();
    });
    /*конец - положение плавающих кнопок*/


    /* начало - Выпадающее меню:*/
    scalableMenu();
    $(window).on('resize', function () {
        scalableMenu();
    });

    $('.extra-items-button').click(function () {
        event.stopPropagation();
        $(this).parent('.main-menu').toggleClass('open')
    });


    // if (window.matchMedia('(min-width: 768px)').matches) {

    $('.has-submenu').on('mouseenter', function () {
        var idSubMenu = "#submenu_" + $(this).data("show-submenu");
        $(idSubMenu).addClass('open');
        $(this).addClass('hovered');
    });

    $('.has-submenu').on('mouseleave', function () {
        var idSubMenu = "#submenu_" + $(this).data("show-submenu");
        var currentMenuItem = this;

        $(idSubMenu).hover(
            function () {
                $(this).addClass('open');
                $(currentMenuItem).addClass('hovered')
            },
            function () {
                $(this).removeClass('open');
                $(currentMenuItem).removeClass('hovered')
            }
        );

        $(idSubMenu).removeClass('open');
        $(this).removeClass('hovered')
    });
    // }

    /* конец - Выпадающее меню*/


    /*начало - раскрытие мобильного меню:*/
    $('.mobile-menu-btn').click(function () {
        $(this).toggleClass('active');
        $('#main_menu').toggleClass('mobile-show');
    });
    /*конец - раскрытие мобильного меню*/


    /*начало - раскрытие мобильного подменю*/
    $('.main-menu-link.has-submenu').click(function (event) {

        if (window.matchMedia('(max-width: 767px)').matches) {
            /*отключаем кликабельность ссылки на экране меньше 768:*/
            event.preventDefault();
            $(this).next('ul').slideToggle('medium');
            $(this).find('.fa').toggleClass('fa-angle-up fa-angle-down');
        }

        // if (window.matchMedia('(max-width: 767px)').matches) {
        //     $(this).next('ul').slideToggle('medium');
        // }
    });

    /*конец - раскрытие мобильного подменю*/


    /*slick slider:*/
    $('.slider').show();
    $('.slider').slick({
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 3100,
            arrows: true,
            dots: true,
            speed: 800
        }
    );

//Слайдер на детальной странице автомобиля
    $('.slider-car-detailed').show();
    $('.slider-car-detailed').slick({
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 3100,
            arrows: true,
            dots: false,
            speed: 800,
            fade: true
        }
    );
    $('.slider-car-detailed-nav').show();
    $('.slider-car-detailed-nav').slick({
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-car-detailed',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
    });

    /*Lightbox на слайдере на детальной странице автомобиля:*/
    if (($('.lc-elem').length)) {
        lc_lightbox('.lc-elem', {
            wrap_class: 'lcl_fade_oc',
            gallery: true,
            thumbs_w: 110,
            thumbs_h: 85,
            skin: 'minimal',
            radius: 0,
            padding: 0,
            border_w: 0,
            show_title: false,
            cmd_position: 'outer',
            nav_btn_pos: 'middle',
        });
    }
    ;

    /*slick slider - конец*/


    /*Положение кнопок упраавления слайдером (из-за мобильной версии:*/
    if (window.matchMedia('(max-width: 767px)').matches) {
        setPositionOfSlickControls();
    }
    $(window).resize(function () {
        setPositionOfSlickControls();
    });
    /* Конец - Положение кнопок упраавления слайдером (из-за мобильной версии:*/


    // Начало - подменю в боковом меню
    $(".submenu li.unfolding > a .fa").on('click', function (event) {
        event.preventDefault();
        $(this).parent('a').toggleClass('unfolded');
        $(this).parent('a').next('ul').slideToggle();
        $(this).toggleClass('fa-angle-up fa-angle-down');
    });
    // Конец - подменю в боковом меню


    // Начало -  открытие/закрытие списка классов авто на главной
    $('.cars-mobile-title').click(function () {
        $('.cars-container').slideToggle(400);

        $(this).find('.fa').toggleClass('fa-angle-up fa-angle-down');
    });
    // Конец -  открытие/закрытие списка классов авто на главной


    // Начало - всплывающая форма
    $('.open-popup-form').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    // Конец- всплывающая форма


    // Начало -  Formstyler
    $('select').styler();
    // Конец -  Formstyler


    // Начало - скрыть/показать фильтр в каталоге
    if (window.matchMedia('(max-width: 476px)').matches) {
        $('.class-filter .sub-main-title').click(function () {
            $(this).next('.class-filter-form').slideToggle();
            $(this).find('.fa').toggleClass('fa-angle-up fa-angle-down');
        });
    }
    // Конец - скрыть/показать фильтр в каталоге

    /*Начало - поле выбора даты*/

    if ($('.datepicker').length) {
        $(".datepicker").datepicker({
            minDate: '+1'
        });
    }

    /*Конец - поле выбора даты*/


    /*Начало - поле выбора времени*/


    if ($('.timepicker').length) {
        $('.timepicker').wickedpicker({
            now: "10:00",
            twentyFour: true,
            title: 'Выберите время',
            minutesInterval: 10,
            clearable: false
        });
    }
    /*Конец - поле выбора времени*/


    // Сворачивание текста с сохранением обекания, но удаление тегов:
    // проверка для избежания ошибки в консоли на страницах, на которых плагин не испоьзуется:
    if ($('.v-ellipsis').length) {
        $().vEllipsis({
            // element identifier
            'element': '.v-ellipsis',
            'lines': 7,
            'expandLink': true,
            'collapseLink': true,
            'animationTime': '300',
            // 'onlyFullWords': true,
            'char': '...',
        });

    }

    if ($('.v-ellipsis-no-expand-btn').length) {

        if (window.matchMedia('(max-width: 560px)').matches) {
            $().vEllipsis({
                'element': '.v-ellipsis-no-expand-btn',
                'lines': 2,
                'expandLink': false,
                'collapseLink': false,
                'onlyFullWords': true,
                'char': '...',
            });
        }

        if (window.matchMedia('(min-width: 561px)').matches) {
            $().vEllipsis({
                'element': '.v-ellipsis-no-expand-btn',
                'lines': 4,
                'expandLink': false,
                'collapseLink': false,
                'onlyFullWords': true,
                'char': '...',
            });
        }

    }
//Сворачивание текста с сохранением форматирования на детальной авто:
    if ($('.js-description_readmore').length) {
        $(function () {
            $('.js-description_readmore').moreLines({
                linecount: 8.4,
                baseclass: 'b-description',
                basejsclass: 'js-description',
                classspecific: '_readmore',
                buttontxtmore: "<span>Показать еще</span>",
                buttontxtless: "<span>Свернуть</span>",
                animationspeed: 250
            });
        });
    }


    /*Валидация форм:*/

    if ($('[data-validation]').length) {
        $.validate({
            // modules : 'location, date, security, file',
            borderColorOnError: '#dd5656',
            validateOnBlur: true,
            onModulesLoaded: function () {
            }
        });
    }

    /*Валидация форм - конец*/

    /*Маскирование форм:*/
    $('input[type="tel"]').mask("+7 (999) 999-99-99");


    function calcButtonsPosition() {
        var fixed_right_pos = $('.main-section').offset().left - 55;

        if (window.matchMedia('(min-width: 1155px)').matches) {

            if ($("html").scrollTop() >= main_section_top_position) {
                $('.interaction-buttons').addClass('fixed');
                $('.interaction-buttons.fixed').css('right', fixed_right_pos);

            } else {
                $('.interaction-buttons').removeClass('fixed');
                $('.interaction-buttons').removeAttr('style');
            }
        } else {
            $('.interaction-buttons').removeClass('fixed');
            $('.interaction-buttons').removeAttr('style');
        }
    }


    function scalableMenu() {
        $('#main_menu').removeClass('main-menu-exceeded');

        if (window.matchMedia('(min-width: 768px)').matches) {

            var offsetHeightOfMainMenu = document.getElementById('main_menu').offsetHeight;

            var scrollHeightOfMainMenu = document.getElementById('main_menu').scrollHeight;

            if ((offsetHeightOfMainMenu + 3) < scrollHeightOfMainMenu) {
                $('#main_menu').addClass('main-menu-exceeded');
            } else if ((offsetHeightOfMainMenu + 3) > scrollHeightOfMainMenu) {
                $('#main_menu').removeClass('main-menu-exceeded');
            }
            else {
                $('#main_menu').removeClass('main-menu-exceeded');
            }

        }
    }

    function setPositionOfSlickControls() {
        var screenWidth = $('.main-slider').width();
        var proportionOfImg = $('.slide-img').width() / $('.slide-img').height();
        var slickDotsPosition = screenWidth / proportionOfImg;
        var slickArrowsPosition = (screenWidth / proportionOfImg) / 1.9;

        $('.main-slider .slick-dots').css("top", slickDotsPosition + "px");
        $('.main-slider .slick-prev, .main-slider .slick-next').css("top", slickArrowsPosition + "px");
    }
});

