const button = document.querySelector("#button");
const textHide = document.querySelector(".box");

button.addEventListener("click", handleTextInput);

function handleTextInput() {
  if (textHide.classList.contains("none")) {
    textHide.classList.replace("none", "flex");
    document.body.style.backgroundColor = "grey";
    return;
  }
  if (textHide.classList.contains("flex")) {
    textHide.classList.replace("flex", "none");
    document.body.style.backgroundColor = "white";
    return;
  }
}
