import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = localStorage.getItem("emailForOtp");


  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Account verified successfully!");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        setError(data.message);
      }
    } catch {
      setError("An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[#181511] font-serif">
      <form onSubmit={handleVerify} className="bg-[#f4f2f0] border p-8 rounded-xl max-w-md w-full shadow-lg">
        <h2 className="text-[22px] font-bold mb-4">Verify Your Account</h2>
        {success && <p className="text-green-600 mb-4">{success}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-3 border rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#d47611] text-white h-12 rounded-lg font-bold hover:bg-[#c36c10]"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
