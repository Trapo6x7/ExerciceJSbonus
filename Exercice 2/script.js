const body = document.getElementById("body");
const button = document.getElementById("button");
const box = document.getElementById("box");
const para = document.getElementById("para");

button.addEventListener("click", handleButton);
body.addEventListener("click", handleBody);

function handleButton(event) {
  body.style.backgroundColor = "darkgray";
  box.style.display = "block";
  box.style.backgroundColor = "white";
  event.stopPropagation();
}

function handleBody(event) {
  if (event.target != box && event.target != para) {
    box.style.display = "none";
    body.style.backgroundColor = "white";
  }
}
