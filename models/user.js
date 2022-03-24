const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  nom: String,
  prenom: String,
  addresse: String,
  mail: String,
  password: String,
  age: Number,
  phone: String,
});

module.exports = mongoose.model("User", userSchema);
