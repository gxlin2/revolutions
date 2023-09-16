document.getElementById("submitbutton").addEventListener("click", calculateBday);

function calculateBday() {
    const bday = document.getElementById("bday").value;
    const d = new Date(bday);
    localStorage.setItem("bday_ms", d.getTime());
}

var i = 0;
var txt1 = "Welcome to space!"
var speed = 50;
function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("welcome").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}
typeWriter1();