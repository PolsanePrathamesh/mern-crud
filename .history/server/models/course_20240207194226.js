const mongoose = require("mongoose");

const { Schema } = mongoose;

const courseScheme = new Schema({
  email: {
    type: String,
    unique: true,
  },
});

const userModel = mongoose.model("User", courseScheme);
module.exports = userModel;
