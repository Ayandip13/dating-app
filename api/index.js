const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();

const PORT = 3000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://ayandippaul284:xhtPX8icprcklYJd@cluster0.rwzyerq.mongodb.net/"
  ) //password might be wrong (so change it if not work)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch(() => {
    console.log("Error connecting to mongodb");
  });

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
