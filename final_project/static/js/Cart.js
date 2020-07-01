// Customer Cart Model

export default class Cart {
    constructor(product_id, product_name, quantity) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.quantity = quantity;
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
            'product_name': this.product_name,
            'quantity': this.quantity,
        });
        console.log(products);
        // Save changes to local storage
        this.setLocalStorage(key, products);
    }

    removeProductItem(product_id, key) {
        let products = this.getAllProducts(key);
        console.log(product_id);
        let index = products.findIndex(product => Number(product.product_id) === Number(product_id));

        console.log(index);
        // Remove product from cart
        products.splice(index, 1);
        this.setLocalStorage(key, products);
    }

    setLocalStorage(key, products) {
        localStorage.setItem(key, JSON.stringify(products));
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