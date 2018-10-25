const mongoose = require("mongoose");

let CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"]
  },
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story"
    }
  ]
});

module.exports = mongoose.model("Category", CategorySchema);
