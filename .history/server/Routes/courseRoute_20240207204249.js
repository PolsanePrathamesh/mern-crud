// authRouter.js
const express = require("express");
const router = express.Router();
const {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
} = require("../Controller/courseController");

router.post("/create", createCourse);
router.get("/", getCourses);
router.get("/:id", getCourse);
router.put("/:id", updateCourse);
router.put("/:id", updateCourse);

module.exports = router;
