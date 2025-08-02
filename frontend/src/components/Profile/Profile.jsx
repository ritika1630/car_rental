import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (e.g., if there's a valid token)
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.warn("No token found, redirecting to login.");
      navigate("/login", { state: { message: "Please log in to view your profile." } });
      return;
    }

    // Fetch user profile data
    const fetchUserData = async () => {
      try {
        console.log("Fetching user profile data...");
        const response = await fetch("http://localhost:5000/api/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // Include token in headers
            "Content-Type": "application/json",
          },
        });

        console.log("API Response Status:", response.status);

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched user data:", data);
          setUserData(data.user); // Assuming user data is nested under "user"
        } else {
          // Handle unauthorized or any other error responses
          const errorData = await response.json();
          console.error("Failed to fetch profile data:", errorData);
          setError(errorData.message || "Failed to fetch profile data.");
          // Redirect to login if unauthorized or an error occurs
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setError("An error occurred while fetching profile data.");
      } finally {
        setLoading(false); // Stop loading when data is fetched or error occurs
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
        <p className="text-xl">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
        <p className="text-xl">No user data found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
      <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl max-w-md w-full bg-[#f4f2f0] border border-[#e6e1db]">
        <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">
          User Profile
        </h2>
        <div className="space-y-4 text-[#181511] text-base leading-normal w-full mt-4">
          <p className="font-semibold"><strong>Name:</strong> {userData.name}</p>
          <p className="font-semibold"><strong>Email:</strong> {userData.email}</p>
          {/* You can add more fields as necessary */}
        </div>

        <div className="flex justify-center mt-6 w-full">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-[#d47611] text-white h-12 rounded-lg font-bold text-base transition-colors hover:bg-[#c36c10]"
          >
            <span className="truncate">Go to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
