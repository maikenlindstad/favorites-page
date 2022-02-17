import { getExistingFavorites } from "./utils/favFunctions.js";
import products from "./data/products.js";

const productContainer = document.querySelector(".product-container");


const favs = getExistingFavorites();

products.forEach((product) => {

    let cssClass = "far";

    const doesObjectExist = favs.find(function (fav) {
        console.log(fav);

        return parseInt(fav.id) === product.id;
    });

    console.log(doesObjectExist);

    if (doesObjectExist) {
        cssClass = "fa-solid";
    }

    productContainer.innerHTML += `<div class="product">
                                    <h4>${product.name}</h4>
                                    <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}"></i>
                                    </div>`;
});

const favoriteButtons = document.querySelectorAll(".product i");

favoriteButtons.forEach((heartButton) => {
    heartButton.addEventListener("click", handleClick);
});

function handleClick() {

    this.classList.toggle("fa-solid");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentFavorites = getExistingFavorites();


    const productExists = currentFavorites.find(function (fav) {
        return fav.id === id;
    });

    // if (!productExists) or
    if (productExists === undefined) {
        const product = { id: id, name: name };
        currentFavorites.push(product);
        saveFavorites(currentFavorites);
    } else {
        const newFavs = currentFavorites.filter(fav => fav.id !== id);
        saveFavorites(newFavs);
    }



}



function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}