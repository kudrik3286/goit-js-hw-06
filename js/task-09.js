function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColorRef = document.querySelector(".change-color");
const colorValueRef = document.querySelector(".color");

btnColorRef.addEventListener("click", onBtnColorRefClick);

function onBtnColorRefClick(event) {
  const color = getRandomHexColor();

  colorValueRef.textContent = color;
  document.body.style.backgroundColor = color;
}
