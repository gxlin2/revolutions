// Divide time with these
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Get birthday
const bday = document.getElementById("bday").value;

//Days on Earth
const d = new Date();
let days = Math.floor((d.getTime()-bday.getTime()) / day);
document.getElementById("days").innerHTML = "Day " + days + " on Earth.";

// Years on Earth
let years = Math.floor((d.getTime()-bday.getTime()) / year);
let percent_complete = Math.round((days % 365) * 100 / 365);
document.getElementById("years").innerHTML = "Revolution " + years + " around the sun is " + percent_complete + "% complete.";


function Geeks() {
    let myDiv = document.getElementById("GFG");
    // creating button element
    let button = document.createElement('BUTTON');
    // creating text to be
    //displayed on button
    let text = document.createTextNode("Button");
        
    // appending text to button
    button.appendChild(text);
    // appending button to div
    myDiv.appendChild(button);;
}
