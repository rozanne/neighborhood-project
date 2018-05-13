window.onload = function() {
    console.log('::::onload');
    var lat = 37.481;
    var lng = 126.893;
    var zoom = 20;
    var mymap = L.map('map', {
        center: [lat, lng],
        zoom: zoom
    });
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
}
