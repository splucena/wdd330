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
viewProducts.addEventListener('click', e => {
    //showProducts();
    //p.getProducts();
})

const cart = new CartController('#product-list');
const viewCart = document.querySelector('#view-cart');
viewCart.addEventListener('click', e => {
    cart.showAllProducts();
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