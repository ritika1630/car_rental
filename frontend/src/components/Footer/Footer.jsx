import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <div className="bg-black text-white mt-0 ">
      <section className="container mx-auto py-10 px-5">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Details */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold flex items-center gap-3 font-serif text-primary">
              Rent Saathi
            </h1>
            <p className="text-gray-400">
              Discover top-quality cars at affordable prices for your next journey. We provide reliable, comfortable vehicles to make your travel experiences hassle-free.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:translate-x-1 duration-300 text-gray-400 hover:text-primary"
                >
                  <Link to={link.link} className="flex items-center gap-2">
                    <span className="text-primary">&#11162;</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-black py-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Rent Saathi. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;