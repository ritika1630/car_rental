import React, { useEffect, useState } from 'react';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchBookings = async () => {
      const token = sessionStorage.getItem("token");
      
      if (!token) {
        setError("Please log in to view your booking history.");
        setLoading(false);
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
    
        console.log(response); // Log the response to check the status and body
        
        if (!response.ok) {
          throw new Error(`Failed to fetch bookings: ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log(data); // Check if the structure of data is as expected
        setBookings(data);
      } catch (error) {
        console.error("Error fetching booking history:", error);
        setError("An error occurred while fetching your booking history.");
      } finally {
        setLoading(false);
      }
    };
    
    
    fetchBookings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>; // Display error message if any

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          <ul>
          {bookings.map((booking) => (
  <li key={booking._id} className="mb-4">
    <h2 className="text-lg font-semibold">{booking.car?.model}</h2> {/* Access car.model safely */}
    <p>Start Date: {new Date(booking.pickupDate).toLocaleDateString()}</p>
    <p>End Date: {new Date(booking.returnDate).toLocaleDateString()}</p>
    <p>Total Amount: ₹{booking.totalAmount ? booking.totalAmount : 'Not Available'}</p>
  </li>
))}

</ul>

        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
