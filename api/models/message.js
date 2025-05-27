const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  senderId: {
    type: String,
    required: true,
  },
  reciverId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  timeStamps: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
