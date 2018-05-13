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

    ko.applyBindings(new StationViewModel());
}

function Station(data) {
    console.log('ko::::Station ' + data.name);
    this.name = ko.observable(data.name);
}

function StationViewModel() {
    var self = this;
    self.stations = ko.observableArray([]);
    self.newStation = ko.observable();

    self.searchStation = function() {
        console.log('ko::::searchStation');
        self.stations.push(new Station({ name: this.newStation() }));
        self.newStation('');
    };

    self.removeStation = function(station) { self.stations.remove(station) };
}
