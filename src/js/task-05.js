const input = document.querySelector("#name-input");
const nameAnonymous = document.querySelector("#name-output");

input.addEventListener("input", onInputChenge);

function onInputChenge(event) {
  nameAnonymous.textContent = event.currentTarget.value;
}
