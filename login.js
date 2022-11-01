var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

window.addEventListener('load',speak())

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Hello! Welcome to My Restaurant Recommending Site!. Please fill in your Details Below.";
    alert(speak_data)
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function login(){
    username=document.getElementById('username').value;
    email=document.getElementById('email').value;
    password=document.getElementById('password').value;

    localStorage.setItem('username',username);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);

    window.location='/html files/main.html';
}