import React from "react";
import { useCarContext } from "../context/carContext";
import { useNavigate } from "react-router-dom";

const BookingSummary = () => {
  const { bookedCar } = useCarContext();
  const navigate = useNavigate();

  // Updated fallback view to match the site theme
  if (!bookedCar) {
    return (
      <div className="bg-white text-[#181511] min-h-screen font-serif flex flex-col items-center justify-center">
        <p className="text-xl mb-6">No car has been booked yet.</p>
        <button
          className="bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base"
          onClick={() => navigate("/")}
        >
          <span className="truncate">Go back to Home</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif">
      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col text-center items-center justify-center py-12">
          {/* Updated heading style to match About page */}
          <h1 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Booking Summary</h1>
        </div>

        <div className="max-w-lg mx-auto p-8 rounded-2xl shadow-xl bg-[#f4f2f0] border border-[#e6e1db] mt-6">
          <h3 className="text-[22px] font-bold tracking-[-0.015em] pb-3">
            Booking Details
          </h3>
          
          <div className="space-y-4 text-base pb-3">
            <p><strong>Car Model:</strong> {bookedCar.carModel}</p>
            <p><strong>Pickup Date:</strong> {bookedCar.pickupDate}</p>
            <p><strong>Return Date:</strong> {bookedCar.returnDate}</p>
          </div>

        </div>
        
        <div className="flex justify-center mt-6">
          <button
            className="bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base"
            onClick={() => navigate("/")}
          >
            <span className="truncate">Go back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
