// authRouter.js
const express = require("express");
const router = express.Router();
const {
    createCourse
} = require("../Controller/cour");

router.post("/create", registerUser);


module.exports = router;
