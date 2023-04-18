// Require mongoose
const mongoose = require("mongoose");

// Create Schema
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: Number,
});

    // Export 
    module.exports = Connect = mongoose.model("user", userSchema)