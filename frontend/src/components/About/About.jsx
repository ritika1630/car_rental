import React from "react";

const About = () => (
  <div className="bg-white text-[#181511] min-h-screen font-serif">
    {/* Banner */}
    <div
      className="bg-cover bg-center min-h-[218px] flex items-end"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 25%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjPmuqF7Jtx4_V6Ok9610cGUX4S_7lPuKzkAIUgjcUzyhibo4lwi_q1wpFbZWHqAEqX8smXjT91TN48a2rD2WXYqxAC8SeBUPW_akD7q8hbiJ6P-doKArOBtTgCYrBVSluC8gV43-01rNu7Tj9FACqm7L1d29R7-1a52Cm7QRM7htkoJ1rVdrCRpDAFRUOYw6dhfspFbfPF24s3xWb_rXhx54iCGOcqjA2Z2g4bKAl7kxzDO2cqvYYLwJweun7X366WRduZAx27sB6')",
      }}
    >
      <div className="p-4">
        <p className="text-white text-[28px] font-bold">About Classic Rides</p>
      </div>
    </div>

    {/* Content Container */}
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Our Story */}
      <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Our Story</h2>
      <p className="text-base pb-3">
        Classic Rides was founded in 2010 by Amelia Stone, a passionate vintage car enthusiast. What started as a small collection of meticulously restored vehicles has grown into a premier rental service, offering a unique experience for those who appreciate the elegance and history of classic automobiles. Our journey is driven by a love for these timeless machines and a desire to share their beauty with others.
      </p>

      {/* Our Mission */}
      <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Our Mission</h2>
      <p className="text-base pb-3">
        Our mission is to provide an unforgettable experience by offering a curated selection of vintage cars, maintained to the highest standards. We aim to blend the charm of the past with modern convenience, ensuring every rental is seamless and memorable. We are committed to preserving automotive history and making it accessible to enthusiasts and those seeking a unique adventure.
      </p>

      {/* Our Values */}
      <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Our Values</h2>
      <p className="text-base pb-3">
        At Classic Rides, we are guided by our core values: Passion, Integrity, Excellence, and Customer Satisfaction. We are passionate about vintage cars and dedicated to providing exceptional service. We operate with integrity, ensuring transparency and trust in all our interactions. We strive for excellence in every aspect of our business, from vehicle maintenance to customer support. Above all, we are committed to ensuring our customers have a truly satisfying and memorable experience.
      </p>

      {/* Our Collection */}
      <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Our Collection</h2>
      <p className="text-base pb-3">
        Our collection features a diverse range of meticulously restored vintage cars, each with its own unique story and character. From classic roadsters to elegant sedans, we have the perfect vehicle for any occasion. Explore our fleet and discover the timeless beauty of automotive history.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4">
        {["https://lh3.googleusercontent.com/aida-public/AB6AXuBIpjWTAsVk4FATyiwEi-75jcN_ALvNV3HPvgLmQ4oMXV8f8gTVrbssoZDEdV7lN0gSUI99OfjoXzIFkydZHsycy1nCKVsF-6zqyrfnorVaxft9R44gDNFjXbfOnRlhhXEF4k3ndY3FjMa6RzETG79sNj4sYUJqDhHXVy014v-zmpYeAjQfmMkLXpMrsjl2EKFeq3pzeMN9UGoDBfW3idJPRQ6SjrsAo0HKrMzaQiAZpKp8rDHJXqassFi_b-CV2EO53-d2HSG7CcwY",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDUHj7-Co_PPdp3LwKoAI0OgVq0ZBvoYMXdqja5mCfm-WdtNSU9PEjP0nD3NZJYh9iEUtmvBglnzfLrury5mVv8JSYriI1Yv9gVAaCERwDi0O502nyOFJemc3arrShJ8BRxbw69FuQ4GbOThPf6pGADZenYGuO760WYk1bGdfPKviVZPj8goa6h_HKoCFOyJpljR2anDlOgPKV6aljcbGyuigIZ0ScqCjn6oRyNb-UKYbgaprgwr5vnR7NTq9njsQTMUr_wY5OPQRIL",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAgCso6SkAoQrb85JA4pjNctcsCDgPNY8iOIb_RE3fWnmlHC6H7QDLc1lR0KOuRpZB7wam17yLeFg_wGh9Ldg69AH9ky2bW8EhYAoAlCgdomwaAtXnC1xVl42X_YB8CR1IMqgqxO_mGl3yYA2aPFrF93RZaKfhtojL60eQXROerZOQuK5dCa-rPslOZjyaHu4NWJ4_Woc20X1XJoFsG1YAjyrmbGw5ZKagJWRoGTW-Im8soqIVn3uId5T5-eK6ixHx8sDBSBX-RFb2J"]
          .map((url, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div
                className="w-full aspect-video bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            </div>
          ))
        }
      </div>

      {/* Call to Action */}
      <div className="flex justify-center py-4">
        <button className="bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base">
          Explore Our Vehicles
        </button>
      </div>
    </div>
  </div>
);

export default About;
