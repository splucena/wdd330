// Customer Cart Model

export default class Cart {
    constructor(product_id, product_name, quantity, servingSize) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.quantity = quantity;
        // temporary
        this.price = servingSize;
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
            // temporary
            'price': this.price
        });
        // Save changes to local storage
        this.setLocalStorage(key, products);
    }

    removeProductItem(product_id, key) {
        let products = this.getAllProducts(key);
        let index = products.findIndex(product => Number(product.product_id) === Number(product_id));
        products.splice(index, 1);
        this.setLocalStorage(key, products);
    }

    updateProductItemQuantity(product_id, key, value) {
        let products = this.getAllProducts(key);
        let index = products.findIndex(product => Number(product.product_id) === Number(product_id));
        products[index].quantity = value;
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