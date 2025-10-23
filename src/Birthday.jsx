import React, { useState } from "react";
import "./index.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Image assets
import ballon from "./assets/Ballon.jpg";
import cake from "./assets/cake.jpg";
import gift from "./assets/gift.jpg";

export default function BD() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [cakeType, setCakeType] = useState("");
  const [contactNumber, setContactNumber] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name,
    birthdayAge: birthday,
    preferredDate,
    preferredTime,
    cakeType,
    contactNumber,
  };

  try {
    const res = await fetch("http://localhost:5000/api/birthdays", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert(`🎉 Thank you, ${name}! Your birthday celebration is booked.`);
      setName("");
      setBirthday("");
      setPreferredDate("");
      setPreferredTime("");
      setCakeType("");
      setContactNumber("");
    } else {
      alert("❌ Something went wrong, please try again.");
    }
  } catch (err) {
    console.error("Error submitting birthday form:", err);
    alert("⚠️ Server error, please try again later.");
  }
};

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* 🎈 Decorative Images */}
      <img
        src={ballon}
        alt="balloon"
        className="absolute top-10 left-10 w-20 animate-bounce"
      />
      <img
        src={gift}
        alt="gift"
        className="absolute bottom-10 right-12 w-24 animate-pulse"
      />
      <img
        src={cake}
        alt="cake"
        className="absolute bottom-0 left-20 w-24 animate-float"
      />

      {/* 🎉 Heading */}
      <div className="relative mb-8">
        <h1 className="text-5xl font-extrabold text-yellow-800">
          CELEBRATE YOUR
        </h1>
        <h1 className="text-6xl font-extrabold text-white bg-yellow-700 rounded-xl px-6 py-2 mt-2 inline-block shadow-lg transform rotate-2">
          BIRTHDAY!
        </h1>
      </div>

      {/* 🎂 Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl w-11/12 md:w-1/2 flex flex-col gap-4 border border-yellow-400 z-10"
      >
        <p className="text-lg text-yellow-700 mb-2">
          Fill out the form to make your special day unforgettable ✨
        </p>

        {/* Name */}
        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border border-yellow-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        {/* Age */}
        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Birthday Age</label>
          <input
            type="number"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="Enter your age"
            className="border border-yellow-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        {/* Preferred Date */}
        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Preferred Date</label>
          <input
            type="date"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            className="border border-yellow-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        {/* Preferred Time */}
        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Preferred Time</label>
          <input
            type="time"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="border border-yellow-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        {/* Cake Type */}
        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Cake Type</label>
          <select
            value={cakeType}
            onChange={(e) => setCakeType(e.target.value)}
            className="border border-yellow-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          >
            <option value="">Select a cake</option>
            <option value="Chocolate">🎂 Chocolate</option>
            <option value="Vanilla">🍰 Vanilla</option>
            <option value="Red Velvet">❤️ Red Velvet</option>
            <option value="Fruit">🍓 Fruit</option>
          </select>
        </div>

        {/* Contact Number with Country Code */}
        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Contact Number</label>
          <PhoneInput
            country={"et"} // Default country (Ethiopia 🇪🇹)
            value={contactNumber}
            onChange={setContactNumber}
            inputClass="!w-full !border !border-yellow-300 !rounded-md !p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            buttonClass="!border-yellow-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-yellow-600 to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold py-3 rounded-lg transition-all shadow-lg"
        >
          🎉 Book My Birthday!
        </button>
      </form>
    </div>
  );
}
