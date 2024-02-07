const express = require("express");
const router = express.Router();

const { test } = require("../Controller/authController");

router.get("/", test);
router.post("/", register);

module.exports = router;
