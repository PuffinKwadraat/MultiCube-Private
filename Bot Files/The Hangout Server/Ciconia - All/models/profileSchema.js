const config = require("../Other/config.js");
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: false },
  name: { type: String },
  avatar: { type: String },
  banner: { type: String },
  bot: { type: Boolean },
  tag: { type: Number },
});
mongoose.pluralize(null);

const model = mongoose.model("Profile", profileSchema);

module.exports = model;