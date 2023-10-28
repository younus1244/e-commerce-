const products = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 40 }
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `<h3>${product.name}</h3>
                                <p>$${product.price.toFixed(2)}</p>
                                <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.className = "cart-item";
        listItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });
    cartTotal.innerText = total.toFixed(2);
}

function checkout() {
    alert("Thank you for your purchase!");
    cart.length = 0; // Clear the cart
    updateCart();
}

displayProducts();
                                  
