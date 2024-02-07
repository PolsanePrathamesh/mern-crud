const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 8000;

app.listen((port) => `port is running on ${port}`);
