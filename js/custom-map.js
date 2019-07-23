$(function () {
    function initMap(lat, lad, head, conContent) {
        var location = new google.maps.LatLng(lat, lad);
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var markerImage = './images/marker.png';
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            icon: markerImage
        });
        var contentString = `<div class="info-window">
                                <h3>${head}</h3>
                                <div class="info-content">
                                    <p>${conContent}</p>
                                </div>
                            </div>`;
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    }
    var head = 'Info Window Content1';
    var conContent = `Pellentesque habitant morbi tristique senectus et netus et 
    malesuada fames ac turpis egestas. Vestibulum tortor quam, 
    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec 
    eu libero sit amet quam egestas semper. Aenean ultricies mi 
    vitae est. Mauris placerat eleifend leo.`;
    var lat = 12.97;
    var lad = 77.59;
    google.maps.event.addDomListener(window, 'load', initMap(lat, lad, head, conContent));
});