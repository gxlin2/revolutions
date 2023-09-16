setTimeout(typeWriter2, 100000);

// Divide time with these
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Get birthday
var bday = localStorage.getItem("bday_ms");  

//Days on Earth
const d = new Date();
let days = Math.floor((d.getTime()-bday) / day);


// Years on Earth
let years = Math.floor((d.getTime()-bday) / year);
let percent_complete = Math.round((d.getMonth() * 30 + d.getDate()) * 100 / 365);

// var i = 0;
// var speed = 50;
// function typeWriter(txt, str) {
//     if (i < txt.length) {
//       document.getElementById(str).innerHTML += txt.charAt(i);
//       i++;
//       setTimeout(typeWriter, speed);
//     }
// }

// Outputting text

var j = 0;
var txt2 = "Day " + days + " on Earth.";
var speed = 50;
function typeWriter2() {
  if (j < txt2.length) {
    document.getElementById("days").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}



var i = 0;
var txt1 = "Revolution " + years + " around the sun is " + percent_complete + "% complete."
function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("years").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
  if (i == txt1.length-1) {
    typeWriter2();
  }
}
typeWriter1();


// typeWriter("Revolution " + years + " around the sun is " + percent_complete + "% complete.", "years");
// i = 0;
// typeWriter("Day " + days + " on Earth.", "days");






const myInput = document.getElementById('my-input')
const myButton = document.getElementById('my-button')
const myOtherButton = document.getElementById('my-other-button')
 
myOtherButton.style.display = 'none'
 
myButton.addEventListener('click', function(event) {
   
    const myInputValue = myInput.value;
   
    myOtherButton.style.display = 'block'
   
    OtherButton.innerHTML = myInputValue
 })
