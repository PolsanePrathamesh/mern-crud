const User = require("../models/user");
const { hashpassword, comparepassword } = require("../helper/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.send("Hello from the test route!");
};

const registerUser = async (req, res) => {
  console.log("register hit");

  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({ error: "Name is required" });
    }

    if (!email) {
      return res.json({ error: "email is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters" });
    }
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({ error: "User already exists" });
    }
    const hashedPassword = await hashpassword(password); // Await the hashpassword function
    const user = await User.create({ name, email, password: hashedPassword });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" }); // Handle errors
  }
};
const loginUser = async (req, res) => {
  console.log("login hit");
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({ error: "email is required" });
    }
    if (!password) {
      return res.json({ error: "password is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "Invalid Credentials" });
    }

    const match = await comparepassword(password, user.password);

    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    } else {
      return res.json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};
const getProfile = async (req, res) => {
  const {token} = req.cookies
  if(token){
    jwt.verify(token , process.env.JWT_SECRET,{},)
  }
};

module.exports = { test, registerUser, loginUser, getProfile };
