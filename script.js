// Divide time with these
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Days on Earth
const d = new Date();
let days = Math.floor(d.getTime() / day);
document.getElementById("days").innerHTML = "Day " + days + " on Earth.";

// Years on Earth
let years = Math.floor(d.getTime() / year);
let percent_complete = Math.round((days % 365) * 100 / 365);
document.getElementById("years").innerHTML = "Revolution " + years + " around the sun is " + percent_complete + "% complete.";


