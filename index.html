
from flask import Flask, render_template_string, request, abort
from urllib.parse import quote

app = Flask(__name__)

# BUSINESS INFORMATION
BUSINESS_NAME = "LEO WATER COMPANY"
PHONE = "254700000000"  # Replace with your WhatsApp number
LOCATION = "Nakuru & Njoro, Kenya"

# SAMPLE PRODUCTS - EDIT NAMES AND PRICES AS NEEDED
products = [
    {
        "id": 1,
        "name": "20L Drinking Water Refill",
        "price": 150,
        "category": "Refill",
        "description": "Clean drinking water refill for home and office use.",
        "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800"
    },
    {
        "id": 2,
        "name": "20L Water Dispenser Bottle",
        "price": 800,
        "category": "Bottles",
        "description": "Durable reusable bottle suitable for water dispensers.",
        "image": "https://images.unsplash.com/photo-1523362628745-0c100150b3e5?w=800"
    },
    {
        "id": 3,
        "name": "10L Drinking Water",
        "price": 250,
        "category": "Bottles",
        "description": "Convenient drinking water for everyday use.",
        "image": "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800"
    },
    {
        "id": 4,
        "name": "500ml Bottled Water",
        "price": 300,
        "category": "Bottled Water",
        "description": "Convenient bottled water for travel and events. Sample price per pack.",
        "image": "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=800"
    },
]

