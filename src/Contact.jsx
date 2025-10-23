import React, { useState } from "react";
import H from "./assets/Hotel6.jpg";
import Insta from "./assets/insta.jpg";
import tk from "./assets/tiktok.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Error sending message");
    }
  };

  return (
    <div className="w-full bg-gray-100 flex flex-col justify-between">
      {/* Contact Form */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Info */}
        <div
          className="relative md:w-1/2 h-[70vh] bg-cover bg-center text-white flex items-center justify-center"
          style={{ backgroundImage: `url(${H})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 p-8 md:p-12 text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Information</h1>
            <ul className="space-y-4 text-lg">
              <li>📞 020 4597 8581</li>
              <li>✉️ info@gloryrsvp.co.uk</li>
              <li>📍 Unit 18, Bellingham Trading Estate, Catford SE6 3BX</li>
              <li>📷 @Glory_rsvp</li>
              <li>🎵 @Glory_rsvp</li>
            </ul>
          </div>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 bg-white p-10 flex flex-col justify-center">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="font-semibold text-gray-800">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-2xl w-full p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="e.g. Scott Marcel"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-800">Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-2xl w-full p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="e.g. scottmarcel@gmail.com"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-800">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-2xl w-full p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="e.g. +44 1212 121212"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-800">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-2xl w-full p-4 mt-2 h-32 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300 w-fit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
