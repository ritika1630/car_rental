import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarContext } from "../context/carContext";

const Booking = () => {
  const { selectedCar, setBookedCar } = useCarContext(); // Access booking context
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Confirmation or error message
  const [loading, setLoading] = useState(false); // Loading state
  const [carList, setCarList] = useState([]); // State to store available cars
  const [selectedCarModel, setSelectedCarModel] = useState(""); // Selected car model
  const navigate = useNavigate();

  // Fetch car list from your API or JSON file
  useEffect(() => {
    const fetchCarList = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cars"); // Update this URL if needed
        if (!response.ok) {
          throw new Error("Failed to fetch car list.");
        }
        const data = await response.json();

        console.log("API Response:", data); // Log the entire response to check its structure

        // Check if the response contains the correct car list format
        if (data.cars && Array.isArray(data.cars)) {
          setCarList(data.cars); // Assuming the response contains a 'cars' array
        } else if (Array.isArray(data)) {
          setCarList(data); // Direct array response
        } else {
          setMessage("No cars available.");
        }
      } catch (error) {
        console.error("Error fetching car list:", error);
        setMessage("Failed to load available cars.");
      }
    };

    fetchCarList();
  }, []);

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login", {
        state: {
          from: "/booking",
          message: "Please log in to book a car.",
        },
      });
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Validate date inputs
    if (new Date(pickupDate) >= new Date(returnDate)) {
      setMessage("Return date must be later than pickup date.");
      return;
    }

    // Check if all fields are filled
    if (!name || !email || !pickupDate || !returnDate || !selectedCarModel) {
      setMessage("Please fill all the fields.");
      return;
    }

    setLoading(true); // Start loading state
    setMessage(""); // Clear previous messages

    const bookingDetails = {
      car: selectedCarModel,
      pickupDate,
      returnDate,
      name,
      email,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send token for authentication
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit booking.");
      }

      const data = await response.json();
      if (data && data.message) {
        setMessage(data.message);
      } else {
        setMessage("Booking successful! Redirecting to summary...");
      }

      setBookedCar(bookingDetails);
      setTimeout(() => {
        setLoading(false);
        navigate("/booking-summary");
      }, 2000);
    } catch (error) {
      console.error("Error during booking:", error);
      setMessage(`Error: ${error.message || "An error occurred. Please try again."}`);
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Book a Car</h2>
        <form onSubmit={handleBooking}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">Car Model</label>
            {/* Car Model Dropdown */}
            <select
              value={selectedCarModel}
              onChange={(e) => setSelectedCarModel(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-900 text-gray-300"
              required
            >
              <option value="">Select a car model</option>
              {carList.length === 0 ? (
                <option value="">Loading cars...</option>
              ) : (
                carList.map((car) => (
                  <option key={car._id} value={car.model}>
                    {car.model}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Other fields like Pickup Date, Return Date, Name, and Email */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">Pickup Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-900 text-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-900 text-gray-300"
              required
            />
          </div>

          {/* <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-900 text-gray-300"
              placeholder="Enter your name"
              required
            />
          </div> */}

          {/* <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-900 text-gray-300"
              placeholder="Enter your email"
              required
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-md transition duration-300"
            disabled={loading}
          >
            {loading ? "Processing..." : "Book Now"}
          </button>

          {message && (
            <div
              className={`mt-4 text-center ${message.includes("success") ? "text-green-500" : "text-red-500"}`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Booking;
