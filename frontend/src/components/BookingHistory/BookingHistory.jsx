import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        setError("Please log in to view your booking history.");
        setLoading(false);
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/bookings/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Failed to fetch bookings: ${response.statusText}`);
        }

        const data = await response.json();
        // Log the data to the console to inspect the API response structure
        console.log("Received booking data from API:", data);
        setBookings(data);
      } catch (error) {
        console.error("Error fetching booking history:", error);
        setError(error.message || "An error occurred while fetching your booking history.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [navigate]);

  if (loading) {
    return (
      <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
        <p className="text-xl">Loading booking history...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif">
      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col text-center items-center justify-center py-12">
          {/* Updated heading style to match About page */}
          <h1 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Booking History</h1>
        </div>

        {bookings.length === 0 ? (
          <div className="max-w-lg mx-auto p-8 rounded-2xl shadow-xl bg-[#f4f2f0] border border-[#e6e1db] mt-6 w-full text-center">
            <p className="text-[#181511] text-base pb-3 max-w-2xl">
              No bookings found.
            </p>
          </div>
        ) : (
          <div className="space-y-6 mt-6">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="p-6 rounded-2xl shadow-xl bg-[#f4f2f0] border border-[#e6e1db]"
              >
                <h2 className="text-[22px] font-bold tracking-[-0.015em] pb-3">
                  {booking.car?.model || `Car ID: ${booking.car || 'N/A'}`}
                </h2>
                <p className="text-base pb-3">
                  <strong>Start Date:</strong> {new Date(booking.pickupDate).toLocaleDateString()}
                </p>
                <p className="text-base pb-3">
                  <strong>End Date:</strong> {new Date(booking.returnDate).toLocaleDateString()}
                </p>
                <p className="text-base pb-3">
                  <strong>Total Amount:</strong> ₹{booking.totalAmount ? booking.totalAmount : 'Not Available'}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base"
          >
            <span className="truncate">Go to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
