const body = document.querySelector("body");
const preloader = document.querySelector(".preloader");



const arrItems = [
    item1 = {
        name: "gold ring",
        price: "15",
        image: "assets/media/img/1.jpg"
    },
    item2 = {
        name: "just ring",
        price: "30",
        image: "assets/media/img/2.jpg"
    },
    item3 = {
        name: "petite ring",
        price: "20",
        image: "assets/media/img/3.jpg"

    },
    item4 = {
        name: "blush ring",
        price: "27",
        image: "assets/media/img/4.jpg"
    },
    item5 = {
        name: "glamira ring",
        price: "42",
        image: "assets/media/img/5.jpg"
    },
    item6 = {
        name: "attract ring",
        price: "14",
        image: "assets/media/img/6.jpg"
    }
]



document.addEventListener("DOMContentLoaded", function (event) {
    body.style["overflow-y"] = "scroll";
    preloader.remove();

    setTimeout(() => {
        anime({
            targets: '.svg__foton path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function (el, i) { return i * 250 },
            direction: 'alternate',
            loop: true
        });
    }, 100);
});





if (document.title == "FOTON") {
    let price = document.querySelectorAll(".home__item_price");
    let images = document.querySelectorAll(".home__item_img");
    let title = document.querySelectorAll(".home__item_title");

    for (let i = 0; i < price.length; i++) {
        title[i].innerHTML = arrItems[i].name;
        price[i].innerHTML = arrItems[i].price;
        images[i].src = arrItems[i].image;
        images[i].alt = arrItems[i].name;
    }
}





let image = document.querySelectorAll(".home__item_image");
let itemsImg = document.querySelector(".home-items__img");
let itemsTitle = document.querySelector(".home-items__title");
let itemsPrice = document.querySelector(".home-items__price");

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", () => {
        localStorage.setItem("imgSrc", image[i].querySelector(".home__item_img").src);
        localStorage.setItem("name", image[i].parentElement.parentElement.querySelector(".home__item_title").innerHTML);
        localStorage.setItem("price", image[i].parentElement.parentElement.querySelector(".home__item_price").innerHTML);
    })
}


