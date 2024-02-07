const express = require("express");
const router = express.Router();

const { test,registerUser } = require("../Controller/authController");

router.get("/", test);
router.post("/", registerUser);

module.exports = router;
