import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarContext } from "../context/carContext";

const Booking = () => {
  const { setBookedCar } = useCarContext();
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [carList, setCarList] = useState([]);
  const [selectedCar, setSelectedCar] = useState({ id: "", model: "" });
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchCarList = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cars");
        if (!response.ok) {
          throw new Error("Failed to fetch car list.");
        }
        const data = await response.json();

        if (data.cars && Array.isArray(data.cars)) {
          setCarList(data.cars);
        } else if (Array.isArray(data)) {
          setCarList(data);
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

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!selectedCar.id) {
      setMessage("Please select a car model before continuing.");
      return;
    }
    setMessage("");
    setStep(2);
  };

  const handleBooking = async (e) => {
    e.preventDefault();

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

    if (!pickupDate || !returnDate) {
      setMessage("Please fill in the pickup and return dates.");
      return;
    }

    if (new Date(pickupDate) >= new Date(returnDate)) {
      setMessage("Return date must be later than pickup date.");
      return;
    }

    setLoading(true);
    setMessage("");

    const bookingDetails = {
      car: selectedCar.id, // Corrected key name from 'carId' to 'car'
      pickupDate,
      returnDate,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

      setBookedCar({ ...bookingDetails, carModel: selectedCar.model });
      setTimeout(() => {
        setLoading(false);
        navigate("/booking-summary");
      }, 2000);
    } catch (error) {
      console.error("Error during booking:", error);
      // More specific error message
      setMessage(`Error: ${error.message || "An error occurred. Please try again."}`);
      setLoading(false);
    }
  };

  const handlePickupDateChange = (e) => {
    const newPickupDate = e.target.value;
    setPickupDate(newPickupDate);
    setReturnDate(newPickupDate);
  };

  const handleReturnDateChange = (e) => {
    const selectedReturnDate = e.target.value;

    if (!pickupDate) {
      setMessage("Please select a pickup date first.");
      setReturnDate("");
      return;
    }

    const pickupDateObj = new Date(pickupDate);
    pickupDateObj.setDate(pickupDateObj.getDate() + 1);
    const nextDay = pickupDateObj.toISOString().split("T")[0];

    if (selectedReturnDate === pickupDate || selectedReturnDate === nextDay) {
      setReturnDate(selectedReturnDate);
    } else {
      setMessage("Return date must be either the pickup date or the next day.");
      setReturnDate("");
    }
  };

  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif">
      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col text-center items-center justify-center py-12">
          {/* Updated heading style to match About page */}
          <h1 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Book Your Classic Ride</h1>
          {/* Updated paragraph style to match About page */}
          <p className="text-base pb-3 max-w-2xl">
            Select a vehicle and your rental dates to get started.
          </p>
        </div>

        <form onSubmit={step === 2 ? handleBooking : handleNextStep}>
          {message && (
            <div
              className={`mt-4 text-center px-4 ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}

          <div className="w-full max-w-lg mx-auto p-8 rounded-2xl shadow-xl bg-[#f4f2f0] border border-[#e6e1db]">
            <div className="flex flex-col gap-3 pb-6">
              <div className="flex gap-6 justify-between">
                {step === 1 ? (
                  <p className="text-sm font-medium text-[#181511]">Step 1 of 2: Select Your Car</p>
                ) : (
                  <p className="text-sm font-medium text-[#181511]">Step 2 of 2: Select Dates</p>
                )}
              </div>
              <div className="rounded bg-[#e6e1db]">
                <div className="h-2 rounded bg-[#d47611]" style={{ width: `${step === 1 ? '50%' : '100%'}` }}></div>
              </div>
            </div>

            {step === 1 && (
              <>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">Car Selection</h3>
                <div className="flex flex-wrap items-end gap-4 py-3">
                  <label className="flex flex-col flex-1">
                    <p className="text-base font-medium leading-normal pb-2">Car Model</p>
                    <select
                      value={selectedCar.id}
                      onChange={(e) => {
                        const carId = e.target.value;
                        const car = carList.find(c => c._id === carId);
                        setSelectedCar(car ? { id: car._id, model: car.model } : { id: "", model: "" });
                      }}
                      className="w-full px-5 py-3 border border-[#e6e1db] rounded-lg bg-white text-[#181511] placeholder-[#897761] focus:ring-2 focus:ring-[#d47911] focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select a car model</option>
                      {carList.length === 0 ? (
                        <option value="" disabled>Loading cars...</option>
                      ) : (
                        carList.map((car) => (
                          <option key={car._id} value={car._id}>
                            {car.model}
                          </option>
                        ))
                      )}
                    </select>
                  </label>
                </div>
                <div className="flex py-3 justify-end">
                  <button
                    type="submit"
                    className="bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base"
                  >
                    <span className="truncate">Continue</span>
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">Rental Dates</h3>
                <div className="flex flex-wrap items-end gap-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-base font-medium leading-normal pb-2">Pickup Date</p>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={handlePickupDateChange}
                      min={today}
                      className="w-full px-5 py-3 border border-[#e6e1db] rounded-lg bg-white text-[#181511] placeholder-[#897761] focus:ring-2 focus:ring-[#d47911] focus:outline-none transition-colors"
                      required
                    />
                  </label>
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-base font-medium leading-normal pb-2">Return Date</p>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={handleReturnDateChange}
                      min={pickupDate}
                      className="w-full px-5 py-3 border border-[#e6e1db] rounded-lg bg-white text-[#181511] placeholder-[#897761] focus:ring-2 focus:ring-[#d47911] focus:outline-none transition-colors"
                      required
                    />
                  </label>
                </div>
                <div className="flex py-3 justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-gray-200 text-[#181511] px-5 h-12 rounded-lg font-bold text-base"
                  >
                    <span className="truncate">Back</span>
                  </button>
                  <button
                    type="submit"
                    className="bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base"
                    disabled={loading}
                  >
                    <span className="truncate">{loading ? "Processing..." : "Book Now"}</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
