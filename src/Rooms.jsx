import React from "react";
import { motion } from "framer-motion";
import { BedDouble, Wifi, Bath, Tv, Coffee, Square } from "lucide-react"; // nice icons
import Stan from "./assets/Standard.jpg";
import Family from "./assets/Family.jpg";
import Execu from "./assets/executive.webp";
import Pres from "./assets/Presedentail.avif";
import Delu from "./assets/deluxe.jpg";

export default function Room() {
  const rooms = [
    {
      name: "Standard Room",
      img: Stan,
      price: "$60 / night",
      size: "25 m²",
      amenities: ["WiFi", "TV", "Private Bath"],
      desc: "Comfortable and cozy room perfect for short stays with all the essentials you need.",
    },
    {
      name: "Deluxe Room",
      img: Delu,
      price: "$90 / night",
      size: "35 m²",
      amenities: ["WiFi", "TV", "Mini Bar", "Coffee Maker"],
      desc: "Spacious deluxe room offering superior comfort and style for leisure travelers.",
    },
    {
      name: "Executive Room",
      img: Execu,
      price: "$120 / night",
      size: "40 m²",
      amenities: ["WiFi", "TV", "Work Desk", "Room Service"],
      desc: "Elegant executive room designed for business and comfort with premium services.",
    },
    {
      name: "Family Suite",
      img: Family,
      price: "$150 / night",
      size: "50 m²",
      amenities: ["WiFi", "TV", "2 Beds", "Mini Fridge", "Private Bath"],
      desc: "Spacious suite ideal for families, combining comfort, style, and privacy.",
    },
    {
      name: "Presidential Suite",
      img: Pres,
      price: "$250 / night",
      size: "80 m²",
      amenities: ["WiFi", "TV", "Jacuzzi", "Private Lounge", "VIP Service"],
      desc: "The epitome of luxury — perfect for executives and special occasions.",
    },
  ];

  // Helper for amenities icons
  const renderIcon = (name) => {
    switch (name) {
      case "WiFi": return <Wifi size={18} />;
      case "TV": return <Tv size={18} />;
      case "Private Bath": return <Bath size={18} />;
      case "Mini Bar": return <Coffee size={18} />;
      case "Work Desk": return <Square size={18} />;
      case "2 Beds": return <BedDouble size={18} />;
      case "Jacuzzi": return <Bath size={18} />;
      default: return <Square size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-yellow-900">
        Rooms & Suites
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden border border-yellow-300 transition-all"
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-gray-800">
              <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
                {room.name}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{room.desc}</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-yellow-900">{room.price}</span>
                <span className="text-sm text-gray-500">{room.size}</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                {room.amenities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full"
                  >
                    {renderIcon(item)} {item}
                  </div>
                ))}
              </div>
              <button className="w-full bg-yellow-700 text-white font-semibold py-2 rounded-xl hover:bg-yellow-800 transition">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
