const boxes = document.querySelectorAll("#container > .box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("mouseenter", handleRedBorderAndBlur);
  box.addEventListener("mouseleave", handleBlackBorder);
  box.addEventListener("mousedown", handleChangeSizeBig);
  box.addEventListener("mouseup", handleChangeSizeSmall);
});

function handleRedBorderAndBlur(event) {
  let box = event.target;
  box.classList.replace("border-black", "border-red");
  box.classList.remove("blur");
}

function handleBlackBorder(event) {
  let box = event.target;
  box.classList.replace("border-red", "border-black");
  box.classList.add("blur");
}

function handleChangeSizeBig(event) {
  let box = event.target;
  box.classList.add("new-size");
}

function handleChangeSizeSmall(event) {
  let box = event.target;
  box.classList.remove("new-size");
}
