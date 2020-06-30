import Cart from './Cart.js';
import CartView from './CartView.js';

export default class CartController {
    constructor(parent) {
        this.parentElement = document.querySelector(parent);
        this.Cart = new Cart();
        this.CartView = new CartView();

        // set key
        this.key = 'products';
    }

    showAllProducts() {
        const products = this.Cart.getAllProducts(this.key);
        this.CartView.renderProductList(products, this.parentElement);
    }


}