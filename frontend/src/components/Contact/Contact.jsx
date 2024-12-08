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
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold font-serif mb-6">
          Contact Us
        </h2>
        <p className="text-lg mb-12">
          Have questions? We're here to help. Reach out to us using the form below or through our social media channels.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-gray-900 border border-gray-700 rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:outline-none"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
            {isSubmitted && (
              <p className="mt-4 text-green-400">
                Your message has been submitted successfully!
              </p>
            )}
            {error && (
              <p className="mt-4 text-red-400">
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