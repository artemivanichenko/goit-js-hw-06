const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    alert("все поля должны быть заполнены");
    return;
  }

  const formData = {
    mail,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
}
