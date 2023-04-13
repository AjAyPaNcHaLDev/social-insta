const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: Number },
  email: { type: String },
  username: { type: String },
  password: { type: String },
  fbUserID: { type: Number },
});

const user = mongoose.model("USER", userSchema);
module.exports = user;
