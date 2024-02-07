const express = require("express");
const router = express.Router();

const cors = require("cors");
const { test } = require("../Controller/authController");

router.get("/", test);
