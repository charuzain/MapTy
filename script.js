window.addEventListener('DOMContentLoaded', function() {
  console.log("hi");

  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);

    const coords = [latitude, longitude];
    const map = L.map('map').setView(coords, 18);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

      maxZoom: 19,
      //copyright info below the map
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker(coords)
      .addTo(map);
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();

    //Event listener , mapEvent is an event created by leaflet , we can call it anything
    map.on('click', function(mapEvent) {
      console.log(mapEvent);
      const lat = mapEvent.latlng.lat;
      const lng = mapEvent.latlng.lng;

      L.marker([lat,lng])
        .addTo(map)
        // .bindPopup('Workout')
        // create brand new popup objects which will have couple of options 
        .bindPopup(L.popup({
          maxWidth: 200,
          minWidth: 150,
          autoClose: false,
          closeOnClick: false,
          className :"popup"
        }
        ))
        .setPopupContent("Workout")

        .openPopup();

    });
  },
  function(error) {
    alert("there is some error");
  });

});