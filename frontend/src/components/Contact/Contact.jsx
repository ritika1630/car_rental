import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      await axios.post('http://localhost:5000/api/contact', { name, email, message });
      setIsSubmitted(true);
      setError(null);
      e.target.reset();
    } catch (err) {
      setError("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="bg-white text-[#181511] min-h-screen font-serif">
      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col text-center items-center justify-center py-12">
          {/* Updated heading style to match About page */}
          <h1 className="text-[22px] font-bold tracking-[-0.015em] pt-5 pb-3">Contact Us</h1>
          {/* Updated paragraph style to match About page */}
          <p className="text-base pb-3 max-w-2xl">
            We'd love to hear from you! Please fill out the form below and we'll get in touch with you as soon as possible.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg p-8 rounded-2xl shadow-xl bg-[#f4f2f0] border border-[#e6e1db]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-[#181511] block mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-5 py-3 border border-[#e6e1db] rounded-xl bg-white text-[#181511] placeholder-[#897761] focus:ring-2 focus:ring-[#d47911] focus:outline-none transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-[#181511] block mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-5 py-3 border border-[#e6e1db] rounded-xl bg-white text-[#181511] placeholder-[#897761] focus:ring-2 focus:ring-[#d47911] focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-[#181511] block mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-5 py-3 border border-[#e6e1db] rounded-xl bg-white text-[#181511] placeholder-[#897761] focus:ring-2 focus:ring-[#d47911] focus:outline-none transition-colors"
                  rows="5"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                // Updated button style to match About page
                className="w-full bg-[#d47611] text-white px-5 h-12 rounded-lg font-bold text-base"
              >
                Send Message
              </button>
            </form>
            {isSubmitted && (
              <p className="mt-6 text-green-600 text-center">
                Your message has been submitted successfully!
              </p>
            )}
            {error && (
              <p className="mt-6 text-red-600 text-center">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
