const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("./models/user.js");

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

// endpoint to register the user in the backend

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User is already exist" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    //generate the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the user to the backend
    await newUser.save();

    // send the verification token to the registered user
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(200).json({
      message:
        "User registered successfully. Please check your email to verify your account.",
    });
  } catch (error) {
    console.log("Error registering the user", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

const sendVerificationEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ayandippaul284@gmail.com",
      pass: "twth vuib gzus lbav",
    },
  });

  const mailOptions = {
    from: "MatchMake <ayandippaul284@gmail.com>",
    to: email,
    subject: "Email verification",
    text: `Please click on the following link to verify the email :http://localhost:3000/verify/${verificationToken}`,
  };

  //send the mail
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending the verification email");
  }
};

//verify the user
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    //mark the user is verified

    user.verified = true;
    user.verificationToken = undefined;

    await user.save();
    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Email verification failed" });
  }
});
