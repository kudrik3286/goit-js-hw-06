const inputRef = document.querySelector("#font-size-control");
const updateTextRef = document.querySelector("#text");

inputRef.addEventListener("input", onUpdateFontSizeText);

updateTextRef.style.fontSize = `${inputRef.value}px`;
function onUpdateFontSizeText(event) {
  updateTextRef.style.fontSize = `${event.currentTarget.value}px`;
}
