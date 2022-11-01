//const kmeans = require("../javascript libraries/ML model Libraries/kmeans");

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

window.addEventListener('load',speak())

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Thank you Logging in. Now you can search for your favorite dish or a restaurant in Bengaluru. Enter the dish name below and click the search button.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
window.addEventListener("load", () => {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
});
}});
