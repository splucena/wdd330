//import Product from "./Product.js";

//const p = new Product();
//p.getProducts();
import ProductsController from "./ProductsController.js";
import CartController from "./CartController.js";

function showProducts() {
    const output = '#product-list';
    const p = new ProductsController(output);
    p.init();
}
showProducts();

const viewProducts = document.querySelector('#view-products');
viewProducts.addEventListener('click', e => {
    showProducts();
})

const viewCart = document.querySelector('#view-cart');
viewCart.addEventListener('click', e => {
    const cart = new CartController('#product-list');
    cart.showAllProducts();
})