const body = document.querySelector("body");
const preloader = document.querySelector(".preloader");

document.addEventListener("DOMContentLoaded", function (event) {
    body.style["overflow-y"] = "scroll";
    preloader.remove();
    anime({
        targets: '.svg__foton path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
});


let arrId = [];
fetch("assets/js/data.json")
    .then(response => response.json())
    .then(arrItems => {
        if (document.title == "FOTON") {
            let price = document.querySelectorAll(".home__item_price");
            let images = document.querySelectorAll(".home__item_img");
            let title = document.querySelectorAll(".home__item_title");
            for (let i = 0; i < price.length; i++) {
                title[i].innerHTML = arrItems[i].name;
                price[i].innerHTML = arrItems[i].price;
                images[i].src = arrItems[i].image;
                images[i].alt = arrItems[i].name;
                arrId.push(arrItems[i].id)
            }
        }
    }
    );


let image = document.querySelectorAll(".home__item_image");
let itemsImg = document.querySelector(".home-items__img");
let itemsTitle = document.querySelector(".home-items__title");
let itemsPrice = document.querySelector(".home-items__price");
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", () => {
        let imgSrc = image[i].querySelector(".home__item_img").src;
        let imgName = image[i].parentElement.parentElement.querySelector(".home__item_title").innerHTML;
        let imgPrice = image[i].parentElement.parentElement.querySelector(".home__item_price").innerHTML;
        let objForLocal = {
            imgSrcLoc: imgSrc,
            imgNameLoc: imgName,
            itemsPriceLoc: imgPrice,
            itemsIdLoc: arrId[i]
        }
        localStorage.setItem("itemObj", JSON.stringify(objForLocal))
    })
}



// basket ------------------------



function create(what, where, className) {
    const elem = document.createElement(what);
    elem.setAttribute("class", className);
    where.append(elem);
    return elem;
}



const iconBask = document.querySelector(".header__basket");
const modalBask = document.querySelector(".basket__modal");
const basketModalCont = document.querySelector(".basket__modal_cont");
let totalPrice = document.querySelector(".basket__modal_totalPrice");
let forAllPrice = 0;
let allPrice = 0;
let bool = true;


iconBask.addEventListener("click", (e) => {
    e.stopPropagation();
    modalBask.style.display = "flex";
    if (bool) {
        if (JSON.parse(localStorage.getItem("itemArr"))) {
            for (let i = 0; i < JSON.parse(localStorage.getItem("itemArr")).length; i++) {
                const basketItem = create("div", basketModalCont, "basket__item");
                basketItem.setAttribute("data-id", JSON.parse(localStorage.getItem("itemArr"))[i].basketItemLocalId)
                basketItem.setAttribute("data-price", JSON.parse(localStorage.getItem("itemArr"))[i].basketItemLocalPrice)

                const basketItemImg = create("div", basketItem, "basket__item_img");
                const basketItemImage = create("img", basketItemImg, "basket__item_image");
                basketItemImage.src = JSON.parse(localStorage.getItem("itemArr"))[i].basketItemLocalSrc;

                const basketItemInfo = create("div", basketItem, "basket__item_info");
                const basketItemTitle = create("h3", basketItemInfo, "home-items__title");
                basketItemTitle.innerHTML = JSON.parse(localStorage.getItem("itemArr"))[i].basketItemLocalName;

                const basketItemPrice = create("h3", basketItemInfo, "home-items__price");
                basketItemPrice.innerHTML = JSON.parse(localStorage.getItem("itemArr"))[i].basketItemLocalPrice;

                const basketItemsInput = create("input", basketItemInfo, "basket__item_info_inp");
                basketItemsInput.value = 1;
                basketItemsInput.setAttribute("type", "number");

                const basketItemsClose = create("div", basketItem, "basket__item_close");
                const basketItemsCloseIcon = create("i", basketItemsClose, "fas fa-times basket__item_close_icon");



                basketItemsInput.addEventListener("input", (e) => {
                    if (e.target.value < 1) {
                        e.target.value = 1;
                    }
                    basketItemPrice.innerHTML = JSON.parse(localStorage.getItem("itemArr"))[i].basketItemLocalPrice * e.target.value;
                });

                forAllPrice = +JSON.parse(localStorage.getItem("itemArr"))[i].basketItemLocalPrice;
                allPrice += forAllPrice;

                basketItemsCloseIcon.addEventListener("click", function (e) {
                    const parentItem = this.parentElement.parentElement.getAttribute("data-id");
                    let parentPrice = this.parentElement.parentElement.getAttribute("data-price")
                    let newLocalArr = JSON.parse(localStorage.getItem("itemArr"))
                    let filterArr = newLocalArr.filter(item => item.basketItemLocalId !== +parentItem)

                    localStorage.setItem("itemArr", JSON.stringify(filterArr));



                    allPrice -= parentPrice;
                    totalPrice.innerHTML = allPrice


                    basketItem.remove()
                })
            }
        }
        bool = false;
    }
    totalPrice.innerHTML = allPrice
    
})

// burger-menu
const burgerMenu = document.querySelector(".burger-menu");
const headerMob = document.querySelector(".header-mob");
let headerMobBool = true;

burgerMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    headerMob.style.display = headerMobBool ? "flex" : "none";
    headerMobBool = !headerMobBool;
})





basketModalCont.addEventListener("click", (e) => {
    e.stopPropagation()
})
document.addEventListener("click", () => {
    modalBask.style.display = "none";
    headerMob.style.display = "none";
    headerMobBool = true;
})
