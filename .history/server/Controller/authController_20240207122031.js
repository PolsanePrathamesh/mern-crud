const User = require("../models/user");

// authController.js
const test = (req, res) => {
  res.send("Hello from the test route!");
};

const registerUser = (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name) {
        res.json({ error:'Name is required' });
    }
    if(!password || password.length < 6) {
        res.json({ error:'Password must be at least 6 characters'})
    }
    const exists = User.findOne
  } catch {}
};

module.exports = { test, registerUser };
