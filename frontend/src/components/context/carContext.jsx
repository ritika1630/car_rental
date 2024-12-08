import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context with default value
const CarContext = createContext();

// Create a provider component
export const CarProvider = ({ children }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookedCar, setBookedCar] = useState(null); // bookedCar state for storing booked car

  return (
    <CarContext.Provider value={{ selectedCar, setSelectedCar, bookedCar, setBookedCar }}>
      {children}
    </CarContext.Provider>
  );
};

// Custom hook to use the CarContext
export const useCarContext = () => useContext(CarContext);
