const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 8000;
app.use("/", require("./Routes/authRoute"));

app.listen(port, () => console.log(`port is running on port ${port}`));
