// Require express 
const express = require("express");
const { register, login } = require("../controllers/user");
const { registervalidation, validator } = require("../middleware/validator");
const isAuth = require("../middleware/isAuth");

// Require router from express
const router = express.Router()

// Create route 
// Register
router.post("/register",registervalidation() ,validator , register)

// Login
router.post("/login", login)

// Current
router.get("/current", isAuth, (req, res) => {
    res.send(req.user)
})
// Export routes 
module.exports = router ;