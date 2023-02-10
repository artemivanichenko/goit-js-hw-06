const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const creatIngrediens = document.querySelector("#ingredients");

const ingredientEl = ingredients.map((element) => {
  const newElement = document.createElement("li");
  newElement.textContent = element;
  newElement.classList.add("item");
  return newElement;
});

creatIngrediens.append(...ingredientEl);
console.log(creatIngrediens);
