const Course = require("../models/course");

const createCourse = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.json({
      error: "Name is required",
    });
  }

  const exists = await Course.findOne({ name });
  if (exists) {
    return res.json({ error: "User already exists" });
  }
  const course = await Course.create({ name });
  return res.json(course);
};

const getCourses = (req,res) =>{
    
}


module.exports = { createCourse, getCourses };
