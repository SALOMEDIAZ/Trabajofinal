const params = new URLSearchParams(window.location.search);
const nameFromUrl = params.get("name");

function getProduct() {
    return product.find((item) => item.name.toLowerCase() === nameFromUrl.toLowerCase()) || null;
}

function renderProduct() {
    const product = getProduct();

    if (product) {
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productPrice").textContent = `$${product.price.toFixed(2)}`;
        document.getElementById("productImage").src = product.imgUrl;
        document.getElementById("productDescription").textContent = product.description;
    } else {
        console.error("Producto no encontrado.");
    }
}

renderProduct();


function redirectToLogin() {
    window.location.href = "login.html"; 
}

function redirectToFavoritos() {
    window.location.href = "favoritos.html";
}
function redirectToTrendings() {
    window.location.href = "Trendings.html";
}


  