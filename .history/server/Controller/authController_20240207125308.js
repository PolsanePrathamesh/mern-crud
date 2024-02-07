const User = require("../models/user");
const { hashPassword } = require("../helper/auth");

// authController.js
const test = (req, res) => {
  res.send("Hello from the test route!");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({ error: "Name is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters" });
    }
    const exists = await User.findOne({ email });
    console.log(exists);
    if (exists) {
      return res.json({ error: "User already exists" });
    }
    const user = await User.create({ name, email, password });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { test, registerUser };