# WEBSITE DESIGN
HTML = """
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>{{ business }} | Pure Drinking Water</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f5f8fc;
    color: #172b45;
}

header {
    background: #073b70;
    color: white;
    padding: 22px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.logo {
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 1px;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-size: 14px;
}

nav a:hover {
    color: #6bd5ff;
}

.hero {
    background: linear-gradient(90deg, #073b70dd, #087fc2aa),
    url("https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1600")
    center/cover;
    min-height: 390px;
    padding: 90px 8%;
    color: white;
}

.hero h1 {
    font-size: 43px;
    max-width: 600px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 18px;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    padding: 13px 24px;
    background: #05a6d9;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
}

.btn:hover {
    background: #087fc2;
}

.section {
    padding: 55px 7%;
}

.section h2 {
    font-size: 29px;
    margin-bottom: 12px;
}

.subtitle {
    color: #68788a;
    margin-bottom: 30px;
}

.search {
    margin-bottom: 30px;
}

.search input {
    width: 100%;
    max-width: 450px;
    padding: 13px;
    border: 1px solid #ccd5df;
    border-radius: 5px;
    font-size: 15px;
}

.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
}

.product-card {
    background: white;
    border-radius: 9px;
    overflow: hidden;
    box-shadow: 0 3px 15px #00000012;
    transition: 0.2s;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.product-info {
    padding: 20px;
}

.product-info h3 {
    margin-bottom: 10px;
}

.category {
    color: #0789bd;
    font-size: 13px;
    margin-bottom: 10px;
}

.price {
    font-size: 20px;
    color: #073b70;
    font-weight: bold;
    margin: 13px 0;
}

.product-info .btn {
    margin-top: 8px;
    font-size: 13px;
}

.about {
    background: #e7f4fb;
}

.about p {
    max-width: 750px;
    line-height: 1.8;
    color: #526579;
}

.contact {
    text-align: center;
    background: #073b70;
    color: white;
}

.contact p {
    margin: 15px 0 25px;
}

footer {
    background: #052b50;
    color: white;
    text-align: center;
    padding: 22px;
    font-size: 13px;
}

.detail {
    max-width: 950px;
    margin: 50px auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
    background: white;
    border-radius: 10px;
}

.detail img {
    width: 100%;
    border-radius: 8px;
}

.detail-info {
    padding: 15px;
}

.detail-info h1 {
    margin-bottom: 20px;
}

.detail-info p {
    line-height: 1.8;
    margin-bottom: 15px;
}

.back {
    display: inline-block;
    margin-top: 20px;
    color: #087fc2;
    text-decoration: none;
}

@media(max-width: 600px) {
    header {
        flex-direction: column;
    }

    nav a {
        margin: 8px;
    }

    .hero h1 {
        font-size: 32px;
    }
}
</style>
</head>

<body>

<header>
    <div class="logo">💧 {{ business }}</div>

    <nav>
        <a href="/">Home</a>
        <a href="/#products">Products</a>
        <a href="/#about">About Us</a>
        <a href="/#contact">Contact</a>
    </nav>
</header>

{% if selected %}

<div class="detail">
    <div>
        <img src="{{ selected.image }}" alt="{{ selected.name }}">
    </div>

    <div class="detail-info">
        <h1>{{ selected.name }}</h1>

        <p class="category">{{ selected.category }}</p>

        <p>{{ selected.description }}</p>

        <div class="price">
            KSh {{ "{:,}".format(selected.price) }}
        </div>

        <a class="btn"
        href="https://wa.me/{{ phone }}?text={{ ('Hello, I am interested in ' + selected.name) | urlencode }}"
        target="_blank">
            Order on WhatsApp
        </a>

        <br>
        <a class="back" href="/">← Back to all products</a>
    </div>
</div>

{% else %}

<section class="hero">
    <h1>Pure Water. Healthy Living.</h1>

    <p>
        Quality drinking water and water bottles
        for your home, office and business.
    </p>

    <a href="#products" class="btn">Explore Our Products</a>
</section>

<section class="section" id="products">

    <h2>Our Products</h2>

    <p class="subtitle">
        Explore our collection of quality water products.
    </p>

    <form class="search" method="GET" action="/">
        <input
            type="text"
            name="search"
            placeholder="Search for a product..."
            value="{{ search }}"
        >
    </form>

    <div class="products">

    {% for product in products %}

        <div class="product-card">

            <img src="{{ product.image }}"
                 alt="{{ product.name }}"
                 loading="lazy">

            <div class="product-info">

                <div class="category">
                    {{ product.category }}
                </div>

                <h3>{{ product.name }}</h3>

                <div class="price">
                    KSh {{ "{:,}".format(product.price) }}
                </div>

                <a href="/product/{{ product.id }}"
                   class="btn">
                    View Product
                </a>

            </div>
        </div>

    {% else %}

        <p>No products found. Try another search.</p>

    {% endfor %}

    </div>
</section>

<section class="section about" id="about">

    <h2>About Leo Water Company</h2>

    <p>
        Leo Water Company is committed to providing
        quality drinking water and convenient water
        solutions for homes, offices and businesses.

        We aim to make accessing drinking water easy
        through convenient ordering and delivery.
    </p>

</section>

<section class="section contact" id="contact">

    <h2>Get In Touch</h2>

    <p>Need water? Contact us today to place your order.</p>

    <p>📍 {{ location }}</p>

    <a class="btn"
       href="https://wa.me/{{ phone }}?text={{ 'Hello Leo Water Company, I would like to make an enquiry.' | urlencode }}"
       target="_blank">
        Contact Us on WhatsApp
    </a>

</section>

{% endif %}

<footer>
    © 2026 {{ business }}. All Rights Reserved.
    <br><br>
    Pure Water. Healthy Living.
</footer>

</body>
</html>
"""


# HOME PAGE AND PRODUCT SEARCH
@app.route("/")
def home():

    search = request.args.get("search", "").strip().lower()

    filtered_products = [
        p for p in products
        if search in p["name"].lower()
        or search in p["category"].lower()
    ]

    return render_template_string(
        HTML,
        business=BUSINESS_NAME,
        phone=PHONE,
        location=LOCATION,
        products=filtered_products,
        search=search,
        selected=None
    )


# INDIVIDUAL PRODUCT PAGE
@app.route("/product/<int:product_id>")
def product_detail(product_id):

    selected = next(
        (p for p in products if p["id"] == product_id),
        None
    )

    if selected is None:
        abort(404)

    return render_template_string(
        HTML,
        business=BUSINESS_NAME,
        phone=PHONE,
        location=LOCATION,
        selected=selected,
        products=[],
        search=""
    )


# RUN WEBSITE
if __name__ == "__main__":
    app.run(debug=True)
