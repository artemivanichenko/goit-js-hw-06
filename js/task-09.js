const backgroundArea = document.querySelector(".widget");
const changeColorBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
});
