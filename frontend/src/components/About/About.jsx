import React from "react";

const About = () => (
  <div className="about-container bg-black text-white min-h-screen py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg text-center mb-12">
        Discover more about our mission, values, and the people who make our car rental service exceptional.
      </p>

      {/* Company Overview and Why Choose Us Section Side by Side */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        
        {/* Company Overview */}
        <div className="lg:w-1/2 p-6">
          <h2 className="text-3xl font-semibold mb-4">About Our Car Rental Company</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p>
              At our car rental company, we take pride in our commitment to excellence. Our fleet is meticulously maintained, and our team of experienced professionals is dedicated to ensuring your rental experience is seamless.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="lg:w-1/2 p-6">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Our Car Rental</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p>
              We take pride in our commitment to providing our customers with the best possible experience. We understand that renting a car can be a daunting task.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default About;
