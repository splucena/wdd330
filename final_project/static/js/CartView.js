import Cart from './Cart.js';

export default class CartView {
    constructor() {}

    renderProductList(products, parent) {
        parent.innerHTML = '';
        const tbl = document.createElement('table');
        tbl.classList.add('cart-table');
        const tblHeader = document.createElement('tr');
        const productNameTd = document.createElement('th');
        productNameTd.innerHTML = 'Name';
        const quantityTd = document.createElement('th');
        quantityTd.innerHTML = 'Quantity';
        const removeItemTd = document.createElement('th');
        const updateItemTd = document.createElement('th');

        tblHeader.appendChild(productNameTd);
        tblHeader.appendChild(quantityTd);
        tblHeader.appendChild(updateItemTd);
        tblHeader.appendChild(removeItemTd);
        tbl.appendChild(tblHeader);


        parent.appendChild(tbl);

        products.forEach(product => {
            const productItem = this.renderProductItem(product);

            if (productItem) {
                tbl.appendChild(productItem);
            }
        });
    }

    renderProductItem(product) {

        //const container = document.createElement('div');
        const productItem = document.createElement('tr');
        //productItem.innerHTML = product['product_name'];
        const productNameTd = document.createElement('td');
        const productName = document.createElement('span');
        productName.innerHTML = product['product_name'];
        productNameTd.appendChild(productName);

        const quantityTd = document.createElement('td');
        const quantity = document.createElement('input');
        quantity.type = 'number';
        quantity.value = product['quantity'];
        quantityTd.appendChild(quantity);

        const updateItemTd = document.createElement('td');
        const updateItem = document.createElement('button');
        updateItem.innerHTML = 'Update';
        updateItem.classList.add('btn');
        updateItemTd.appendChild(updateItem);

        const removeItemTd = document.createElement('td');
        const removeItem = document.createElement('button');
        removeItem.innerHTML = 'Remove';
        removeItem.classList.add('btn');
        removeItemTd.appendChild(removeItem)

        //container.appendChild(productName);
        //container.appendChild(quantity);
        //container.appendChild(updateItem);
        //container.appendChild(removeItem);
        productItem.appendChild(productNameTd);
        productItem.appendChild(quantityTd);
        productItem.appendChild(updateItemTd);
        productItem.appendChild(removeItemTd);

        return productItem;
    }
}