const itemImage = document.querySelector(".home-items__img");
const itemName = document.querySelector(".home-items__title");
const itemPrice = document.querySelector(".home-items__price");



let src = localStorage.getItem("imgSrc");
let name = localStorage.getItem("name");
let price = localStorage.getItem("price");


itemImage.src = src;
itemName.innerHTML = name;
itemPrice.innerHTML = price;