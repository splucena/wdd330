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
            item.setAttribute('data-id', `id${element[0]['fdcId']}`);
            item.setAttribute('id', `id${element[0]['fdcId']}`);

            const divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.setAttribute('data-id', `id${element[0]['fdcId']}`);
            const img = document.createElement('img');
            img.src = '/final_project/static/img/no-image-tn.png';
            //img.style.width = '100%';
            img.style.height = '150px';
            // append image to divCard
            divCard.appendChild(img);
            const divContainer = document.createElement('div');
            divContainer.classList.add('container');
            divContainer.setAttribute('data-id', `id${element[0]['fdcId']}`);
            divCard.appendChild(divContainer);

            const h4 = document.createElement('h4');
            h4.innerHTML = element[0]['description'];
            const p = document.createElement('p');
            p.innerHTML = element[0]['ingredients'];

            divContainer.appendChild(h4);
            divContainer.appendChild(p);

            const controls = document.createElement('div');
            controls.classList.add('product-view-controls');
            const spanProductDetail = document.createElement('div');
            spanProductDetail.innerHTML = 'Show more details...';
            const addToCart = document.createElement('button');
            addToCart.classList.add('btn');
            addToCart.innerHTML = 'Add to cart';
            controls.appendChild(spanProductDetail);
            controls.appendChild(addToCart);
            divContainer.appendChild(controls);

            //item.innerHTML = element[0]['description'];
            item.appendChild(divCard);
            productListElement.append(item);

            return [spanProductDetail, addToCart];
        });
    }

    renderProductDetail(product, parentElement) {
        parentElement.innerHTML = '';
        const li = document.createElement('li');
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.style.gridTemplateColumns = "1fr";
        const img = document.createElement('img');
        img.src = '/final_project/static/img/no-image-tn.png';
        //img.style.width = '100%';
        img.style.height = '150px';
        // append image to divCard
        divCard.appendChild(img);

        const divContainer = document.createElement('div');
        divContainer.classList.add('container');
        divCard.appendChild(divContainer)

        const h4 = document.createElement('h4');
        h4.innerHTML = product['description'];
        const p = document.createElement('p');
        p.innerHTML = product['ingredients'];
        const pOwner = document.createElement('p');
        pOwner.innerHTML = `Owner: ${product['brandOwner']}`;
        const pAvailableDate = document.createElement('p');
        pAvailableDate.innerHTML = `Date Available: ${product['availableDate']}`;

        divContainer.appendChild(h4);
        divContainer.appendChild(p);
        divContainer.appendChild(pOwner);
        divContainer.appendChild(pAvailableDate);

        const addToCart = document.createElement('button');
        addToCart.innerHTML = 'Add to Cart';
        const back = document.createElement('button');
        back.innerHTML = 'Back';
        const controls = document.createElement('div');
        controls.appendChild(back);
        controls.appendChild(addToCart);

        divCard.appendChild(controls);

        li.appendChild(divCard);
        parentElement.appendChild(li);

        return [back, addToCart];
    }
}