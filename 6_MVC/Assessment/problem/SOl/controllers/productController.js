// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();
export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  // search = (req, res) => {
  //   const userInput = req.body.name; 

  //   const searchResults = productModel.searchResult(userInput);
  //   res.render("searchResult", { searchResults });
  // };
  search = (req, res) => {
    // Write your code here
    let searchTerm = req.body.name.toLowerCase();

    const allProducts = productModel.getAllProducts();

    const searchResult = allProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
    console.log("searchResult ", searchResult);

    res.render("searchResults", { searchResults: searchResult});
  };
}
