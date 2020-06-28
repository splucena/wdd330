export default class ProductsView {
    renderProductList(productList, productListElement) {
        productListElement.innerHTML = '';
        productList.forEach(element => {
            const item = document.createElement('li');
            const h2 = document.createElement('h2');
            h2.innerHTML = element[0]['description'];
            item.appendChild(h2);

            const divCard = document.createElement('div');
            divCard.classList.add('card');
            const img = document.createElement('img');

            // append image to divCard
            divCard.appendChild(img);
            const divContainer = document.createElement('div');
            divContainer.classList.add('container');
            divCard.appendChild(divContainer);

            const h4 = document.createElement('h4');
            h4.innerHTML = element[0]['description'];
            const p = document.createElement('p');
            p.innerHTML = element[0]['ingredients'];

            divContainer.appendChild(h4);
            divContainer.appendChild(p);

            //item.innerHTML = element[0]['description'];
            item.appendChild(divCard);
            productListElement.append(item);
        });
    }
}