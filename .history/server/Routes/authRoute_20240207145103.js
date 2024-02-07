// authRouter.js
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../Controller/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/login", loginUser);

module.exports = router;
