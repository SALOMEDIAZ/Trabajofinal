document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart-items");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    // Leer carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Función para renderizar el carrito
    const renderCart = () => {
        cartContainer.innerHTML = "";
        let subtotal = 0;

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartSubtotal.textContent = "$0.00";
            cartTotal.textContent = "$0.00";
            return;
        }

        cart.forEach(product => {
            const price = parseFloat(product.price) || 0;
            const quantity = parseInt(product.quantity) || 1;
            const itemTotal = price * quantity;
            subtotal += itemTotal;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${product.imgUrl || 'https://via.placeholder.com/150'}" alt="${product.name}">
                <div>${product.name}</div>
                <div>$${price.toFixed(2)}</div>
                <div>
                    <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                    ${quantity}
                    <button class="quantity-btn increase" data-id="${product.id}">+</button>
                </div>
                <div>$${itemTotal.toFixed(2)}</div>
                <button class="remove-btn" data-id="${product.id}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        // Actualizar el subtotal y el total
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${subtotal.toFixed(2)}`;
    };

    // Función para actualizar la cantidad del producto
    const updateQuantity = (id, change) => {
        const product = cart.find(item => item.id === id);
        if (product) {
            product.quantity += change;
            if (product.quantity <= 0) {
                cart = cart.filter(item => item.id !== id); // Eliminar si la cantidad es 0 o menor
            }
            localStorage.setItem("cart", JSON.stringify(cart)); // Guardar en localStorage
            renderCart(); // Volver a renderizar el carrito
        }
    };

    // Función para eliminar un producto del carrito
    const removeProduct = (id) => {
        cart = cart.filter(item => item.id !== id); // Filtrar el producto por su id
        localStorage.setItem("cart", JSON.stringify(cart)); // Guardar en localStorage
        renderCart(); // Volver a renderizar el carrito
    };

    // Manejar clicks en los botones de cantidad y eliminar
    cartContainer.addEventListener("click", (e) => {
        const button = e.target;
        const id = button.dataset.id;

        if (button.classList.contains("increase")) {
            updateQuantity(id, 1); // Aumentar cantidad
        } else if (button.classList.contains("decrease")) {
            updateQuantity(id, -1); // Disminuir cantidad
        } else if (button.classList.contains("remove-btn")) {
            removeProduct(id); // Eliminar producto
        }
    });

    // Función de checkout (aún no implementada)
    checkoutButton.addEventListener("click", () => {
        alert("debes iniciar sesion para continuar");
    });

    // Render inicial del carrito
    renderCart();
});
