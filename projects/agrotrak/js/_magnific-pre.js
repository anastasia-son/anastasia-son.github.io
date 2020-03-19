
$.extend(true, $.magnificPopup.defaults, {
    tClose: 'Закрыть (Esc)', // Alt text on close button
    tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
    gallery: {
        tPrev: 'Назад (Клавиша влево)', // Alt text on left arrow
        tNext: 'Дальше (Клавиша вправо)', // Alt text on right arrow
        tCounter: '%curr% из %total%' // Markup for "1 of 7" counter
    },
    image: {
        tError: '<a href="%url%">Изображение</a> не было загружено.' // Error message when image could not be loaded
    },
    ajax: {
        tError: '<a href="%url%">Содержимое</a> не было загружено.' // Error message when ajax request failed
    },
    iframe: {
        tError: '<a href="%url%">Контент</a> не удалось загрузить.'
    },
});