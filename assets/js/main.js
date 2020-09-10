const body = document.querySelector("body");
const preloader = document.querySelector(".preloader");

document.addEventListener("DOMContentLoaded", function (event) {
    body.style["overflow-y"] = "scroll";
    preloader.remove();
    setTimeout(() => {
        anime({
            targets: '.svg__foton .polymorph',
            points: [
              { value: [
                '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
                '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
              },
              { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
              { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
              { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: true
          });
    }, 100);
});

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
            itemsPriceLoc: imgPrice
        }
        localStorage.setItem("itemObj", JSON.stringify(objForLocal))
    })
}