const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  model: String,
  year: Number,
  image: String,
  price: Number,
  details: String,
});

const Car = mongoose.models.Car || mongoose.model("Car", CarSchema);
module.exports = Car;
