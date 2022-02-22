const input = document.querySelector("#name-input");
const nameAnonymous = document.querySelector("#name-output");
const anonymousText = nameAnonymous.textContent;

input.addEventListener("input", onInputChenge);

function onInputChenge(event) {
  nameAnonymous.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    nameAnonymous.textContent = anonymousText;
  }
}
