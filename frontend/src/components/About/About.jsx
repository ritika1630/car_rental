import React from "react";
import { useNavigate } from "react-router-dom"; // Add this import

const About = () => {
  const navigate = useNavigate();

  const redirectToCars = () => {
    navigate("/cars"); // Navigate to the car list page
  };
  
  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif pt-4rem">
      {/* Banner */}
      <div
        className="w-full h-[300px] bg-cover bg-center flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 25%), url('https://thumbs.dreamstime.com/b/banner-car-headlight-black-background-dealer-center-banner-car-headlight-black-background-dealer-center-advertising-sale-252417544.jpg')",
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
