const boxes = document.querySelectorAll("#contenu > .box");

const colors = ["bgblue", "bgpink", "bgorange", "bgcyan", "bgred"];

boxes.forEach((box) => {
  box.addEventListener("click", handleChangeColor);
});

function handleChangeColor(event) {
  const box = event.target;
  const currentColorClass = colors.find((color) =>
    box.classList.contains(color)
  );
  const currentColorIndex = colors.indexOf(currentColorClass);
  const nextColorIndex = (currentColorIndex + 1) % colors.length;
  const nextColorClass = colors[nextColorIndex];
  box.classList.remove(currentColorClass);
  box.classList.add(nextColorClass)
}

/*function handleChangeColor() {
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
}; */
