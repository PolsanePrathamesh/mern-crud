const mongoose = require("mongoose");

const { Schema } = mongoose;

const courseScheme = new Schema({
  name: {
    type: String,
    unique: true,
  },
});

const userModel = mongoose.model("User", courseScheme);
module.exports = userModel;
