const inputNameEl = document.querySelector("#name-input");

const outputNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", (event) => {
  if (inputNameEl.value === "") {
    outputNameEl.textContent = "Anonymous";
  } else outputNameEl.textContent = event.target.value;
});
