import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hotel from "./assets/H.jpg";
import Pack from "./package.jsx";
import Contact from "./Contact.jsx";
import "./index.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden font-sans text-white"
      style={{
        backgroundImage: `url(${Hotel})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ✅ makes it stay while scrolling
        filter: "brightness(0.75)",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between text-white z-20 p-4 md:px-20">
        <h1 className="text-yellow-400 font-bold text-2xl">Tsedey Cafe</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/room" className="hover:text-yellow-400">
            Rooms
          </Link>
          <Link to="/package" className="hover:text-yellow-400">
            Packages
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
          <Link to="/signup" className="hover:text-yellow-400">
            Signup
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-black/90 text-white flex flex-col gap-4 p-6 rounded-l-lg z-30">
          <Link to="/room" className="hover:text-yellow-400">
            Rooms
          </Link>
          <Link to="/package" className="hover:text-yellow-400">
            Packages
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
          <Link to={"/signup"} className="hover:text-yellow-400">Signup</Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-start h-screen px-8 md:px-20">
        <div className="max-w-lg">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            LUXURY HOTELS <br />
            <span className="text-3xl font-light">from $100 / night</span>
          </h2>

          <p className="mt-6 text-gray-200 text-base leading-relaxed">
            Experience elegance, comfort, and world-class hospitality in the
            heart of the city. Tsedey Cafe welcomes you with luxury beyond
            expectations.
          </p>

          <Link to="/reservation">
            <button className="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full transition">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 w-full h-[2px] bg-yellow-500/50"></div>

      {/* Packages Section */}
      <section className="relative z-10 py-20 px-8 md:px-20 backdrop-blur-sm bg-black/30 rounded-2xl mx-auto my-12 max-w-6xl shadow-xl">
        <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
          Our Featured Packages
        </h3>
        <Pack preview />
        <div className="text-center mt-8">
          <Link to="/package">
            <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold">
              View All Packages
            </button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-8 md:px-20 backdrop-blur-sm bg-black/30 rounded-2xl mx-auto my-12 max-w-6xl shadow-xl text-center">
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">
          Contact Us
        </h3>
        <p className="text-gray-200 mb-10 max-w-2xl mx-auto">
          We're always happy to hear from you. For inquiries, reservations, or
          feedback, reach out using the form below.
        </p>
        <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-2xl">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/70 text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Tsedey Cafe — All rights reserved.
      </footer>
    </div>
  );
}
