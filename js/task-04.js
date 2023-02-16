const targetBtn = document.querySelector("#counter");

const decrementBtn = targetBtn.firstElementChild;
const incrementBtn = targetBtn.lastElementChild;

const counterValue = document.querySelector("#value");
let value = 0;

decrementBtn.addEventListener("click", valueDecrement);
incrementBtn.addEventListener("click", valueIncrement);

function valueDecrement() {
  value -= 1;
  counterValue.textContent = value;
}
function valueIncrement() {
  value += 1;
  counterValue.textContent = value;
}
