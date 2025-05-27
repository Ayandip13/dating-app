const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "both"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    varificationToken: {
      type: String,
    },
    crushes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    recivedLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    profileImages: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    turnOns: [
      {
        type: String, //Array of string for turn ons
      },
    ],
    lookingFor: [
      {
        type: String, //Array of strings what they are looking for
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
