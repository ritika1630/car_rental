import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return Boolean(sessionStorage.getItem("token"));
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Ensure that the dropdown closes when navigating
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [navigate]);

  // Check for token on mount and set authentication state
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      // Optionally fetch user data if it's not stored in context
      if (!user) {
        const storedUser = JSON.parse(sessionStorage.getItem("user"));
        if (storedUser) {
          // Update user context/state if needed
          // e.g., setUser(storedUser)
        }
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [navigate, user]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/">
              <span className="text-3xl font-bold font-serif">Rent Saathi</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              
              {/* Kept existing links */}
              <li className="py-4">
                <Link
                  to="/about"
                   className="text-lg font-medium py-2 hover:text-[#d47611] hover:border-b-2 hover:border-[#d47611] transition-colors duration-500"
                >
                  About
                </Link>
              </li>
              <li className="py-4">
                <Link
                  to="/cars"
                   className="text-lg font-medium py-2 hover:text-[#d47611] hover:border-b-2 hover:border-[#d47611] transition-colors duration-500"
                >
                  Cars
                </Link>
              </li>
              <li className="py-4">
                <Link
                  to="/booking"
                   className="text-lg font-medium py-2 hover:text-[#d47611] hover:border-b-2 hover:border-[#d47611] transition-colors duration-500"
                >
                  Booking
                </Link>
              </li>
              {/* New Contact Us link added at the end */}
              <li className="py-4">
                <Link
                  to="/contact"
                   className="text-lg font-medium py-2 hover:text-[#d47611] hover:border-b-2 hover:border-[#d47611] transition-colors duration-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Conditional User Dropdown or Login/Register */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative">
                {/* Dropdown Trigger */}
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="text-lg font-medium mr-2">
                    {user?.name || "User"}
                  </span>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-md w-48">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/booking-history"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Booking History
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                   className="text-lg font-medium py-2 hover:text-[#d47611] hover:border-b-2 hover:border-[#d47611] transition-colors duration-500"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#d47611] text-black px-4 py-2 rounded-md hover:bg-[#d47611]-dark transition-all duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
