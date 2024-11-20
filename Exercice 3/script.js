const text = document.querySelector("#text");
const key1 = "r";

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.altKey && event.key === key1) {
    document.write("<p> BRAVOGUI </p>");
  }
};
