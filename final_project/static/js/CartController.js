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


        if (products.length > 0) {
            this.CartView.renderProductList(products, this.parentElement);

            const cartTable = document.querySelector('#cart-table');
            cartTable.addEventListener('click', e => {
                let productId = (e.target.id).slice(2, (e.target.id).length);
                let btnSuffix = (e.target.id).slice(0, 2);

                // remove
                if (btnSuffix === 'ri') {
                    //console.log('remove item');
                    this.Cart.removeProductItem(productId, 'products');
                    this.showAllProducts();

                    // update cart counter
                    const cartItemCount = document.querySelector('.cart-count');
                    cartItemCount.innerHTML = this.Cart.getProductCount('products');
                }
                // update
                if (btnSuffix === 'ui') {
                    //console.log('update item');
                    const qty = document.querySelector(`#it${productId}`);
                    this.Cart.updateProductItemQuantity(productId, 'products', qty.value);
                    this.showAllProducts();
                }
            });

            const checkout = document.querySelector('#checkout');
            checkout.addEventListener('click', e => {
                console.log(1);
                localStorage.removeItem('products');
                this.showAllProducts();
            });
        } else {
            this.parentElement.innerHTML = `<h2>Your cart is empty.</h2>`;
        }


    }

    getProductCount() {
        return this.Cart.getProductCount(this.key);
    }
}