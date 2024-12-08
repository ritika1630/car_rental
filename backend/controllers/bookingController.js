const Booking = require("../models/Booking");

const getBookingHistory = async (req, res) => {
  try {
    // Fetch all bookings for the user, and populate the car model
    const bookings = await Booking.find({ userId: req.user._id })
      .populate('car', 'model') // Populate the car field with only the model
      .exec();

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: "No bookings found for this user" });
    }

    // Return the booking history
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching booking history:", error);
    res.status(500).json({ error: "Failed to fetch booking history", details: error.message });
  }
};

module.exports = { getBookingHistory };
