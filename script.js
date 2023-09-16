// Divide time with these
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Get birthday
var bday =localStorage.getItem("bday_ms");  

//Days on Earth
const d = new Date();
let days = Math.floor((d.getTime()-bday) / day);
document.getElementById("days").innerHTML = "Day " + days + " on Earth.";

// Years on Earth
let years = Math.floor((d.getTime()-bday) / year);
let percent_complete = Math.round((d.getMonth() * 30 + d.getDate()) * 100 / 365);
document.getElementById("years").innerHTML = "Revolution " + years + " around the sun is " + percent_complete + "% complete.";


const myInput = document.getElementById('my-input')
const myButton = document.getElementById('my-button')
const myOtherButton = document.getElementById('my-other-button')
 
myOtherButton.style.display = 'none'
 
myButton.addEventListener('click', function(event) {
   
    const myInputValue = myInput.value;
   
    myOtherButton.style.display = 'block'
   
    OtherButton.innerHTML = myInputValue
 })
