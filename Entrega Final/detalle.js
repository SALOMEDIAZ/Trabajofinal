// Obtener el ID del producto desde la URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");  

// Función para obtener el producto por ID
function getProduct() {
    return product.find((item) => item.id == productId) || null;
}

// Función para renderizar los detalles del producto
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

// Función para agregar el producto a los favoritos (localStorage)
function addToFavorites() {
    const product = getProduct(); // Obtén el producto actual desde la URL

    if (product) {
        // Obtener los favoritos actuales desde localStorage
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // Verificar si el producto ya está en favoritos
        if (!favorites.find(p => p.id === product.id)) {
            favorites.push(product);

            // Guardar los favoritos de nuevo en localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));

            // Mostrar mensaje de confirmación
            document.getElementById("favoriteMessage").style.display = "block";
            setTimeout(() => {
                document.getElementById("favoriteMessage").style.display = "none";
            }, 2000);  // Ocultar mensaje después de 2 segundos
        } else {
            alert("Este producto ya está en tus favoritos.");
        }
    }
}

// Llamada a la función para renderizar el producto
renderProduct();

// Función para redirigir a la página de login
function redirectToLogin() {
    window.location.href = "login.html"; 
}

// Función para redirigir a la página de favoritos
function redirectToFavoritos() {
    window.location.href = "favoritos.html";
}

// Función para redirigir a la página de tendencias
function redirectToTrendings() {
    window.location.href = "Trendings.html";
}
