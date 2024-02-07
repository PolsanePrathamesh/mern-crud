const userModel = require("../models/user");

// authController.js
const test = (req, res) => {
  res.send("Hello from the test route!");
};

const registerUser = (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name) {
        res.
    }
  } catch {}
};

module.exports = { test, registerUser };
