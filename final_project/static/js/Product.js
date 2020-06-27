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
    }

    async getProducts() {
        const initialProductList = ['cheese', 'pasta', 'beef', 'cream', 'milk'];
        //const initialProductList = ['cheese'];

        //await initialProductList.forEach(element => {

        // spoonacular
        //const query = this.baseURL + `search?apiKey=${key}&query=${element}&number=1`;
        // usda
        //    const query = this.baseURL + `search?api_key=${key}&query=${element}&number=1`;

        //for (const product in initialProductList) {
        for (let i = 0; i < initialProductList.length; i++) {
            //initialProductList.map(function (product) {
            console.log(initialProductList[i]);
            const query = this.baseURL + `search?api_key=${key}&query=${initialProductList[i]}&pageSize=1`;
            const result = await getJSON(query);
            this._products.push(result.foods);
        }

        console.log(this._products);
        return this._products;
    }
}