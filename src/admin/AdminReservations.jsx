import React, { useEffect, useState } from "react";

export default function AdminReservations() {
  const [reservations, setReservations] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch reservations
  const fetchReservations = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/reservations");
      const data = await res.json();
      setReservations(data);
    } catch (err) {
      console.error("Error fetching reservations:", err);
    }
  };

  // Delete reservation
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this reservation?")) return;

    try {
      await fetch(`http://localhost:5000/api/reservations/${id}`, { method: "DELETE" });
      alert("Reservation deleted ✅");
      fetchReservations(); // refresh list
    } catch (err) {
      console.error("Error deleting reservation:", err);
      alert("Failed to delete reservation ❌");
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // Filter results
  const filtered = reservations.filter((r) =>
    r.checkin.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-yellow-800 mb-4">All Reservations</h1>

      <input
        type="text"
        placeholder="Search by check-in date..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 rounded-lg w-full md:w-1/3"
      />

      <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow">
        <thead className="bg-yellow-100">
          <tr>
            <th className="py-2 px-4">Check-in</th>
            <th className="py-2 px-4">Check-out</th>
            <th className="py-2 px-4">Rooms</th>
            <th className="py-2 px-4">Adults</th>
            <th className="py-2 px-4">Children</th>
            <th className="py-2 px-4">Rate</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((r) => (
            <tr key={r._id} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">{r.checkin}</td>
              <td className="py-2 px-4">{r.checkout}</td>
              <td className="py-2 px-4">{r.rooms}</td>
              <td className="py-2 px-4">{r.adults}</td>
              <td className="py-2 px-4">{r.children}</td>
              <td className="py-2 px-4">{r.rate}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleDelete(r._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
