const mongoose = require("mongoose");

let StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title is required"]
  },
  image: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now,
    required: [true, "The date is required"]
  },
  content: {
    type: String,
    default: ""
  },
  likes: {
    type: Number,
    default: 0
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "The User is required"]
  },
  created_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model("Story", StorySchema);
