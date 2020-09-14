const itemImage = document.querySelector(".home-items__img");
const itemName = document.querySelector(".home-items__title");
const itemPrice = document.querySelector(".home-items__price");

let objGetLocal = JSON.parse(localStorage.getItem("itemObj"));

let src = objGetLocal.imgSrcLoc;
let name = objGetLocal.imgNameLoc;
let price = objGetLocal.itemsPriceLoc;
let itemId = objGetLocal.itemsIdLoc;

itemImage.src = src;
itemName.innerHTML = name;
itemPrice.innerHTML = price;






// add to basket ----------------------------------------

const homeItemsBut = document.querySelector(".home-items__but");
const homeItemsInput = document.querySelector(".home-items__input");




let myArr = [];
if (localStorage.getItem("itemArr") === null) {
    localStorage.setItem("itemArr", '[]');
}
homeItemsBut.addEventListener("click", () => {
    homeItemsBut.setAttribute("disabled", true)


    myArr = JSON.parse(localStorage.getItem("itemArr"));
    if (myArr.length === 0) {
        myArr.push({
            basketItemLocalName: name,
            basketItemLocalPrice: price,
            basketItemLocalSrc: src,
            basketItemLocalId: itemId
        });
        localStorage.setItem("itemArr", JSON.stringify(myArr));
    }
    else {
        const item = {
            basketItemLocalName: name,
            basketItemLocalPrice: price,
            basketItemLocalSrc: src,
            basketItemLocalId: itemId
        };
        let cond = myArr.findIndex(e => e.basketItemLocalId === item.basketItemLocalId);

        if (cond === -1) {
            myArr.push(item);
            localStorage.setItem("itemArr", JSON.stringify(myArr));
        } else {
            return
        }
    }
});