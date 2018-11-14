const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

let CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    unique: true
  },
  created_at: { type: Date, required: true, default: Date.now }
});

CategorySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Category", CategorySchema);
