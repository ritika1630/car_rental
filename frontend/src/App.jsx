import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CarList from "./components/CarList/CarList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Booking from "./components/Booking/Booking";
import BookingSummary from "./components/BookingSummary/BookingSummary";
// import HomePage from "./components/HomePage/HomePage"; // Assuming HomePage is the logged-in page
import { CarProvider } from "./components/context/carContext";
import { AuthProvider } from "./components/context/AuthContext";
import ScrollToTop from "./components/Scroll/ScrollToTop";
// import AuthComp from "./components/AuthComp";
import BookingHistory from './components/BookingHistory/BookingHistory';
import Profile from "./components/Profile/Profile";
import ProductDetails from "./components/Details/ProductDetails";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <AuthProvider>
      <CarProvider>
        <Router>
          <div className={`bg-white dark:bg-black dark:text-white text-black overflow-x-hidden`}>
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
              <Route path="/" element={<Hero theme={theme} />} />
              <Route path="/about" element={<About />} />
              <Route path="/cars" element={<CarList />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking-summary" element={<BookingSummary />} />
              <Route path="/booking-history" element={<BookingHistory />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/details/:id" element={<ProductDetails/>}/>
            </Routes>
            <Footer />
          </div>
          <ScrollToTop />
        </Router>
      </CarProvider>
    </AuthProvider>
  );
};

export default App;
