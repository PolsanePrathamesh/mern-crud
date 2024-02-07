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

const getCourses = async (req, res) => {
  let courses = await Course.find();
  return res.json(courses);
};
const getCourse = async (req, res) => {
  const { id } = req.params;
  Course.findById({ _id: id })
    .then((courses) => {
      return res.json(courses);
    })
    .catch((error) => res.json(error));
};

const updateCourse = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  Course.findByIdAndUpdate({ _id: id }, { name })
    .then((courses) => {
      return res.json(courses);
    })
    .catch((error) => res.json(error));
};
const deleteCourse = (req, res) => {
  const { id } = req.params;
  Course.findByIdAndDelete({ _id: id })
    .then((course) => res.json("Course deleted successfully"))
    .catch((error) => res.json({
        
    }));
};
module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
};
