import Product from './Product.js';
import productsView from './ProductsView.js';
import ProductsView from './ProductsView.js';


export default class ProductsController {
    constructor(parent) {
        this.parent = parent;
        this.products = new Product();
        this.parentElement = null;
        this.productsView = new ProductsView();
    }

    async init() {
        this.parentElement = document.querySelector(this.parent);
        this.getProducts();
    }

    async getProducts() {
        this.parentElement.innerHTML = '<li>Loading...</li>';

        const products = await this.products.getProducts();
        this.productsView.renderProductList(products, this.parentElement);
    }
}