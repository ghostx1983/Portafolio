function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 18.385266, lng: -66.083137};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'San Juan, PR' // Title Location
    });
}