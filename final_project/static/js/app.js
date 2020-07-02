//import Product from "./Product.js";

//const p = new Product();
//p.getProducts();
import ProductsController from "./ProductsController.js";
import CartController from "./CartController.js";

const output = '#product-list';
const p = new ProductsController(output);

function showProducts() {
    p.init();
}
showProducts();

const viewProducts = document.querySelector('#view-products');
const viewCart = document.querySelector('#view-cart');
viewProducts.classList.add('active-link');

viewProducts.addEventListener('click', e => {
    //showProducts();
    p.getProducts();
    viewProducts.classList.add('active-link');
    viewCart.classList.remove('active-link');
})

const cart = new CartController('#product-list');
viewCart.addEventListener('click', e => {
    cart.showAllProducts();
    viewCart.classList.add('active-link');
    viewProducts.classList.remove('active-link');
})

// Product count
const cartCount = document.querySelector('.cart-count');
cartCount.innerHTML = cart.getProductCount();
cartCount.addEventListener('click', e => {
    cart.showAllProducts();
})

const cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', e => {
    cart.showAllProducts();
})