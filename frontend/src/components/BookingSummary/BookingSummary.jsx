import React from "react";
import { useCarContext } from "../context/carContext";
import { useNavigate } from "react-router-dom";

const BookingSummary = () => {
  const { bookedCar } = useCarContext(); // Get the booked car from context
  const navigate = useNavigate();

  if (!bookedCar) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p>No car has been booked yet.</p>
        <button
          className="mt-4 bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-md transition duration-300"
          onClick={() => navigate("/")}
        >
          Go back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-6 text-center">Booking Summary</h1>
        <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Car Model: {bookedCar.car.model}</h2>
          <p className="mb-2">Pickup Date: {bookedCar.pickupDate}</p>
          <p className="mb-2">Return Date: {bookedCar.returnDate}</p>
          <p className="mb-2">Name: {bookedCar.name}</p>
          <p className="mb-2">Email: {bookedCar.email}</p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-md transition duration-300"
            onClick={() => navigate("/")}
          >
            Go back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;