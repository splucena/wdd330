import Product from './Product.js';
import productsView from './ProductsView.js';
import ProductsView from './ProductsView.js';


export default class ProductsController {
    constructor(parent) {
        this.parent = parent;
        this.products = new Product();
        this.parentElement = null;
        this.productsView = new ProductsView();
        this.searchTerm = document.querySelector('#searchTerm');
        this.searchButton = document.querySelector('#searchButton');
    }

    async init() {
        this.parentElement = document.querySelector(this.parent);
        this.getProducts();

        //searchTerm = this.searchTerm.value;
        //const searchButton = document.querySelector('#searchButton');
        this.searchButton.addEventListener('click', (e) => {
            this.parentElement.innerHTML = '';
            this.searchProduct(this.searchTerm.value);
        })
    }

    async getProducts() {
        this.parentElement.innerHTML = '<li>Loading...</li>';

        const products = await this.products.getProducts();
        this.productsView.renderProductList(products, this.parentElement);

        this.parentElement.addEventListener('click', (e) => {
            console.log(e.target.dataset.id);
            if (e.target.dataset.id) {
                let fdcId = (e.target.dataset.id).slice(2, (e.target.dataset.id).length);
                this.getProductDetails(fdcId);
            }
        });
    }

    async searchProduct(searchTerm) {
        this.parentElement.innerHTML = '<li>Loading...</li>';
        const products = await this.products.searchProduct(searchTerm);
        this.productsView.renderProductList(products, this.parentElement);
    }

    async getProductDetails(id) {
        const product = await this.products.searchProductById(id);
        console.log(product);
        this.productsView.renderProductDetail(product, this.parentElement);
    }
}