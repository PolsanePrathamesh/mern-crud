const User = require("../models/user");
const { hashpassword , comparepassword } = require("../helper/auth");

const test = (req, res) => {
  res.send("Hello from the test route!");
};

const registerUser = async (req, res) => {
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
    try{
        const {  email, password } = req.body;
       
    
        if (!email) {
          return res.json({ error: "email is required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
          return res.json({ error: "No user found" });
        }

        const match = await comparepassword

    }catch(error){
        console.log(error);
    }
};

module.exports = { test, registerUser, loginUser };
