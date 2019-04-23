$(document).ready(function () {

    /*Регулировка кол-ва товаров в корзине кнопками:*/
    $('.button-quantity-more').click(function () {
        if ($(this).prevAll('.basket-item-quantity').val() < 1000) {
            $(this).prevAll('.basket-item-quantity').val(+$(this).prevAll('.basket-item-quantity').val() + 1);
        }
    });
    $('.button-quantity-less').click(function () {
        if ($(this).nextAll('.basket-item-quantity').val() > 1) {
            if ($(this).nextAll('.basket-item-quantity').val() > 1) $(this).nextAll('.basket-item-quantity').val(+$(this).nextAll('.basket-item-quantity').val() - 1);
        }
    });

    // Отображение формы в зависимости от Юр. лица / Физ. лица
    $('#customer_type_radio_1').on('click', function () {
        $('#formFieldsLegalEntity').fadeOut(200, "linear", function () {
            $('#formFieldsPrivatePerson').fadeIn(500, "linear", function () {
            })
        });
    });
    $('#customer_type_radio_2').on('click', function () {
        $('#formFieldsPrivatePerson').fadeOut(200, "linear", function () {
            $('#formFieldsLegalEntity').fadeIn(500, "linear", function () {
            })
        });
    });

    // Разрешение на обработку данных
    $("#data_processing_agreement").change(function () {
        if ($(this).is(':checked')) {
            $(".button-confirm-order").prop("disabled", false);
        } else {
            $(".button-confirm-order").prop("disabled", true);
        }
    });

});

