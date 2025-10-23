// Package.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// images
import Bd1 from "./assets/Bd.jpg";
import m1 from "./assets/meeting.jpg";
import gym1 from "./assets/Gym.webp";
import wd from "./assets/wedding.webp";

// package data
const packagesData = [
  {
    id: "birthday",
    title: "Birthday Celebration",
    subtitle: "Decor • Cake • Photo spots",
    price: "$350",
    image: Bd1,
    blurb:
      "Full birthday package: themed décor, cake service, music and photo corners — perfect for memorable parties.",
    features: [
      "Themed décor",
      "Cake (size options)",
      "DJ or playlist",
      "Photo corner",
    ],
  },
  {
    id: "meeting",
    title: "Meeting & Conference",
    subtitle: "AV • Seating • Catering",
    price: "$250 / day",
    image: m1,
    blurb:
      "Modern meeting rooms with projector, sound, and flexible seating. Ideal for trainings, seminars and corporate events.",
    features: [
      "Projector & screen",
      "Sound system",
      "Catering options",
      "High-speed Wi-Fi",
    ],
  },
  {
    id: "gym",
    title: "Gym & Wellness",
    subtitle: "Short-term access or private sessions",
    price: "$15 / day",
    image: gym1,
    blurb:
      "Modern fitness center — drop-in or private trainer available. Towels and water provided.",
    features: [
      "Cardio machines",
      "Free weights",
      "Personal trainer (optional)",
      "Sauna access",
    ],
  },
  {
    id: "wedding",
    title: "Weddings & Celebrations",
    subtitle: "Venue • Catering • Photography",
    price: "From $2,000",
    image: wd,
    blurb:
      "End-to-end wedding planning support: venue styling, catering, and photography packages to create a beautiful day.",
    features: [
      "Full venue styling",
      "Catering menus",
      "Photography packages",
      "Dance floor & lighting",
    ],
  },
];

export default function Package() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleBook = (pkgId) => {
    if (pkgId === "birthday") navigate("/birthday");
    else if (pkgId === "meeting") navigate("/meeting");
    else if (pkgId === "gym") navigate("/gym");
    else if (pkgId === "wedding") navigate("/wedding");
  };

  return (
    <div className="w-full relative z-10 text-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-yellow-800 drop-shadow-lg">
              Packages & Experiences
            </h1>
            <p className="mt-4 text-lg text-yellow-900 max-w-xl leading-relaxed">
              Choose from curated experiences — birthday parties, meetings,
              fitness access, and full wedding packages. Each package is
              customizable to fit your vision.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("packages-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold shadow"
              >
                View Packages
              </button>
              <a href="#contact" className="text-yellow-800 underline">
                Contact us for custom packages
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={packagesData[0].image}
                alt="package hero"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section id="packages-grid" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {packagesData.map((pkg) => (
            <motion.article
              key={pkg.id}
              layout
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(pkg)}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-md border border-yellow-100 hover:shadow-2xl transition-all"
            >
              <div className="relative h-56 w-full">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute left-4 bottom-4 z-10">
                  <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                  <p className="text-sm text-gray-100">{pkg.subtitle}</p>
                </div>
                <div className="absolute right-4 top-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.price}
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-700 line-clamp-3">{pkg.blurb}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-gray-600 flex flex-wrap gap-2">
                    {pkg.features.slice(0, 3).map((f, idx) => (
                      <span key={idx}>• {f}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(pkg);
                      }}
                      className="text-yellow-600 hover:text-yellow-700 font-semibold"
                    >
                      Details
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBook(pkg.id);
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold shadow"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setSelected(null)}
            />

            <motion.div
              layout
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative z-20 max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-2">
                <img
                  src={selected.image}
                  className="w-full h-96 object-cover"
                  alt={selected.title}
                />
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-2 text-yellow-800">
                    {selected.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {selected.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {selected.blurb}
                  </p>

                  <ul className="mt-6 space-y-2 text-gray-700">
                    {selected.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Price</div>
                      <div className="text-2xl font-bold text-yellow-700">
                        {selected.price}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                        onClick={() => setSelected(null)}
                      >
                        Close
                      </button>
                      <button
                        className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 font-semibold text-black"
                        onClick={() => handleBook(selected.id)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
