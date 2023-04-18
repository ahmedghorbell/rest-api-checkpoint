// Require schema person
const User = require("../models/user");

// Require bcrypt
const bcrypt = require("bcrypt");

// Require json web token
const jwt = require("jsonwebtoken")

// Register
exports.register = async (req, res) => {
    try {
      const { name, email, password, phone} = req.body
      const existingUser = await User.findOne({ email })
  
      if (existingUser) {
        res.status(400).send({ error: "Email already in use" })
      }
      const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User ({...req.body})
      newUser.password = hashedPassword
      newUser.save()

const token = jwt.sign({
    id: newUser._id,
},process.env.SECRET_KEY)

      res.status(200).send({ message: "User created successfully", newUser, token })
    } catch (error) {
        res.status(400).send({ error: "Error registering user" });
      }
  }

// Login 
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({ email });
      
      if (!foundUser) {
        res.status(400).send({ error: 'User not found' });
      }
      
      const isPasswordValid = await bcrypt.compare(password, foundUser.password);
      
      if (!isPasswordValid) {
        res.status(400).send({ error: 'Invalid password' });
      }
      
      const token = jwt.sign({
        id: foundUser._id
      }, process.env.SECRET_KEY)
      res.status(200).send({message: "Login successfully",foundUser, token });
    } catch (error) {
      res.status(400).send({ error: 'Server error' });
    }
  };