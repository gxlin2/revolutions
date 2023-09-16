document.getElementById("submitbutton").addEventListener("click", calculateBday);

function calculateBday() {
    const bday = document.getElementById("bday").value;
    const d = new Date(bday);
    localStorage.setItem("bday_ms", d.getTime());
}