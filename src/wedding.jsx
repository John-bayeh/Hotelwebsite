import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Wedding() {
  const [formData, setFormData] = useState({
    name: "",
    partnerName: "",
    weddingDate: "",
    guestCount: "",
    preferredTheme: "",
    contactNumber: "",
    specialRequest: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/weddings", formData);
      setMessage(res.data.message);
      setFormData({
        name: "",
        partnerName: "",
        weddingDate: "",
        guestCount: "",
        preferredTheme: "",
        contactNumber: "",
        specialRequest: "",
      });
    } catch (error) {
      setMessage("❌ Failed to submit wedding form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-100 to-pink-200 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-11/12 md:w-1/2 flex flex-col gap-5 border border-rose-300"
      >
        <h1 className="text-4xl font-extrabold text-rose-600 mb-4 text-center">
          💍 Wedding Reservation Form
        </h1>

        {message && (
          <p className="text-center text-lg font-semibold text-rose-600">{message}</p>
        )}

        {[
          { label: "Your Name", name: "name", type: "text" },
          { label: "Partner's Name", name: "partnerName", type: "text" },
          { label: "Wedding Date", name: "weddingDate", type: "date" },
          { label: "Guest Count", name: "guestCount", type: "number" },
          { label: "Contact Number", name: "contactNumber", type: "tel" },
        ].map((input) => (
          <div key={input.name} className="flex flex-col text-left">
            <label className="font-semibold text-rose-700">{input.label}</label>
            <input
              name={input.name}
              type={input.type}
              value={formData[input.name]}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-rose-400 outline-none"
              required
            />
          </div>
        ))}

        <div className="flex flex-col text-left">
          <label className="font-semibold text-rose-700">Preferred Theme</label>
          <select
            name="preferredTheme"
            value={formData.preferredTheme}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-rose-400 outline-none"
            required
          >
            <option value="">Select a theme</option>
            <option value="Classic">Classic</option>
            <option value="Beach">Beach</option>
            <option value="Rustic">Rustic</option>
            <option value="Modern">Modern</option>
            <option value="Fairy Tale">Fairy Tale</option>
          </select>
        </div>

        <div className="flex flex-col text-left">
          <label className="font-semibold text-rose-700">Special Requests</label>
          <textarea
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            placeholder="Any special requests or notes?"
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-rose-400 outline-none"
            rows={3}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-gradient-to-r from-rose-500 to-pink-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg"
        >
          {loading ? "Submitting..." : "💐 Book My Wedding"}
        </button>
      </form>
    </div>
  );
}
