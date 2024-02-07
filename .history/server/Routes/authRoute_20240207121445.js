const express = require("express");
const router = express.Router();

const { test } = require("../Controller/authController");

router.get("/", test);
ro

module.exports = router;
