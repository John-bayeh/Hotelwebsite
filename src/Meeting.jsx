import React, { useState } from "react";
import "./index.css";
 import laptop from "./assets/lap.jpg"; // optional
import calendar from "./assets/calender.jpg"; // optional
 import clock from "./assets/clock.jpg"; // optional
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

export default function Meeting() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [attendees, setAttendees] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name,
    company,
    email,
    contactNumber: phone,
    meetingDate,
    meetingTime,
    numberOfAttendances: attendees,
    specRequest: specialRequest,
  };

  try {
    const res = await fetch("http://localhost:5000/api/meetings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert(`📅 Thank you, ${name}! Your meeting is booked for ${meetingDate} at ${meetingTime}.`);
      // Clear form
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setMeetingDate("");
      setMeetingTime("");
      setAttendees("");
      setMeetingType("");
      setSpecialRequest("");
    } else {
      const data = await res.json();
      alert(`❌ Something went wrong: ${data.message}`);
    }
  } catch (err) {
    console.error("Error submitting meeting form:", err);
    alert("⚠️ Server error, please try again later.");
  }
};


  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background icons (optional decorations) */}
      <img
        src={laptop}
        alt="Laptop"
        className="absolute top-12 left-16 w-24 opacity-10"
      />
      <img
        src={calendar}
        alt="Calendar"
        className="absolute bottom-16 right-16 w-24 opacity-10"
      />
      <img
        src={clock}
        alt="Clock"
        className="absolute top-1/2 left-1/3 w-20 opacity-10"
      />

      {/* Header */}
      <div className="relative mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-700 tracking-wide">
          Book Your Meeting at Tsedey Hotel
        </h1>
        <p className="text-gray-700 mt-3 text-lg">
          Schedule your next business meeting or conference with us.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl w-11/12 md:w-1/2 flex flex-col gap-4 border border-yellow-400"
      >
        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">
            Company / Organization
          </label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company name"
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
          />
        </div>

        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        {/* Phone with country code */}
        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">
            Contact Number
          </label>
          <PhoneInput
            country={"et"}
            value={phone}
            onChange={setPhone}
            inputClass="!w-full !border !border-gray-300 !rounded-md !p-2 !focus:ring-2 !focus:ring-yellow-500"
            required
          />
        </div>

        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Meeting Date</label>
          <input
            type="date"
            value={meetingDate}
            onChange={(e) => setMeetingDate(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Meeting Time</label>
          <input
            type="time"
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
            required
          />
        </div>

        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">
            Number of Attendees
          </label>
          <input
            type="number"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            placeholder="Enter guest count"
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
          />
        </div>

        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">Meeting Type</label>
          <select
            value={meetingType}
            onChange={(e) => setMeetingType(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
          >
            <option value="">Select type</option>
            <option value="Business">Business</option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Private">Private Meeting</option>
          </select>
        </div>

        <div className="flex flex-col text-left gap-2">
          <label className="font-semibold text-yellow-800">
            Special Requests
          </label>
          <textarea
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            placeholder="Any special arrangements?"
            rows="3"
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow-500 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-yellow-600 to-amber-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold py-3 rounded-lg transition-all shadow-lg"
        >
          📅 Book My Meeting
        </button>
      </form>
    </div>
  );
}
