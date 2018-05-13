window.onload = function() {
    console.log('::::onload');

    var myPlace = {
        center: [37.4935837,127.0233413],
        zoom: 50
    }

    var mapCanvas = L.map('map', {
        center: myPlace.center,
        zoom: myPlace.zoom
    });
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapCanvas);
    var locations = [
        {
            center: [37.4936131,127.0222611]
        },
        {
            center: [37.4926623,127.0223564]
        },
        {
            center: [37.4935687,127.0211194]
        },
        {
            center: [37.4935837,127.0223413]
        },
        {
            center: [37.4933325,127.0220197]
        }
    ];
    L.marker(locations[0].center).addTo(mapCanvas);
    L.marker(locations[1].center).addTo(mapCanvas);
    L.marker(locations[2].center).addTo(mapCanvas);
    L.marker(locations[3].center).addTo(mapCanvas);
    L.marker(locations[4].center).addTo(mapCanvas);
    // displayInitMarker();

    ko.applyBindings(new StationViewModel());
}

var mapCanvas = null;

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

function displayInitMarker() {
    var locations = [
        {
            center: [51.5, -0.09]
        },
        {
            center: [51.495, -0.083]
        },
        {
            center: [51.49, -0.1]
        },
        {
            center: [51.5, -0.09]
        },
        {
            center: [51.5, -0.09]
        }
    ];
    L.marker(locations[0].center).addTo(mapCanvas);
    L.marker(locations[1].center).addTo(mapCanvas);
    L.marker(locations[2].center).addTo(mapCanvas);
    L.marker(locations[3].center).addTo(mapCanvas);
    L.marker(locations[4].center).addTo(mapCanvas);
}
