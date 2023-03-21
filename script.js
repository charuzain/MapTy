window.addEventListener('DOMContentLoaded', function () {
  console.log("hi")

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    console.log(latitude, longitude)

    const coords = [latitude, longitude];
    const map = L.map('map').setView(coords, 18);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      //copyright info below the map
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker(coords)
    .addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
  },
    function (error) {
  alert("there is some error")
})

})