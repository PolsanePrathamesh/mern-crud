const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 8000;
// Enable CORS for all routes
// Enable CORS for specific origin and allow credentials
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Define route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => console.log(`port is running on port ${port}`));
