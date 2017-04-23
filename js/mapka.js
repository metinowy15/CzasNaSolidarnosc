
function initMap() {
        let marker;
        let map;
        let pozycja;


        let geoPos = {
            lat: 49.62654490000001,
            lng: 20.483913400000006,
        }
      

        map = new google.maps.Map(document.querySelector("#Mapa"), {
            zoom: 4,

        });
        marker = new google.maps.Marker({
            map: map,
            draggable: false,
            icon: "http://www.czasnasolidarnosc.pl/img/jabuszko.png",
            animation: google.maps.Animation.DROP,

        });

        map.setCenter(geoPos);
        marker.setPosition(geoPos);
        map.setZoom(9);
}
