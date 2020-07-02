import Product from './Product.js';
import productsView from './ProductsView.js';
import ProductsView from './ProductsView.js';

// import cart
import Cart from './Cart.js';
import CartController from './CartController.js';
import CartView from './CartView.js';

export default class ProductsController {
    constructor(parent) {
        this.parent = parent;
        this.products = new Product();
        this.parentElement = null;
        this.productsView = new ProductsView();
        this.searchTerm = document.querySelector('#searchTerm');
        this.searchButton = document.querySelector('#searchButton');
        this.cart = new Cart();
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

        const viewProducts = document.querySelector('#view-products');
        viewProducts.addEventListener('click', e => {
            //showProducts();
            //p.getProducts();
            this.getProducts();
        })

        this.parentElement.addEventListener('click', (e) => {
            e.preventDefault();

            //console.log(e.target.dataset.id);
            if (e.target.dataset.id && e.target.className === 'spn') {
                let fdcId = (e.target.dataset.id).slice(2, (e.target.dataset.id).length);
                this.getProductDetails(fdcId);

                const quickview = document.querySelector('#quickview');
                quickview.classList.remove('close');
                quickview.classList.add('active');
            }

            //let fdcId = (e.target.dataset.id).slice(2, (e.target.dataset.id).length);
            //let suffix = (e.target.dataset.id).slice(0, 2);
            if (e.target.dataset.id && (e.target.className === 'btn')) {
                let fdcId = (e.target.dataset.id).slice(2, (e.target.dataset.id).length);
                const desc = document.querySelector(`#ds${fdcId}`);
                const qty = document.querySelector(`#qy${fdcId}`);

                console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
                // save to cart
                //const cart = new Cart(fdcId, desc.innerHTML, qty.value);
                this.cart.product_id = fdcId;
                this.cart.product_name = desc.innerHTML;
                this.cart.quantity = qty.value;
                this.cart.addProduct('products');

                // clear quantity input
                qty.value = '';

                // update cart item count
                const cartItemCount = document.querySelector('.cart-count');
                cartItemCount.innerHTML = this.cart.getProductCount('products');
            }
        }, false);
    }

    async getProducts() {
        this.parentElement.innerHTML = '<li>Loading...</li>';

        const products = await this.products.getProducts();
        this.productsView.renderProductList(products, this.parentElement);


    }

    async searchProduct(searchTerm) {
        this.parentElement.innerHTML = '<li>Loading...</li>';
        const products = await this.products.searchProduct(searchTerm);
        this.productsView.renderProductList(products, this.parentElement);
    }

    async getProductDetails(id) {
        const product = await this.products.searchProductById(id);
        console.log(product);
        //const [back, addToCart] = this.productsView.renderProductDetail(product, '#product-detail');
        //this.productsView.renderProductDetail(product, '#product-detail');
        const close = this.productsView.renderProductDetail(product, '#quickview');
        close.addEventListener('click', e => {
            const quickview = document.querySelector('#quickview');
            quickview.classList.remove('active');
        })

        /*back.addEventListener('click', e => {
            console.log('Back button clicked');
        })

        addToCart.addEventListener('click', e => {
            console.log('addToCart button clicked');

            const cart = new Cart(product['fdcId'], product['description']);
            cart.addProduct('products');

            const cartController = new CartController('#product-list');
            cartController.showAllProducts();

            // update cart item count
            const cartItemCount = document.querySelector('.cart-count');
            cartItemCount.innerHTML = cartController.getProductCount();
        })

        return true;*/
    }
}
/*  search by id result
    availableDate: "1/19/2019"
    brandOwner: "CITRUS GINGER BELLAVITANO"
    brandedFoodCategory: "Cheese"
    dataSource: "LI"
    dataType: "Branded"
    description: "CHEESE"
    fdcId: 816524
    foodAttributes: [{…}]
    foodClass: "Branded"
    foodComponents: []
    foodNutrients: (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    foodPortions: []
    foodUpdateLog: (3) [{…}, {…}, {…}]
    gtinUpc: "011863120569"
    householdServingFullText: "1 ONZ"
    ingredients: "BELLAVITANO CHEESE (PASTEURIZED MILK, CHEESE CULTURES, SALT, ENZYMES), SEASONING BLEND (SPICES [INCLUDING GINGER], DEHYDRATED ONION AND GARLIC, SUGAR, ORANGE PEEL, SEA SALT, RED BELL PEPPER, CITRIC ACID, ORANGE OIL, SPICE EXTRACTIVE, OLEORESIN PAPRIKA)"
    labelNutrients: {fat: {…}, saturatedFat: {…}, transFat: {…}, cholesterol: {…}, sodium: {…}, …}
    marketCountry: "United States"
    modifiedDate: "1/19/2019"
    publicationDate: "5/28/2020"
    servingSize: 28
    servingSizeUnit: "g"
 */