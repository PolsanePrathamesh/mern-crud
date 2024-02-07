const mongoose = require("mongoose");

const { Schema } = mongoose;

const courseScheme = new Schema({
  name: String,
 
});

const userModel = mongoose.model("User", courseScheme);
module.exports = userModel;
