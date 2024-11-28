function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesContainer = document.getElementById("favoritesContainer");

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = "<p>No hay productos en favoritos.</p>";
    } else {
        favorites.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-card");
            productDiv.innerHTML = `
                <img src="${product.imgUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Precio: $${product.price.toFixed(2)}</p>
            `;
            favoritesContainer.appendChild(productDiv);
        });
    }
}

displayFavorites();
