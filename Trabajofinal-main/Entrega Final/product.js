document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");

    const products = [
        {
            id: 1,
            name: "Matcha Té",
            price: 10.00,
            description: "Un té verde en polvo premium, rico en antioxidantes y suave al paladar.",
            imgUrl: "https://i.pinimg.com/236x/76/8d/0e/768d0e15e22941f34f5a9ee88838d563.jpg"
        },
        {
            id: 2,
            name: "Orange Té",
            price: 12.00,
            description: "Infusión refrescante hecha con naranja natural y un toque de menta.",
            imgUrl: "https://i.pinimg.com/236x/ec/ba/21/ecba217fa648dcecd80f91e88dd8b889.jpg"
        },
        {
            id: 3,
            name: "Bobba Té",
            price: 13.00,
            description: "Té con perlas de tapioca que crean una textura única y deliciosa.",
            imgUrl: "https://i.pinimg.com/236x/a6/24/fb/a624fbb6f9b6ea84990da6fdec74db20.jpg"
        },
        {
            id: 4,
            name: "Green Té Bobba",
            price: 13.00,
            description: "Té verde con perlas de tapioca y un toque de dulzura natural.",
            imgUrl: "https://i.pinimg.com/236x/ee/a3/29/eea32975cf588dc46c9ea6ab57c0c885.jpg"
        },
        {
            id: 5,
            name: "Taro Bobba",
            price: 13.00,
            description: "Té con sabor a taro, con perlas de tapioca y notas cremosas.",
            imgUrl: "https://i.pinimg.com/564x/4b/90/29/4b90298708de954ae4c148bfc00a9835.jpg"
        },
        {
            id: 6,
            name: "Bobba Tea",
            price: 13.00,
            description: "Una deliciosa mezcla de té con tapioca.",
            imgUrl: "https://i.pinimg.com/564x/fe/42/70/fe4270e68233ee724739c4ee03eb46e5.jpg"
        },
        {
            id: 7,
            name: "Soda",
            price: 15.00,
            description: "Bebida refrescante y burbujeante.",
            imgUrl: "https://i.pinimg.com/236x/a7/5a/59/a75a59edea5840ea5a3faa4cbaf578eb.jpg"
        },
        {
            id: 8,
            name: "Blue Téa",
            price: 14.00,
            description: "Té con un toque de azul y un sabor único.",
            imgUrl: "https://i.pinimg.com/236x/6a/a8/27/6aa827177468205da4106a390bfb9321.jpg"
        },
        {
            id: 9,
            name: "Chocolate",
            price: 16.00,
            description: "Bebida deliciosa de chocolate.",
            imgUrl: "https://i.pinimg.com/236x/db/db/9b/dbdb9b40df786422e0b0a3e7745acfc6.jpg"
        },
        {
            id: 10,
            name: "Strawberry Matcha",
            price: 18.00,
            description: "Una mezcla deliciosa de fresa y matcha.",
            imgUrl: "https://i.pinimg.com/474x/84/82/16/84821662827adc2592eb460315f03a10.jpg"
        },
    
        {
            id: 11,
            name: "Kiwi Green Tea",
            price: 13.00,
            description: "Té verde refrescante con un toque tropical de kiwi.",
            imgUrl: "https://i.pinimg.com/736x/c9/96/7f/c9967fa1ab91510c06ef90b5e4531369.jpg"
        },
        {
            id: 12,
            name: "Watermelon Bubble Tea",
            price: 15.00,
            description: "Té dulce y jugoso con sabor a sandía y perlas de tapioca.",
            imgUrl: "https://i.pinimg.com/736x/4a/5e/30/4a5e30020a09747579fbe724e726c609.jpg"
        },
        {
            id: 13,
            name: "Matcha Red Bean",
            price: 16.50,
            description: "Un té matcha único con frijoles rojos dulces.",
            imgUrl: "https://i.pinimg.com/474x/38/5e/9b/385e9b0b43213ddc7cdbda53f6175290.jpg"
        },
        {
            id: 14,
            name: "Grapefruit Green Tea",
            price: 14.00,
            description: "Té verde con el sabor cítrico y refrescante del pomelo.",
            imgUrl: "https://i.pinimg.com/236x/9f/63/db/9f63dbb1b66914eed3f9c56b4230ae8b.jpg"
        },
        {
            id: 15,
            name: "Mint Chocolate Bubble Tea",
            price: 17.00,
            description: "Una combinación refrescante de chocolate y menta con tapioca.",
            imgUrl: "https://i.pinimg.com/236x/41/1c/ba/411cba7b443b8abf1415b9df3dfa7ee9.jpg"
        },
        {
            id: 16,
            name: "Vanilla Milk Tea",
            price: 13.00,
            description: "Té con leche y un toque de vainilla, perfecto para cualquier ocasión.",
            imgUrl: "https://i.pinimg.com/236x/18/68/15/186815d179e7361cc7b2adce9786ee80.jpg"
        },
        {
            id: 17,
            name: "Almond Milk Tea",
            price: 14.00,
            description: "Un té con leche y almendras, suave y reconfortante.",
            imgUrl: "https://i.pinimg.com/236x/3f/67/bc/3f67bcdc53ce2580635b74ed1377a80b.jpg"
        },
        {
            id: 18,
            name: "Oreo Milk Tea",
            price: 16.00,
            description: "Té con leche y trozos de Oreo para un toque crujiente y dulce.",
            imgUrl: "https://i.pinimg.com/236x/ab/42/3c/ab423cf822a90ad72ffada978053ac9d.jpg"
        },
        {
            id: 19,
            name: "Lavender Milk Tea",
            price: 14.50,
            description: "Té con leche y un aroma relajante a lavanda.",
            imgUrl: "https://i.pinimg.com/236x/5a/bc/31/5abc31ffdcab4a28ffba2c2e395f7188.jpg"
        },
        {
            id: 20,
            name: "Caramel Macchiato Bubble Tea",
            price: 18.00,
            description: "Un té de caramelo macchiato con un toque de tapioca.",
            imgUrl: "https://i.pinimg.com/474x/1d/61/37/1d6137bf091c47df2897f08e36df47e7.jpg"
        },
        {
            id: 21,
            name: "Fruit Téa",
            price: 10.000,
            imgUrl: "https://i.pinimg.com/236x/32/10/53/3210532e06c3b8a28ddf3a1248eaf490.jpg",
            description: "Delicious Fruit Téa."
        },
        {
            id: 22,
            name: "Tapioca Bubble Téa",
            price: 15.000,
            imgUrl: "https://i.pinimg.com/236x/30/58/13/3058139faf6e29defff3855788ac8407.jpg",
            description: "Tapioca bubbles for a perfect tea experience."
        },
        {
            id: 23,
            name: "Avocado Shake",
            price: 16.000,
            imgUrl: "https://i.pinimg.com/474x/a5/df/58/a5df58cb2972c04ca6f4a74e08a27eb1.jpg",
            description: "Creamy avocado shake."
        },
        {
            id: 24,
            name: "Dragon Fruit Shake",
            price: 15.000,
            imgUrl: "https://i.pinimg.com/736x/09/35/fb/0935fbf94e184a93a8a8fb389f714db3.jpg",
            description: "Exotic dragon fruit shake."
        }
    ];
    const productContainer = document.getElementById("products");
const searchInput = document.getElementById("searchInput");

function renderProducts(productList) {
    productContainer.innerHTML = ""; 
    if (productList.length === 0) {
        productContainer.innerHTML = `<p>No se encontraron productos</p>`;
        return;
    }

    productList.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.imgUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price.toFixed(2)}</p>
        `;
        productContainer.appendChild(card);
    });
}


renderProducts(products);


searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
});

// Función de filtro por categoría
function filterByCategory(category) {
    const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products; 
    renderProducts(filteredProducts);
}


    // Render products
    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <div class="product-card">
                <img src="${product.imgUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Precio:</strong> $${product.price.toFixed(2)}</p>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
});
function removeFromFavorites(pos) {
    favorites.splice(pos, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites(); 
}
function redirectToLogin() {
    window.location.href = "login.html"; 
}

function redirectToFavoritos() {
    window.location.href = "favoritos.html";
}
function redirectToTrendings() {
    window.location.href = "Trending.html";
}
function redirectToDetail(){
    window.location,href= "detalle..html";
}
