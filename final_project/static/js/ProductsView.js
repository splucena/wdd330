export default class ProductsView {
    renderProductList(productList, productListElement) {
        productListElement.innerHTML = '';
        productList.forEach(element => {
            const item = document.createElement('li');

            const divCard = document.createElement('div');
            divCard.classList.add('card');

            const img = document.createElement('img');
            img.src = 'static/img/no-image-tn.png';
            img.style.height = '150px';
            divCard.appendChild(img);
            const divContainer = document.createElement('div');
            divContainer.classList.add('container');
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
            
            addToCart.classList.add('btn');
            addToCart.innerHTML = 'Add to cart';
            controls.appendChild(spanProductDetail);
            controls.appendChild(qtyLbl);
            controls.appendChild(qtyInput);
            controls.appendChild(addToCart);
            divContainer.appendChild(controls);
            item.appendChild(divCard);
            productListElement.append(item);
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
        img.style.height = '100px';

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

    renderResources(parent) {
        parent.innerHTML = '';

        const li = document.createElement('li');
        li.classList.add('resources');
        const h2API = document.createElement('h2');
        h2API.innerHTML = 'API Link';
        const pAPI = document.createElement('p');
        pAPI.innerHTML = '<a href="https://api.nal.usda.gov">https://api.nal.usda.gov</a>';

        const h2Icon = document.createElement('h2');
        h2Icon.innerHTML = 'Icon Link';
        const pIcon = document.createElement('p');
        pIcon.innerHTML = '<a href="https://icons8.com" target="blank">https://icons8.com</a>';

        li.appendChild(h2API);
        li.appendChild(pAPI);
        li.appendChild(h2Icon);
        li.appendChild(pIcon);
        parent.appendChild(li);
    }
}