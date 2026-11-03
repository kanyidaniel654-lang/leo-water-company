const products = [
    {
        name: "20 Litre Water Bottle",
        price: "KSh 250",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
    },
    {
        name: "10 Litre Water Bottle",
        price: "KSh 180",
        image: "https://images.unsplash.com/photo-1564419320461-6870880221ad"
    },
    {
        name: "500ml Bottled Water",
        price: "KSh 30",
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504"
    }
];

const productContainer = document.getElementById("products");

if (productContainer) {
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;
    });
}
