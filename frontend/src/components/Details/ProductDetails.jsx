import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCarContext } from "../context/carContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { setBookedCar } = useCarContext();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:5000/api/cars/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product details:", err.message);
        setError("Failed to load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBookNow = () => {
    if (!product) return;

    // Set the selected car in context before navigating
    // This will be used by the Booking component
    setBookedCar({ carId: product._id, carModel: product.model });
    navigate("/booking");
  };

  if (loading) {
    return (
      <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
        <p className="text-xl">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
        <p className="text-xl">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col text-center items-center justify-center py-12">
          <div className="text-base pb-3">
            <span className="text-[#897761]">Cars / </span>
            <span>{product.model}</span>
          </div>
          <h1 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">
            Product Details
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 p-4 bg-[#f4f2f0] border border-[#e6e1db] rounded-2xl shadow-xl">
          <div className="lg:w-1/2 rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.model || "Product Image"}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.src = "https://placehold.co/600x400/f4f2f0/897761?text=Image+Not+Found";
              }}
            />
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[28px] font-bold tracking-[-0.015em] pb-2">
              {product.model}
            </h2>
            <p className="text-2xl text-[#d47611] font-semibold mb-4">
              ₹{product.price}
            </p>
            <p className="text-base font-normal leading-normal mb-6">
              {product.details}
            </p>
            <button
              onClick={handleBookNow}
              className="bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base transition-colors hover:bg-[#c36c10]"
            >
              <span className="truncate">Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
