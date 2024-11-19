const boxes = document.querySelectorAll("#contenu > .box");

boxes.forEach((box) => {
  box.addEventListener("click", handleChangeColor);
});

function handleChangeColor() {
  if (this.classList.contains("bgblue")) {
    this.classList.replace("bgblue", "bgpink");
    return;
  }
  if (this.classList.contains("bgpink")) {
    this.classList.replace("bgpink", "bgorange");
    return;
  }
  if (this.classList.contains("bgorange")) {
    this.classList.replace("bgorange", "bgcyan");
    return;
  }
  if (this.classList.contains("bgcyan")) {
    this.classList.replace("bgcyan", "bgred");
    return;
  }
  if (this.classList.contains("bgred")) {
    this.classList.replace("bgred", "bgblue");
    return;
  }
};
