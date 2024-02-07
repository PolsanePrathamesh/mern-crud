// authRouter.js
const express = require("express");
const router = express.Router();
const { createCourse, getCourses,get } = require("../Controller/courseController");

router.post("/create", createCourse);
router.get("/", getCourses);
router.get("/:id", getCourse);

module.exports = router;