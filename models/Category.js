const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

let CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    unique: true
  }
});

CategorySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Category", CategorySchema);
