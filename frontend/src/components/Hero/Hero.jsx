import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleBookRide = () => {
    navigate("/booking"); // Navigate to the booking page
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          {/* Image Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="sm:order-2 flex justify-center"
          >
            <img
              src={carPng}
              alt="Car Rental"
              className="w-full max-w-lg sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="sm:order-1 space-y-5">
            <p className="text-primary text-2xl font-serif">
              Drive Your Dream
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold font-serif leading-tight">
              Affordable Car Rentals
            </h1>
            <p className="text-lg">
              Experience hassle-free car rentals with a wide range of vehicles at your fingertips. Book your car now and enjoy a smooth, comfortable ride.
            </p>
            <button
              onClick={handleBookRide}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-white"
            >
              Book Your Ride
            </button>
          </div>
        </div>
      </div>

      <section>
        <div>
          
        </div>
      </section>

      {/* Contact Section
      <Contact /> */}
    </div>
  );
};

export default Hero;