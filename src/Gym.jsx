import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "./index.css";

export default function Gym() {
  const [name, setName] = useState("");
  const [trainingDate, setTrainingDate] = useState("");
  const [trainingTime, setTrainingTime] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [trainerPreference, setTrainerPreference] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  // ✅ Submit form to backend
  const handleSubmit = async (e) => {
  e.preventDefault();

  // Map frontend fields to backend schema keys
  const formData = {
    name,
    TrainingDate: trainingDate,
    PreferredTime: trainingTime,
    TrainingType: trainingType,
    TrainingPreference: trainerPreference,
    contactNumber,
    specialRequest,
  };

  try {
    const res = await fetch("http://localhost:5000/api/gym", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert(`💪 Thank you, ${name}! Your gym session is booked.`);
      // Clear form
      setName("");
      setTrainingDate("");
      setTrainingTime("");
      setTrainingType("");
      setTrainerPreference("");
      setContactNumber("");
      setSpecialRequest("");
    } else {
      const data = await res.json();
      alert(`❌ Something went wrong: ${data.message}`);
    }
  } catch (err) {
    console.error("Error submitting gym form:", err);
    alert("⚠️ Server error, please try again later.");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-900 to-yellow-700 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-2">🏋️ Book Your Gym Session</h1>
      <p className="mb-6 text-lg text-yellow-200">
        Stay fit during your stay at Tsedey Hotel’s Premium Gym!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-8 rounded-2xl shadow-lg w-11/12 md:w-1/2 flex flex-col gap-4"
      >
        <label className="font-semibold">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Enter your name"
          required
        />

        <label className="font-semibold">Training Date</label>
        <input
          type="date"
          value={trainingDate}
          onChange={(e) => setTrainingDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />

        <label className="font-semibold">Preferred Time</label>
        <input
          type="time"
          value={trainingTime}
          onChange={(e) => setTrainingTime(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />

        <label className="font-semibold">Training Type</label>
        <select
          value={trainingType}
          onChange={(e) => setTrainingType(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        >
          <option value="">Select training type</option>
          <option value="Cardio">Cardio</option>
          <option value="Weightlifting">Weightlifting</option>
          <option value="Yoga">Yoga</option>
          <option value="Swimming">Swimming</option>
        </select>

        <label className="font-semibold">Trainer Preference</label>
        <select
          value={trainerPreference}
          onChange={(e) => setTrainerPreference(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="">No Preference</option>
          <option value="Male Trainer">Male Trainer</option>
          <option value="Female Trainer">Female Trainer</option>
        </select>

        <label className="font-semibold">Contact Number</label>
        <PhoneInput
          country={"et"}
          value={contactNumber}
          onChange={setContactNumber}
          inputStyle={{
            width: "100%",
            borderRadius: "8px",
            padding: "12px",
            border: "1px solid #ccc",
          }}
          required
        />

        <label className="font-semibold">Special Request / Notes</label>
        <textarea
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          placeholder="Any additional requests?"
          className="border border-gray-300 rounded-md p-2 w-full h-24 resize-none"
        />

        <button
          type="submit"
          className="mt-4 bg-yellow-800 text-white py-3 rounded-xl text-lg hover:bg-yellow-900 transition-all shadow-md"
        >
          💪 Book Now
        </button>
      </form>
    </div>
  );
}
