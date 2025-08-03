const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

// Get all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

// Get car by ID
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ error: "Car not found" });
    res.json(car);
  } catch {
    res.status(500).json({ error: "Failed to fetch car details" });
  }
});

module.exports = router;
