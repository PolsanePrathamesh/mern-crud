// authRouter.js
const express = require("express");
const router = express.Router();
const {
    
} = require("../Controller/authController");

router.post("/create", registerUser);


module.exports = router;
