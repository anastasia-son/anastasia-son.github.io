

    setTimeout(function () {
        var elem = document.createElement('script');
        elem.type = 'text/javascript';
        elem.src = '//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru-RU&onload=getYaMap';
        document.getElementsByTagName('body')[0].appendChild(elem);
    }, 2500);


function getYaMap() {


    var map = new ymaps.Map('map', {
        center: [57.665300, 41.056418],
        zoom: 12,
        controls: []
    });


    placemark = new ymaps.Placemark([57.665300, 41.056418],
        {},
        {
            iconLayout: 'default#image',
            iconImageSize: [0, 0],
        }
    );

    map.geoObjects.add(placemark);

    map.container.fitToViewport();
}
