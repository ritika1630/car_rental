import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../context/carContext';

const CarList = () => {
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { setSelectedCar } = useCarContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Use Vite's environment variable format
        const response = await fetch(import.meta.env.VITE_API_URL || 'http://localhost:5000/api/cars'); // Update with your backend API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const cars = await response.json();
        setCarList(cars);
      } catch (err) {
        console.error('Error fetching data:', err.message);
        setError('Failed to load cars. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleCarClick = (car) => {
    setSelectedCar(car);
    navigate('/booking');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-6 text-center">Available Cars</h1>
        <p className="text-sm mb-12 text-center">Explore our range of cars available for rent. Click on 'Details' for more information.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {carList.map((data) => (
            <div
              key={data._id || data.id}  // Ensure the key is unique (use _id if available)
              onClick={() => handleCarClick(data)}
              className="bg-black border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 relative group cursor-pointer"
            >
              <div className="w-full h-48 mb-4">
                <img
                  src={data.image}
                  alt={data.model}
                  className="w-full h-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-primary">{data.model}</h2>
                <div className="flex justify-between items-center text-xl font-semibold">
                  <p>₹{data.price}/- Per Day</p>
                  <a href="#" className="text-primary hover:underline">Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;
