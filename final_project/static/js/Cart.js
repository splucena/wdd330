// Customer Cart Model

export default class Cart {
    constructor(product_id, product_name) {
        this.product_id = product_id;
        this.product_name = product_name;
    }

    addProduct(key) {
        let products;
        if (localStorage.getItem(key) === null) {
            products = [];
        } else {
            products = this.getAllProducts(key);
        }

        products.push({
            'product_id': this.product_id,
            'product_name': this.product_name
        });
        // Save changes to local storage
        this.setLocalStorage(key, products);
    }

    removeProductItem(product_id, key) {
        let products = this.getAllProducts(key);
        let index = products.findIndex(product => product.product_id === Number(product_id));

        // Remove product from cart
        products.splice(index, 1);
        this.setLocalStorage(key, products);
    }

    setLocalStorage(key, products) {
        return localStorage.setItem(key, JSON.stringify(products));
    }

    getAllProducts(key) {
        if (JSON.parse(localStorage.getItem(key) === null)) {
            return [];
        }

        return JSON.parse(localStorage.getItem(key));
    }

    getProductCount(key) {
        return this.getAllProducts(key).length;
    }
}