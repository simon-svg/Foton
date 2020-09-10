const itemImage = document.querySelector(".home-items__img");
const itemName = document.querySelector(".home-items__title");
const itemPrice = document.querySelector(".home-items__price");


let objGetLocal = JSON.parse(localStorage.getItem("itemObj"))

let src = objGetLocal.imgSrcLoc;
let name = objGetLocal.imgNameLoc;
let price = objGetLocal.itemsPriceLoc;

itemImage.src = src;
itemName.innerHTML = name;
itemPrice.innerHTML = price;