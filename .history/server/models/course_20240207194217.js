const mongoose = require("mongoose");

const { Schema } = mongoose;

const courseScheme = new Schema({
  name: {
    type: "string",
  },
 
});

const userModel = mongoose.model("User", courseScheme);
module.exports = userModel;
