// authRouter.js
const express = require("express");
const router = express.Router();
const { registerUser, loginUser,profile } = require("../Controller/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile", profile);

module.exports = router;
