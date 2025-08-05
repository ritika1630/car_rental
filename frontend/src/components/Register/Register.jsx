import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      if (res.data.success) {
        localStorage.setItem("emailForOtp", formData.email);
        navigate("/verify-otp");
      } else {
        setError(res.data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif flex items-center justify-center pt-20 pb-20">
      <div className="flex flex-col items-center p-8 rounded-2xl shadow-xl max-w-md w-full bg-[#f4f2f0] border border-[#e6e1db]">
        <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">
          Register
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block text-[#181511] text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-[#e6e1db] bg-white text-[#181511] placeholder-[#897761] focus:outline-none focus:ring-2 focus:ring-[#d47611]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#181511] text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-[#e6e1db] bg-white text-[#181511] placeholder-[#897761] focus:outline-none focus:ring-2 focus:ring-[#d47611]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#181511] text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-[#e6e1db] bg-white text-[#181511] placeholder-[#897761] focus:outline-none focus:ring-2 focus:ring-[#d47611]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#d47611] text-white h-12 rounded-lg font-bold text-base transition-colors hover:bg-[#c36c10]"
          >
            <span className="truncate">Send OTP</span>
          </button>
        </form>
        <div className="mt-4 text-center text-[#181511] text-sm">
          Already have an account?{" "}
          <a
            onClick={() => navigate("/login")}
            className="underline cursor-pointer text-[#d47611]"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
