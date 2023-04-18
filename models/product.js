// Require mongoose
const mongoose = require("mongoose");

// Create Schema
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
})

// Export
module.exports = Connect = mongoose.model("product", productSchema)