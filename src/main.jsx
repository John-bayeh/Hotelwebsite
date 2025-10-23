import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from './Home.jsx';
import Rese from './Reservation.jsx';
import Ad from './Admin.jsx';
import AdminResevation from './admin/AdminReservations.jsx';
import Signup from './Signup.jsx';
import Log from './Login.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Ad/>  {/* ✅ Router is applied here */}
    </BrowserRouter>
  </React.StrictMode>
);
  // env
// MONGO_URI=mongodb://localhost:27017/hotelDB
// PORT=5000
