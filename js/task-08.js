const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", onLoginFormRefSubmit);

function onLoginFormRefSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    return alert(" Увага !!! Твої руки наче макарони)))");
  }
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log(value);
    console.log(name);
  });
  event.currentTarget.reset();
}
