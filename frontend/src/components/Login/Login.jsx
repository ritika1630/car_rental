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
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("API Response Status:", response.status);

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful, received token:", data.token);
        login(data.user);
        sessionStorage.setItem("token", data.token);
        navigate(from);
      } else {
        console.error("Login failed:", data.message);
        setError(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred while logging in:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center">
      <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl max-w-md w-full bg-[#f4f2f0] border border-[#e6e1db]">
        <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">
          Log In
        </h2>
        {message && <p className="text-blue-500 text-sm mb-4">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4">
            <label className="block text-[#181511] text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-[#e6e1db] bg-white text-[#181511] placeholder-[#897761] focus:outline-none focus:ring-2 focus:ring-[#d47611]"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#181511] text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-[#e6e1db] bg-white text-[#181511] placeholder-[#897761] focus:outline-none focus:ring-2 focus:ring-[#d47611]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#d47611] text-white h-12 rounded-lg font-bold text-base transition-colors hover:bg-[#c36c10]"
          >
            <span className="truncate">Login</span>
          </button>
        </form>
        <div className="mt-4 text-center text-[#181511] text-sm">
          Don't have an account? <a onClick={() => navigate("/register")} className="underline cursor-pointer text-[#d47611]">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
