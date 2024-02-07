// Import the necessary modules here
import ProductModel from '../models/product.model.js'
export default class ProductController {
  constructor() {
    this.productModel = new ProductModel();
  }

  getProducts = (req, res) => {
    //  Write your code here
    const products = this.productModel.fetchProducts();
    console.log(products);
    return res.send(products);
    
  };
}
