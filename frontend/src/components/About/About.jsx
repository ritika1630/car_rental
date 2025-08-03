import React from "react";
import { useNavigate } from "react-router-dom"; // Add this import

const About = () => {
  const navigate = useNavigate();

  const redirectToCars = () => {
    navigate("/cars"); // Navigate to the car list page
  };
  
  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif">
      {/* Banner */}
      <div
        className="bg-cover bg-center min-h-[218px] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 25%), url('data:image/jpeg;base64,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')",
        }}
        role="img"
        aria-label="Classic car banner"
      >
        <div className="p-4">
          <p className="text-white text-[28px] font-bold">About Rent Saathi</p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Our Story */}
        <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Our Story</h2>
        <p className="text-base pb-3">
          Rent Saathi, what started as a small collection of meticulously restored vehicles has grown into a premier rental service, offering a unique experience for those who appreciate the elegance classic automobiles. Our journey is driven by a love for these timeless machines and a desire to share their beauty with others.
        </p>

        {/* Our Mission */}
        <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Our Mission</h2>
        <p className="text-base pb-3">
          Our mission is to provide an unforgettable experience by offering a curated selection of cars, maintained to the highest standards. We aim to blend the charm of the past with modern convenience, ensuring every rental is seamless and memorable. We are committed to preserving automotive history and making it accessible to enthusiasts and those seeking a unique adventure.
        </p>

        {/* Our Values */}
        <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Our Values</h2>
        <p className="text-base pb-3">
          At Rent Saathi, we are guided by our core values: Passion, Integrity, Excellence, and Customer Satisfaction. We are passionate about cars and dedicated to providing exceptional service. We operate with integrity, ensuring transparency and trust in all our interactions. We strive for excellence in every aspect of our business, from vehicle maintenance to customer support. Above all, we are committed to ensuring our customers have a truly satisfying and memorable experience.
        </p>

        {/* Our Collection */}
        <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Our Collection</h2>
        <p className="text-base pb-3">
          Our collection features a diverse range of meticulously restored cars, each with its own unique story and character. From classic roadsters to elegant sedans, we have the perfect vehicle for any occasion. Explore our fleet and discover the timeless beauty of automotive history.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4">
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpfKuCaQOqsen9VH2EPg739owlL7czO3200yLsi02OT4Dig3nKRJRw-2NuQX6heiJ1mKo&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuzX-KIbJvvo4UIVacxvRBxXJF9kjFZv0QFZRcnBP8DFqdy4h6l18WLEG4huS8WKG1gI&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSNjzmNyS3rkvKPfw7W2VwRaBuZuVYBU5g7PINIgmPrpXJsi7tYghDI2_crxEOwaspxI&usqp=CAU",
          ].map((url, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div
                className="w-full aspect-video bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${url})` }}
                role="img"
                aria-label={`Classic car photo ${i + 1}`}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center py-4">
          <button 
            onClick={redirectToCars}
            className="bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base"
          >
            Explore Our Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
