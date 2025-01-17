function initMap() {
    var location = {lat: 42.117345, lng: -72.547761};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
    script.defer = true;
    document.head.appendChild(script);
});
