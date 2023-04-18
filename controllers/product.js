// Require schema person
const Product = require("../models/product");

// Test
exports.test = async (req, res) => {
  try {
    res.send("This is a test function !!");
  } catch (error) {
    console.log(error);
  }
};

// Add product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = new Product({name,description,price});
    await newProduct.save();
    res.status(200).send({msg: "Product added successfully ! ", newProduct});
  } catch (error) {
    res.status(400).send({error: "Error saving product", error});
  }
}

// Get all product 
exports.getProducts = async (req, res) => {
  try {
    const Products = await Product.find();
    res.status(200).send(Products);
  } catch (error) {
    res.status(400).send({error: "Error retrieving products", error});
  }
}

// Get product by id 
exports.getProductsById = async (req, res) => {
  try {
    const {_id} = req.params
    const product = await Product.findById({_id});

    if (!product) {
      res.status(400).send({error: "Product not found", error});
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({error: "Error retrieving product by id", error});
  }
}

// Delete product
exports.deleteProducts = async (req, res) => {
  try {
    const {_id} = req.params
    await Product.findByIdAndDelete({_id});
    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error deleting product", error });
  }
}

// Update product
exports.updateProducts = async (req, res) => {
  try {
    const {_id} = req.params
    const newProduct = req.body
    await Product.updateOne({_id}, {$set: newProduct});
    res.status(200).send({message: "Product updated successfully"});
  } catch (error) {
    res.status(400).send({ error: "Error updating product", error });
  }
}
