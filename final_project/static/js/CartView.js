import Cart from './Cart.js';

export default class CartView {
    constructor() {}

    renderProductList(products, parent) {
        parent.innerHTML = '';

        products.forEach(product => {
            const productItem = this.renderProductItem(product);

            if (productItem) {
                parent.appendChild(productItem);
            }
        });
    }

    renderProductItem(product) {
        const productItem = document.createElement('li');
        productItem.innerHTML = product['product_name'];

        return productItem;
    }
}