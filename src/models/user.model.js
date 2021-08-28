const mongoose = require("mongoose");

//Schema;
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: Number,
    password: String,
  },
  { versionKey: false }
);

//model;
const User = mongoose.model("user", userSchema);

module.exports = User;
