const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

let UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The Name is required"]
  },
  lastName: {
    type: String,
    required: [true, "The LastName is required"]
  },
  avatar: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    required: [true, "The Email is required"],
    index: true,
    unique: true
  },
  password: {
    type: String,
    min: [3, "The password must have 3 or more characters"],
    required: [true, "The Password is required"]
  },
  role: {
    type: String,
    enum: ["admin", "member"],
    required: [true, "The Role is required"]
  },
  created_at: { type: Date, required: true, default: Date.now }
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);
