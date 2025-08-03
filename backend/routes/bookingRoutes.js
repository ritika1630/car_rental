const express = require("express");
const Booking = require("../models/Booking"); // Assuming you have a Booking model
const authMiddleware = require("../middleware/authMiddleware"); // Auth middleware for JWT verification
const { getBookingHistory } = require("../controllers/bookingController");
const router = express.Router();

router.post("/add", authMiddleware, async (req, res) => {
  try {
    // Log the user to check if it's attached to the request
    console.log("Booking request received, user:", req.user); // Debugging line
    
    const { car, pickupDate, returnDate } = req.body;

    // Validate required fields
    if (!car || !pickupDate || !returnDate) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user is available before creating the booking
    if (!req.user) {
      return res.status(401).json({ error: "User not found in request" });
    }

    const booking = new Booking({
      userId: req.user._id, // Use _id to reference the user
      car,
      pickupDate,
      returnDate,
    });

    await booking.save();
    res.status(201).json({ message: "Booking added successfully" });
  } catch (error) {
    console.error("Error adding booking:", error);
    res.status(500).json({ error: "Failed to add booking", details: error.message });
  }
});



// Get booking history for a user
router.get('/user', authMiddleware, getBookingHistory);

module.exports = router;
