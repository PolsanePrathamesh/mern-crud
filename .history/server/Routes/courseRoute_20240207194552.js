// authRouter.js
const express = require("express");
const router = express.Router();
const {
    createCourse
} = require("../Controller/courseController");

router.post("/create", registerUser);


module.exports = router;
