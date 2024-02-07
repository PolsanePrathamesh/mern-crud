const User = require("../models/user");

// authController.js
const test = (req, res) => {
  res.send("Hello from the test route!");
};

const registerUser = (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({ error: "Name is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters" });
    }
    const exists = User.findOne({ email });
    if (exists) {
     return res.json({ error: "User already exists" });
    }
    const user = User.create({name , email, password });
    
  } catch {}
};

module.exports = { test, registerUser };
