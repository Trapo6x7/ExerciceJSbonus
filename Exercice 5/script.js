const rightButton = document.querySelector("#right-button");
const leftButton = document.querySelector("#left-button");
const img = document.querySelector("#biche");
const biches = [
  "./images/biche1.jpg",
  "./images/biche2.jpg",
  "./images/biche3.jpg",
];
let count = 0;

rightButton.addEventListener("click", handleRightImageMove);
leftButton.addEventListener("click", handleLeftImageMove);

function handleRightImageMove() {
  console.log(count);
  if (count === biches.length - 1) {
    count = 0;
  } else {
    count += 1;
  }
  img.src = biches[count];
}

function handleLeftImageMove() {
  console.log(count);
  if (count === 0) {
    count = biches.length - 1;
  } else {
    count -= 1;
  }
  img.src = biches[count];
}
