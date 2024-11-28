document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");
    const searchInput = document.getElementById("searchInput");

    const products = [
        {
            id: 1,
            name: "Matcha Té",
            category: "Té",
            price: 10.00,
            description: "Un té verde en polvo premium, rico en antioxidantes y suave al paladar.",
            imgUrl: "https://i.pinimg.com/236x/76/8d/0e/768d0e15e22941f34f5a9ee88838d563.jpg"
        },
        {
            id: 2,
            name: "Orange Té",
            category: "Té",
            price: 12.00,
            description: "Infusión refrescante hecha con naranja natural y un toque de menta.",
            imgUrl: "https://i.pinimg.com/236x/ec/ba/21/ecba217fa648dcecd80f91e88dd8b889.jpg"
        },
        {
            id: 3,
            name: "Bobba Té",
            category: "Bubble Tea",
            price: 13.00,
            description: "Té con perlas de tapioca que crean una textura única y deliciosa.",
            imgUrl: "https://i.pinimg.com/236x/a6/24/fb/a624fbb6f9b6ea84990da6fdec74db20.jpg"
        },
        {
            id: 4,
            name: "Green Té Bobba",
            category: "Bubble Tea",
            price: 13.00,
            description: "Té verde con perlas de tapioca y un toque de dulzura natural.",
            imgUrl: "https://i.pinimg.com/236x/ee/a3/29/eea32975cf588dc46c9ea6ab57c0c885.jpg"
        },
        {
            id: 5,
            name: "Taro Bobba",
            category: "Bubble Tea",
            price: 13.00,
            description: "Té con sabor a taro, con perlas de tapioca y notas cremosas.",
            imgUrl: "https://i.pinimg.com/564x/4b/90/29/4b90298708de954ae4c148bfc00a9835.jpg"
        },
        {
            id: 6,
            name: "Bobba Tea",
            category: "Bubble Tea",
            price: 13.00,
            description: "Una deliciosa mezcla de té con tapioca.",
            imgUrl: "https://i.pinimg.com/564x/fe/42/70/fe4270e68233ee724739c4ee03eb46e5.jpg"
        },
        {
            id: 7,
            name: "Soda",
            category: "Bebida",
            price: 15.00,
            description: "Bebida refrescante y burbujeante.",
            imgUrl: "https://i.pinimg.com/236x/a7/5a/59/a75a59edea5840ea5a3faa4cbaf578eb.jpg"
        },
        {
            id: 8,
            name: "Blue Téa",
            category: "Té",
            price: 14.00,
            description: "Té con un toque de azul y un sabor único.",
            imgUrl: "https://i.pinimg.com/236x/6a/a8/27/6aa827177468205da4106a390bfb9321.jpg"
        },
        {
            id: 9,
            name: "Chocolate",
            category: "Shake",
            price: 16.00,
            description: "Bebida deliciosa de chocolate.",
            imgUrl: "https://i.pinimg.com/236x/db/db/9b/dbdb9b40df786422e0b0a3e7745acfc6.jpg"
        },
        {
            id: 10,
            name: "Strawberry Matcha",
            category: "Té",
            price: 18.00,
            description: "Una mezcla deliciosa de fresa y matcha.",
            imgUrl: "https://i.pinimg.com/474x/84/82/16/84821662827adc2592eb460315f03a10.jpg"
        },
        {
            id: 11,
            name: "Kiwi Green Tea",
            category: "Té",
            price: 13.00,
            description: "Té verde refrescante con un toque tropical de kiwi.",
            imgUrl: "https://i.pinimg.com/736x/c9/96/7f/c9967fa1ab91510c06ef90b5e4531369.jpg"
        },
        {
            id: 12,
            name: "Watermelon Bubble Tea",
            category: "Bubble Tea",
            price: 15.00,
            description: "Té dulce y jugoso con sabor a sandía y perlas de tapioca.",
            imgUrl: "https://i.pinimg.com/736x/4a/5e/30/4a5e30020a09747579fbe724e726c609.jpg"
        },
        {
            id: 13,
            name: "Matcha Red Bean",
            category: "Té",
            price: 16.50,
            description: "Un té matcha único con frijoles rojos dulces.",
            imgUrl: "https://i.pinimg.com/474x/38/5e/9b/385e9b0b43213ddc7cdbda53f6175290.jpg"
        },
        {
            id: 14,
            name: "Grapefruit Green Tea",
            category: "Té",
            price: 14.00,
            description: "Té verde con el sabor cítrico y refrescante del pomelo.",
            imgUrl: "https://i.pinimg.com/236x/9f/63/db/9f63dbb1b66914eed3f9c56b4230ae8b.jpg"
        },
        {
            id: 15,
            name: "Mint Chocolate Bubble Tea",
            category: "Bubble Tea",
            price: 17.00,
            description: "Una combinación refrescante de chocolate y menta con tapioca.",
            imgUrl: "https://i.pinimg.com/236x/41/1c/ba/411cba7b443b8abf1415b9df3dfa7ee9.jpg"
        },
        {
            id: 16,
            name: "Vanilla Milk Tea",
            category: "Bubble Tea",
            price: 13.00,
            description: "Té con leche y un toque de vainilla, perfecto para cualquier ocasión.",
            imgUrl: "https://i.pinimg.com/236x/18/68/15/186815d179e7361cc7b2adce9786ee80.jpg"
        },
        {
            id: 17,
            name: "Avocado Shake",
            category: "Shake",
            price: 16.00,
            description: "Creamy avocado shake.",
            imgUrl: "https://i.pinimg.com/474x/a5/df/58/a5df58cb2972c04ca6f4a74e08a27eb1.jpg"
        },
        {
            id: 18,
            name: "Dragon Fruit Shake",
            category: "Shake",
            price: 15.00,
            description: "Exotic dragon fruit shake.",
            imgUrl: "https://i.pinimg.com/736x/09/35/fb/0935fbf94e184a93a8a8fb389f714db3.jpg"
        },
    ];
    

    function renderProducts(productList) {
        productsContainer.innerHTML = "";
        if (productList.length === 0) {
            productsContainer.innerHTML = `<p>No se encontraron productos.</p>`;
            return;
        }

        productList.forEach((product) => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <img src="${product.imgUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Precio: $${product.price.toFixed(2)}</p>
                <button onclick="redirectToDetail(${product.id})">More info</button>
            `;
            productsContainer.appendChild(card);
        });
    }

    function filterByCategory(category) {
        const filteredProducts = category
            ? products.filter((product) => product.category === category)
            : products;
        renderProducts(filteredProducts);
    }

    function redirectToDetail(productId) {
        window.location.href = `detalle.html?id=${productId}`;
    }

    renderProducts(products);

    // Filtro de búsqueda
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(
            (product) =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
        );
        renderProducts(filteredProducts);
    });

    window.filterByCategory = filterByCategory;
    window.redirectToDetail = redirectToDetail;
    window.redirectToLogin = function () {
        window.location.href = "login.html";
    };
    window.redirectToFavoritos = function () {
        window.location.href = "favoritos.html";
    };
    window.redirectToTrendings = function () {
        window.location.href = "Trending.html";
    };
});
