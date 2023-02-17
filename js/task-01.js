const listItems = document.querySelector("#categories");
console.log(`Number of categories: ${listItems.children.length}`);
console.log("");

const itemsEl = document.querySelectorAll(".item");

itemsEl.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent};`);
  console.log(`Elements: ${el.lastElementChild.children.length};`);
  console.log("");
});

// const itemsEl = document.querySelectorAll(".item");
// const itemsEllist = document.querySelectorAll("ul");
// console.log(`Category: ${itemsEl[0].firstElementChild.textContent};`);
// console.log(`Elements: ${itemsEllist[1].children.length};`);
// console.log("");
// console.log(`Category: ${itemsEl[1].firstElementChild.textContent};`);
// console.log(`Elements: ${itemsEllist[2].children.length};`);
// console.log("");
// console.log(`Category: ${itemsEl[2].firstElementChild.textContent};`);
// console.log(`Elements: ${itemsEllist[3].children.length};`);
