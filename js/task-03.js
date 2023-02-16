const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgGallery = document.querySelector(".gallery");

const makeGalleryCard = (image) => {
  const { url, alt } = image;
  return `<li><img src = '${url}'alt = '${alt}' width = ''height = ''/></li>`;
};
const galleryCards = images.map(makeGalleryCard).join(" ");

imgGallery.insertAdjacentHTML("beforeend", galleryCards);
console.log(imgGallery);

imgGallery.inneHTML = galleryCards; //Перезаписывает код

// Другой вариант *********************************************

// const imgGallery = document.querySelector(".gallery");

// const makeGalleryCard = ({ url, alt }) => {
//   const listItemEl = document.createElement("li");

//   const listLinkEl = document.createElement("a");

//   listItemEl.append(listLinkEl);

//   const listImageEl = document.createElement("img");
//   listImageEl.src = url;
//   listImageEl.alt = alt;

//   listLinkEl.append(listImageEl);

//   return listItemEl;
// };

// const galleryCards = images.map(makeGalleryCard);
// imgGallery.append(...galleryCards);

// const galleryCards = images.map((el) => makeGalleryCard(el));
// imgGallery.append(...galleryCards);

// const galleryCards = images.map(makeGalleryCard).join(" ");
// imgGallery.insertAdjacentHTML("beforeend", galleryCards);
// console.log(galleryCards);
