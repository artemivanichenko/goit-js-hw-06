const controlSizeEL = document.querySelector("#font-size-control");

const textSize = document.querySelector("#text");

controlSizeEL.addEventListener("input", (event) => {
  const fontSize = event.target.value;
  textSize.style.fontSize = fontSize + "px";
});
