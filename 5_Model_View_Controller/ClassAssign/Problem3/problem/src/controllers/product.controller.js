// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from '../models/product.model.js';

const productModel = new ProductModel();

export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here     
      const products = productModel.fetchProducts();
      res.render('product', { products });
  };
}
