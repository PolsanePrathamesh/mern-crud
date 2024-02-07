const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 8000;
// Enable CORS for all routes
app.use(cors());

// Define route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => console.log(`port is running on port ${port}`));
