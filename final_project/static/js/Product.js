import {
    getJSON
} from "./utilities.js";
import {
    key
} from "./keys.js";

export default class Product {
    constructor() {
        // spoonacular
        //this.baseURL = 'https://api.spoonacular.com/food/products/';
        // usda
        this.baseURL = 'https://api.nal.usda.gov/fdc/v1/';
        //this._products = [];
        //this._productSearchResult = [];
    }

    async getProducts() {
        const initialProductList = ['cheese', 'pasta', 'beef', 'cream', 'milk'];
        //const initialProductList = ['cheese'];

        // spoonacular
        //const query = this.baseURL + `search?apiKey=${key}&query=${element}&number=1`;
        // usda
        //    const query = this.baseURL + `search?api_key=${key}&query=${element}&number=1`;
        let products = [];
        await Promise.all(initialProductList.map(async (product) => {
            const query = this.baseURL + `search?api_key=${key}&query=${product}&pageSize=1`;
            const result = await getJSON(query);
            products.push(result.foods);
        }));

        console.log(products);

        return products;
    }

    async searchProduct(searchTerm) {
        let productSearchResult = [];
        const query = this.baseURL + `search?api_key=${key}&query=${searchTerm}&pageSize=10`;
        const products = await getJSON(query);

        products['foods'].map(product => {
            productSearchResult.push([product]);
        })

        return productSearchResult;
    }

    async searchProductById(id) {
        //let products = [];
        const query = this.baseURL + `${id}?api_key=${key}`;
        const product = await getJSON(query);

        return product;
    }
}