import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Users,
  Package,
  ClipboardList,
  LogOut,
} from "lucide-react";

export default function Admin() {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");
  const [reservations, setReservations] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  // Fetch reservations
 useEffect(() => {
  if (active === "reservations") {
    fetch("http://localhost:5000/api/reservations")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && Array.isArray(resData.data)) {
          setReservations(resData.data);
        } else {
          setReservations([]);
        }
      })
      .catch((err) => console.error("Error fetching reservations:", err));
  }
}, [active]);


  // Logout
  const handleLogout = () => navigate("/");

  // Delete reservation
  const deleteReservation = async (id) => {
    if (!window.confirm("Are you sure you want to delete this reservation?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/reservations/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete reservation");
      setReservations((prev) => prev.filter((r) => r._id !== id));
      setMessage("✅ Reservation deleted successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      alert("Error deleting reservation");
    }
  };

  // Edit reservation
  const startEdit = (reservation) => {
    setEditing(reservation._id);
    setFormData({
      name: reservation.name,
      email: reservation.email,
      phone: reservation.phone,
      roomType: reservation.roomType,
      checkin: reservation.checkin.split("T")[0],
      checkout: reservation.checkout.split("T")[0],
      rooms: reservation.rooms,
      adults: reservation.adults,
      children: reservation.children,
      rate: reservation.rate,
    });
  };

  // Save edited reservation
  const saveEdit = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/reservations/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update");
      setReservations((prev) => prev.map((r) => (r._id === id ? data.data : r)));
      setEditing(null);
      setMessage("✅ Reservation updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      alert("❌ Error updating reservation: " + err.message);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-yellow-700 text-white flex flex-col">
        <div className="p-6 font-extrabold text-2xl border-b border-yellow-500">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActive("dashboard")} className={`w-full text-left px-4 py-2 rounded-md hover:bg-yellow-600 ${active === "dashboard" ? "bg-yellow-600" : ""}`}>
            <BarChart3 className="inline-block w-5 h-5 mr-2" />
            Dashboard
          </button>
          <button onClick={() => setActive("reservations")} className={`w-full text-left px-4 py-2 rounded-md hover:bg-yellow-600 ${active === "reservations" ? "bg-yellow-600" : ""}`}>
            <ClipboardList className="inline-block w-5 h-5 mr-2" />
            Reservations
          </button>
          <button onClick={() => setActive("packages")} className={`w-full text-left px-4 py-2 rounded-md hover:bg-yellow-600 ${active === "packages" ? "bg-yellow-600" : ""}`}>
            <Package className="inline-block w-5 h-5 mr-2" />
            Packages
          </button>
          <button onClick={() => setActive("users")} className={`w-full text-left px-4 py-2 rounded-md hover:bg-yellow-600 ${active === "users" ? "bg-yellow-600" : ""}`}>
            <Users className="inline-block w-5 h-5 mr-2" />
            Users
          </button>
        </nav>
        <button onClick={handleLogout} className="m-4 bg-red-600 hover:bg-red-700 py-2 rounded-md font-semibold flex items-center justify-center gap-2">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {message && <div className="bg-green-100 text-green-800 px-4 py-2 mb-4 rounded">{message}</div>}

        {active === "dashboard" && <Dashboard reservations={reservations} />}
        {active === "reservations" && <ReservationsSection reservations={reservations} editing={editing} formData={formData} handleChange={handleChange} startEdit={startEdit} saveEdit={saveEdit} deleteReservation={deleteReservation} />}
        {active === "packages" && <AdminPackages />}
        {active === "users" && <UsersTable />}
      </main>
    </div>
  );
}

// Dashboard
function Dashboard({ reservations }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-yellow-800 mb-6">Dashboard Overview</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Total Bookings</h3>
          <p className="text-3xl font-bold text-yellow-700 mt-2">{reservations.length}</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold text-yellow-700 mt-2">--</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Active Packages</h3>
          <p className="text-3xl font-bold text-yellow-700 mt-2">--</p>
        </div>
      </div>
    </div>
  );
}

