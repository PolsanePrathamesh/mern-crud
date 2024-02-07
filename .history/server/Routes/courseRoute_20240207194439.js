// authRouter.js
const express = require("express");
const router = express.Router();
const {
    createCourse
} = require("../Controller/authController");

router.post("/create", registerUser);


module.exports = router;
