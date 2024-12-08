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
      navigate("/login"); // Redirect to login if not authenticated
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
          navigate("/login"); // Redirect to login if unauthorized
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
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>; // Display error message
  }

  if (!userData) {
    return <div>No user data found.</div>; // In case there is an issue or no data is returned
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div className="mt-6">
        <h2 className="text-2xl font-medium">User Information</h2>
        <div className="mt-4">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          {/* You can add more fields as necessary */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
