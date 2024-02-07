// authRouter.js
const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controller/authController");

router.post("/", registerUser);

module.exports = router;
