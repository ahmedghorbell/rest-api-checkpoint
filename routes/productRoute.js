// Require express 
const express = require("express");
const { test, addProduct, getProducts, getProductsById, deleteProducts, updateProducts } = require("../controllers/product");

// Require router from express
const router = express.Router()

// Create route 
// Test route 
router.get("/test", test)

// Add product route
router.post("/add_product", addProduct)

// Get all product 
router.get("/get_product", getProducts)

// Get product by id
router.get("/get_one/:_id", getProductsById)

// Delete product 
router.delete("/delete_product/:_id", deleteProducts)

// Update product
router.put("/update_product/:_id", updateProducts)

// Export routes 
module.exports = router ;