document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
    const x = document.getElementById("myDate");
    let defaultVal = x.defaultValue;
    let currentVal = x.value;
    
    if (defaultVal == currentVal) {
      document.getElementById("demo").innerHTML = "Default value and current value is the same: "
      + x.defaultValue + " and " + x.value
      + "<br>Change the value of the date field to see the difference!";
    } else {
      document.getElementById("demo").innerHTML = "The default value was: " + defaultVal
      + "<br>The new, current value is: " + currentVal;
    }
  }