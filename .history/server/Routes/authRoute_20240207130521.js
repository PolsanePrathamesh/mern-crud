// authRouter.js
const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controller/authController");

router.post("/register", registerUser);
router.post("/register", registerUser);

module.exports = router;
