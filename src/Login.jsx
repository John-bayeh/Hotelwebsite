import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("⚠️ Please enter both email and password!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`❌ ${data.message || "Login failed!"}`);
        return;
      }

      // ✅ Save user & token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("✅ Login successful!");

      // ✅ Role-based navigation from backend data
      if (data.user.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("⚠️ Error connecting to server");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-yellow-800 flex flex-col items-center justify-center text-white p-10">
        <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-lg text-yellow-100">
          Login to manage your bookings and explore hotel packages.
        </p>
      </div>

      <div className="w-1/2 bg-amber-100 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4"
        >
          <h2 className="text-3xl font-bold text-yellow-800 text-center mb-4">
            Login
          </h2>

          <label className="font-semibold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-yellow-600"
          />

          <label className="font-semibold text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-yellow-600"
          />

          <button
            type="submit"
            className="mt-4 bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-800"
          >
            Login
          </button>

          <Link
            to="/signup"
            className="text-yellow-800 font-semibold hover:underline text-center mt-2"
          >
            Don’t have an account? Signup
          </Link>
        </form>
      </div>
    </div>
  );
}
