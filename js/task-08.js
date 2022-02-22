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
  const formData = { password, email };
  console.log(formData);

  event.currentTarget.reset();
}
