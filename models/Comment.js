const mongoose = require("mongoose");

let CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "The content is required"]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "The User is required"]
  },
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Story",
    required: [true, "The Story is required"]
  },
  created_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model("Comment", CommentSchema);
