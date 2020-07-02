export default class ProductsView {
    renderProductList(productList, productListElement) {
        //productListElement.innerHTML = "";
        //productListElement = document.querySelector('#product-list');
        productListElement.innerHTML = '';
        console.log(productListElement);
        productList.forEach(element => {
            const item = document.createElement('li');
            //const h2 = document.createElement('h2');
            //h2.innerHTML = element[0]['description'];
            //item.appendChild(h2);
            //item.setAttribute('data-id', `id${element[0]['fdcId']}`);
            //item.setAttribute('id', `id${element[0]['fdcId']}`);

            const divCard = document.createElement('div');
            divCard.classList.add('card');
            //divCard.setAttribute('data-id', `id${element[0]['fdcId']}`);
            const img = document.createElement('img');
            img.src = 'static/img/no-image-tn.png';
            //img.style.width = '100%';
            img.style.height = '150px';
            // append image to divCard
            divCard.appendChild(img);
            const divContainer = document.createElement('div');
            divContainer.classList.add('container');
            //divContainer.setAttribute('data-id', `id${element[0]['fdcId']}`);
            divCard.appendChild(divContainer);

            const h4 = document.createElement('h4');
            h4.innerHTML = element[0]['description'];
            h4.setAttribute('id', `ds${element[0]['fdcId']}`);
            const p = document.createElement('p');
            p.innerHTML = element[0]['ingredients'];

            divContainer.appendChild(h4);
            divContainer.appendChild(p);

            const controls = document.createElement('div');
            controls.classList.add('product-view-controls');
            const spanProductDetail = document.createElement('div');
            spanProductDetail.classList.add('spn');
            const qtyLbl = document.createElement('label');
            qtyLbl.innerHTML = 'Quantity';
            const qtyInput = document.createElement('input');
            qtyInput.setAttribute('id', `qy${element[0]['fdcId']}`);
            qtyInput.type = 'number';
            qtyInput.value = '0';
            spanProductDetail.innerHTML = 'Quickview';
            spanProductDetail.setAttribute('data-id', `id${element[0]['fdcId']}`);

            const addToCart = document.createElement('button');
            addToCart.setAttribute('data-id', `ac${element[0]['fdcId']}`);
            //addToCart.setAttribute('id', `ac${element[0]['fdcId']}`);
            addToCart.classList.add('btn');
            addToCart.innerHTML = 'Add to cart';
            controls.appendChild(spanProductDetail);
            controls.appendChild(qtyLbl);
            controls.appendChild(qtyInput);
            controls.appendChild(addToCart);
            divContainer.appendChild(controls);

            //item.innerHTML = element[0]['description'];
            item.appendChild(divCard);
            productListElement.append(item);

            //return [spanProductDetail, addToCart];
        });
    }

    renderProductDetail(product, parent) {
        console.log([product, parent]);
        const parentElement = document.querySelector(parent);
        parentElement.innerHTML = '';

        const h2 = document.createElement('h2');
        h2.classList.add('headline');
        h2.innerHTML = product['description'];
        const close = document.createElement('div');
        close.classList.add('close');

        // image
        const img = document.createElement('img');
        img.src = 'static/img/no-image-tn.png';
        img.style.height = '150px';

        const p = document.createElement('p');
        p.innerHTML = product['ingredients'];
        const pOwner = document.createElement('p');
        pOwner.innerHTML = `Owner: ${product['brandOwner']}`;
        const pAvailableDate = document.createElement('p');
        pAvailableDate.innerHTML = `Date Available: ${product['availableDate']}`;

        parentElement.appendChild(close);
        parentElement.appendChild(h2);
        parentElement.appendChild(img);
        parentElement.appendChild(p);
        parentElement.appendChild(pOwner);
        parentElement.appendChild(pAvailableDate);

        return close;
    }
}