// Reservations Table
function ReservationsSection({ reservations, editing, formData, handleChange, startEdit, saveEdit, deleteReservation }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-yellow-800 mb-6">All Reservations</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow">
        <thead className="bg-yellow-100">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Room Type</th>
            <th className="py-2 px-4 text-left">Check-in</th>
            <th className="py-2 px-4 text-left">Check-out</th>
            <th className="py-2 px-4 text-left">Rooms</th>
            <th className="py-2 px-4 text-left">Adults</th>
            <th className="py-2 px-4 text-left">Children</th>
            <th className="py-2 px-4 text-left">Rate</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length > 0 ? reservations.map((r) => (
            <tr key={r._id} className="border-t">
              <td className="py-2 px-4">{r.name}</td>
              <td className="py-2 px-4">{r.email}</td>
              <td className="py-2 px-4">{r.phone}</td>
              <td className="py-2 px-4">{r.roomType}</td>
              <td className="py-2 px-4">{new Date(r.checkin).toLocaleDateString()}</td>
              <td className="py-2 px-4">{new Date(r.checkout).toLocaleDateString()}</td>
              <td className="py-2 px-4">{r.rooms}</td>
              <td className="py-2 px-4">{r.adults}</td>
              <td className="py-2 px-4">{r.children}</td>
              <td className="py-2 px-4">{r.rate}</td>
              <td className="py-2 px-4 flex gap-2">
                <button onClick={() => startEdit(r)} className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded">Edit</button>
                <button onClick={() => deleteReservation(r._id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          )) : (
            <tr><td colSpan="11" className="text-center text-gray-500 py-4">No reservations found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// Packages Section - 4 tables
// Packages Section - 4 tables
function AdminPackages() {
  const [birthday, setBirthday] = useState([]);
  const [meeting, setMeeting] = useState([]);
  const [gym, setGym] = useState([]);
  const [wedding, setWedding] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bRes, mRes, gRes, wRes] = await Promise.all([
          fetch("http://localhost:5000/api/birthdays"),
          fetch("http://localhost:5000/api/meetings"),
          fetch("http://localhost:5000/api/gym"),
          fetch("http://localhost:5000/api/weddings"),
        ]);

        const [bData, mData, gData, wData] = await Promise.all([
          bRes.json(),
          mRes.json(),
          gRes.json(),
          wRes.json(),
        ]);

        // Handle both formats: { success, data } or plain array
        setBirthday(Array.isArray(bData) ? bData : bData?.data || []);
        setMeeting(Array.isArray(mData) ? mData : mData?.data || []);
        setGym(Array.isArray(gData) ? gData : gData?.data || []);
        setWedding(Array.isArray(wData) ? wData : wData?.data || []);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching packages:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading packages...</p>;

  const renderTable = (title, data) => (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">{title}</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow">
        <thead className="bg-yellow-100">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Guests</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((b) => (
              <tr key={b._id} className="border-t">
                <td className="py-2 px-4">{b.name}</td>
                <td className="py-2 px-4">{b.email}</td>
                <td className="py-2 px-4">{b.phone}</td>
                <td className="py-2 px-4">{new Date(b.date || b.preferredDate).toLocaleDateString()}</td>
                <td className="py-2 px-4">{b.guests || b.birthdayAge || "--"}</td>
                <td className="py-2 px-4">{b.status || "Pending"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-gray-500 py-4">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      {renderTable("Birthday Bookings", birthday)}
      {renderTable("Meeting Bookings", meeting)}
      {renderTable("Gym Bookings", gym)}
      {renderTable("Wedding Bookings", wedding)}
    </div>
  );
}


// Users Table
function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => { setUsers(data); setLoading(false); })
      .catch((err) => { console.error(err); setLoading(false); });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow">
      <thead className="bg-yellow-100">
        <tr>
          <th className="py-2 px-4 text-left">Full Name</th>
          <th className="py-2 px-4 text-left">Email</th>
          <th className="py-2 px-4 text-left">Role</th>
          <th className="py-2 px-4 text-left">Joined On</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id} className="border-t">
            <td className="py-2 px-4">{user.fullName}</td>
            <td className="py-2 px-4">{user.email}</td>
            <td className="py-2 px-4">{user.role}</td>
            <td className="py-2 px-4">{new Date(user.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
