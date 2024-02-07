// authRouter.js
const express = require("express");
const router = express.Router();
const {
    createCourse
} = require("../Controller/cou");

router.post("/create", registerUser);


module.exports = router;
