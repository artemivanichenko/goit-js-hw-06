const formInputEl = document.querySelector("#validation-input");

formInputEl.addEventListener("blur", () => {
  const defaultNumber = Number(formInputEl.dataset.length);
  const inputNumber = formInputEl.value.length;

  if (defaultNumber === inputNumber) {
    formInputEl.classList.add("valid");
    formInputEl.classList.remove("invalid");
  } else {
    formInputEl.classList.remove("valid");
    formInputEl.classList.add("invalid");
  }
});
