const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

let UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "The name is required"]
  },
  avatar: {
    type: String //not implemented
  },
  email: {
    type: String,
    required: [true, "The email is required"],
    index: true,
    unique: true
  },
  password: {
    type: String,
    min: [3, "The password must have 3 or more characters"],
    required: [true, "The password is required"]
  },
  role: {
    type: String,
    enum: ["admin", "member"],
    required: [true, "The role is required"]
  },
  notifications: [
    {
      text: String,
      hasSeen: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        enum: ["like", "comment"]
      }
    }
  ],
  created_at: { type: Date, required: true, default: Date.now }
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);
