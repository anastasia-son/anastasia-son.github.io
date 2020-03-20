$(document).ready(function () {

    var symbolsList = $('.symbols');
    var setSymbolsBtn = $('.js-select-symbols');

    setSymbolsBtn.on('click', function () {
        $.magnificPopup.close();
    });

    smthIsChecked();

    $('.symbols__item input').change(function () {
        smthIsChecked();
    });


    function smthIsChecked() {
        if(symbolsList.find('.symbols__item input:checked').length > 0) {
            setSymbolsBtn.removeAttr('disabled');
            return true;

        } else {
            setSymbolsBtn.attr('disabled', 'true');
            return false;

        }

    }

});