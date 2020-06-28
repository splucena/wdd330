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
        this._products = [];
        this._productSearchResult = [];
    }

    async getProducts() {
        const initialProductList = ['cheese', 'pasta', 'beef', 'cream', 'milk'];
        //const initialProductList = ['cheese'];

        // spoonacular
        //const query = this.baseURL + `search?apiKey=${key}&query=${element}&number=1`;
        // usda
        //    const query = this.baseURL + `search?api_key=${key}&query=${element}&number=1`;

        await Promise.all(initialProductList.map(async (product) => {
            const query = this.baseURL + `search?api_key=${key}&query=${product}&pageSize=1`;
            const result = await getJSON(query);
            this._products.push(result.foods);
        }));
        //for (let i = 0; i < initialProductList.length; i++) {
        //initialProductList.map(function (product) {
        //    console.log(initialProductList[i]);
        //    const query = this.baseURL + `search?api_key=${key}&query=${initialProductList[i]}&pageSize=1`;
        //    const result = await getJSON(query);
        //    this._products.push(result.foods);
        //}

        console.log(this._products);
        return this._products;
    }

    async searchProduct(searchTerm) {

        const query = this.baseURL + `search?api_key=${key}&query=${searchTerm}&pageSize=10`;
        const products = await getJSON(query);

        products['foods'].map(product => {
            console.log(product);
            this._productSearchResult.push([product]);
        })

        return this._productSearchResult;
    }
}