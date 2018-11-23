const mongoose = require("mongoose");

let StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title is required"]
  },
  coverImage: {
    type: String //not implemented
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String
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
      content: {
        type: String,
        required: [true, "You must write something"]
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    }
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Who is this story?"]
  },
  created_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model("Story", StorySchema);
