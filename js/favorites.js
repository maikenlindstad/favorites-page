import { getExistingFavorites } from "./utils/favFunctions.js";

const favs = getExistingFavorites();


const productContainer = document.querySelector(".product-container");

if (favs.length === 0) {
    productContainer.innerHTML = "No favorites yet";
}

favs.forEach(theFavourites => {
    productContainer.innerHTML += `<div class="product">
                                    <h4>${theFavourites.name}</h4>
                                    <i class="fa-solid fa-heart"></i>
                                    </div>`
})