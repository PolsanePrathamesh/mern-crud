// authRouter.js
const express = require("express");
const router = express.Router();
const { createCourse } = require("../Controller/courseController");

router.post("/create", createCourse);
router.get("/", getCourses);


module.exports = router;
