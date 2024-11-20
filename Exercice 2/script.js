const button = document.querySelector("#button");
const textHide = document.querySelector(".box");
const body = document.querySelector("body");

button.addEventListener("click", handleTextInput);
document.addEventListener("click", handlebackGround);

function handleTextInput() {
  if (textHide.classList.contains("none")) {
    textHide.classList.replace("none", "flex");
    return;
  }
  if (textHide.classList.contains("flex")) {
    textHide.classList.replace("flex", "none");
    return;
  }
}

function handlebackGround() {
  if (body.classList.contains("bgwhite")) {
    body.classList.replace("bgwhite", "bggrey");
    return;
  }
  if (body.classList.contains("bggrey")) {
    body.classList.replace("bggrey", "bgwhite");
    return;
  }
}
//document.body.style.backgroundColor = "grey";
//document.body.style.backgroundColor = "white";
