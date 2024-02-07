const mongoose = require("mongoose");

const { Schema } = mongoose;

const courseScheme = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("User", courseScheme);
module.exports = userModel;
