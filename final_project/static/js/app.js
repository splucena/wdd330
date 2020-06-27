//import Product from "./Product.js";

//const p = new Product();
//p.getProducts();
import ProductsController from "./ProductsController.js";

const output = '#product-list';
const p = new ProductsController(output);
p.init();