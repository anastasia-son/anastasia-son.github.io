/*Скрипт только для галереи фото:*/

$(document).ready(function () {
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
            slideshow_time: 3000,
        });
    }
});