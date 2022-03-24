const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let localisationSchema = new Schema({
  ville: String,
  postalCode: Number,
  region: String,
  pays: String,
});

module.exports = mongoose.model("Localisation", localisationSchema);
