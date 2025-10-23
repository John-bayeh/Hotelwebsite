import React, { useState } from "react";
import "./index.css";
import Rese from "./assets/Reservati.jpg";

export default function Reservation() {
  const getToday = () => new Date().toISOString().split("T")[0];
  const getTomorrow = () =>
    new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // ✅ added
    checkin: getToday(),
    checkout: getTomorrow(),
    rooms: 1,
    adults: 1,
    children: 0,
    rate: "",
    roomType: "", // ✅ added
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit reservation");
      alert("✅ Reservation submitted successfully!");

      // ✅ clear all fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkin: getToday(),
        checkout: getTomorrow(),
        rooms: 1,
        adults: 1,
        children: 0,
        rate: "",
        roomType: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting reservation");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Rese})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold text-yellow-800 mb-6 text-center">
          Book Your Stay
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded-md bg-transparent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded-md bg-transparent"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border rounded-md bg-transparent"
            required
          />
          <input
            type="text"
            name="rate"
            placeholder="Rate (e.g. $150)"
            value={formData.rate}
            onChange={handleChange}
            className="p-2 border rounded-md bg-transparent"
          />
          <input
            type="date"
            name="checkin"
            min={getToday()}
            value={formData.checkin}
            onChange={handleChange}
            className="p-2 border rounded-md bg-transparent"
          />
          <input
            type="date"
            name="checkout"
            min={getTomorrow()}
            value={formData.checkout}
            onChange={handleChange}
            className="p-2 border rounded-md bg-transparent"
          />
          <input
            type="number"
            name="rooms"
            placeholder="Rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="p-2 border rounded-md bg-transparent"
            min="1"
          />
          <input
            type="number"
            name="adults"
            placeholder="Adults"
            value={formData.adults}
            onChange={handleChange}
            className="p-2 border rounded-md bg-transparent"
            min="1"
          />
          <input
            type="number"
            name="children"
            placeholder="Children"
            value={formData.children}
            onChange={handleChange}
            className="p-2 border rounded-md bg-transparent"
            min="0"
          />
          {/* ✅ Room Type */}
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="p-2 border rounded-md col-span-2 bg-transparent"
            required
          >
            <option value="">Select Room Type</option>
            <option value="Single">Single Room</option>
            <option value="Double">Double Room</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-yellow-700 text-white py-2 rounded-lg font-semibold hover:bg-yellow-800 transition"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
}
