
const params = new URLSearchParams(window.location.search);
const nameFromUrl = params.get("name");

function getProduct() {
    for (let i = 0; i < products.length; i++) {
        let map = products[i]; 
        let title = map.name;
        
        if (title === nameFromUrl) {
           
            let product = {
                name: map.name,
                price: map.price,
                description: map.description,
                image: map.image
            };
            return product;
        }
    }
}

function renderProduct() {
    let product = getProduct();
    
    if (product) {
        let titleH2 = document.getElementById("productName");
        titleH2.innerHTML = product.name; 
        let priceH3 = document.getElementById("productPrice");
        priceH3.innerHTML = product.price + " USD"; 

        let mainImg = document.getElementById("productImage");
        mainImg.src = product.image;
        let descriptionInfo = document.getElementById("productDescription");
        descriptionInfo.innerHTML = product.description; 
    } else {
        console.error("Producto no encontrado.");
    }
}

renderProduct();


  