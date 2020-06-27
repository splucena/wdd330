export default class ProductsView {
    renderProductList(productList, productListElement) {
        productListElement.innerHTML = '';
        productList.forEach(element => {
            const item = document.createElement('li');
            item.innerHTML = element[0]['description'];
            productListElement.append(item);
        });
    }
}