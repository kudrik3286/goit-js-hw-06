function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("#controls input");
const boxesAddDivRef = document.querySelector("#boxes");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");

btnCreateRef.addEventListener("click", createBoxes);

let baseboxSize = 30;

function createBoxes(event) {
  let amount = Number(inputRef.value);
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    baseboxSize += 10;
    newBox.classList.add("new-box");
    boxesAddDivRef.append(newBox);
    inputRef.value = "";
  }
}

btnDestroyRef.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  inputRef.value = "";
  boxesAddDivRef.innerHTML = "";
  baseboxSize = 30;
}
