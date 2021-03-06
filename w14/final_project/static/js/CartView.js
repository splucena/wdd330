import Cart from './Cart.js';

export default class CartView {
    constructor() {}

    renderProductList(products, parent) {
        parent.innerHTML = '';
        const tbl = document.createElement('table');
        tbl.classList.add('cart-table');
        tbl.setAttribute('id', 'cart-table');
        const tblHeader = document.createElement('tr');
        const productNameTd = document.createElement('th');
        productNameTd.innerHTML = 'Name';
        const quantityTd = document.createElement('th');
        quantityTd.innerHTML = 'Quantity';

        // temporary
        const priceTd = document.createElement('th');
        priceTd.innerHTML = 'Price';
        const subtotalTd = document.createElement('th');
        subtotalTd.innerHTML = 'Subtotal';


        const removeItemTd = document.createElement('th');
        const updateItemTd = document.createElement('th');

        tblHeader.appendChild(productNameTd);
        tblHeader.appendChild(quantityTd);
        // temporary
        tblHeader.appendChild(priceTd);
        tblHeader.appendChild(subtotalTd);
        //
        tblHeader.appendChild(updateItemTd);
        tblHeader.appendChild(removeItemTd);
        tbl.appendChild(tblHeader);


        parent.appendChild(tbl);
        let grandTotal = 0;
        products.forEach(product => {
            const [productItem, subtotal] = this.renderProductItem(product);

            if (productItem) {
                tbl.appendChild(productItem);
            }
            grandTotal += subtotal;
        });

        const grandTotalTr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td3.innerHTML = 'Grand Total';
        const grandTotalTd = document.createElement('td');
        grandTotalTd.innerHTML = '$' + Number(grandTotal).toFixed(2);
        const td5 = document.createElement('td');
        td5.colSpan = '2';
        const checkout = document.createElement('button');
        checkout.innerHTML = 'Checkout';
        checkout.classList.add('btn');
        checkout.style.width = '100%';
        checkout.setAttribute('id', 'checkout');
        td5.appendChild(checkout);

        grandTotalTr.appendChild(td1);
        grandTotalTr.appendChild(td2);
        grandTotalTr.appendChild(td3);
        grandTotalTr.appendChild(grandTotalTd);
        grandTotalTr.appendChild(td5);
        //grandTotalTr.appendChild(td6);

        tbl.appendChild(grandTotalTr);



    }

    renderProductItem(product) {
        const productItem = document.createElement('tr');
        const productNameTd = document.createElement('td');
        const productName = document.createElement('span');
        productName.innerHTML = product['product_name'];
        productNameTd.appendChild(productName);

        const quantityTd = document.createElement('td');
        const quantity = document.createElement('input');
        quantity.type = 'number';
        quantity.value = product['quantity'];
        quantity.setAttribute('id', `it${product['product_id']}`);
        quantityTd.appendChild(quantity);

        // temporary
        const priceTd = document.createElement('td');
        const price = document.createElement('span');
        price.innerHTML = `$${product['price']}`;
        priceTd.appendChild(price);

        const subtotalTd = document.createElement('td');
        const subtotal = document.createElement('span');
        subtotal.innerHTML = '$' + Number(product['price'] * product['quantity']).toFixed(2);
        subtotalTd.appendChild(subtotal);

        const updateItemTd = document.createElement('td');
        const updateItem = document.createElement('button');
        updateItem.classList.add('edit');
        updateItem.innerHTML = '&nbsp;';
        updateItem.classList.add('btn');
        updateItem.style.width = "30px";
        updateItem.setAttribute('id', `ui${product['product_id']}`);
        updateItemTd.appendChild(updateItem);

        const removeItemTd = document.createElement('td');
        const removeItem = document.createElement('button');
        removeItem.innerHTML = '&nbsp;';
        removeItem.classList.add('btn');
        removeItem.classList.add('remove');
        removeItem.style.width = "30px";
        removeItem.setAttribute('id', `ri${product['product_id']}`);
        removeItemTd.appendChild(removeItem)

        productItem.appendChild(productNameTd);
        productItem.appendChild(quantityTd);
        // temporary
        productItem.appendChild(priceTd);
        productItem.appendChild(subtotalTd);
        //
        productItem.appendChild(updateItemTd);
        productItem.appendChild(removeItemTd);

        return [productItem, product['price'] * product['quantity']];
    }
}