const mongoose = require("mongoose");

const { Schema } = mongoose;

const courseScheme = new Schema({
  name: {
    type: String,
    unique: true,
  },
});

const courseModel = mongoose.model("Course", courseScheme);
module.exports = courseModel;
