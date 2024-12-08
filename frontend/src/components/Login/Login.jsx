import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const message = location.state?.message;
  const from = location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make API request for login
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Debugging: log response status and body
      console.log("API Response Status:", response.status);

      const data = await response.json();
      
      if (response.ok) {
        // Handle successful login
        console.log("Login successful, received token:", data.token);
        login(data.user);
        
        // Save token in sessionStorage
        sessionStorage.setItem("token", data.token);
        navigate(from);
      } else {
        // Handle errors (e.g., invalid credentials)
        console.error("Login failed:", data.message);
        setError(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("An error occurred while logging in:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {message && <p className="text-blue-400 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-900 text-gray-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-900 text-gray-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
