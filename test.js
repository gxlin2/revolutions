var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

document.getElementById("myButton").addEventListener("click", typeWriter);

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }