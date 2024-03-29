const mongoose = require("mongoose");

const { Schema } = mongoose;

const userScheme = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("User", userScheme);
module.exports = userModel;
