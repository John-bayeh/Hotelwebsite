import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(`❌ ${data.message}`);
        return;
      }

      alert("✅ Signup successful!");
      console.log("User created:", data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("⚠️ Error connecting to server");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-yellow-800">Signup</h2>

        <label className="w-full text-left font-medium">Full Name</label>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border border-gray-400 w-full p-2 rounded-lg"
          placeholder="Full Name"
        />

        <label className="w-full text-left font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 w-full p-2 rounded-lg"
          placeholder="E-mail"
        />

        <label className="w-full text-left font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 w-full p-2 rounded-lg"
          placeholder="Password"
        />

        <label className="w-full text-left font-medium">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border border-gray-400 w-full p-2 rounded-lg"
          placeholder="Confirm Password"
        />

        <label className="w-full text-left font-medium">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-400 w-full p-2 rounded-lg"
        >
          <option>Customer</option>
          <option>Admin</option>
        </select>

        <button
          type="submit"
          className="mt-4 bg-yellow-800 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 w-full"
        >
          Signup
        </button>

        <p className="text-gray-700 mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-700 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
