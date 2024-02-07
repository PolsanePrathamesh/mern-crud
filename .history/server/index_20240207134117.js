const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authRouter = require("./Routes/authRoute");
const { mongoose } = require("mongoose");

const cookieParser = require("cookie-parser");

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Mongoose"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(cookieParser);
app.use(express.u)
const port = 8000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", authRouter);

app.listen(port, () => console.log(`port is running on port ${port}`));
