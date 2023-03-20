window.addEventListener('DOMContentLoaded', function () {
  console.log("hi")

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    console.log(latitude , longitude)
    
  },
    function (error) {
  alert("there is some error")
})

})