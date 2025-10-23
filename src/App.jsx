import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Package from "./package.jsx";
import BD from "./Birthday.jsx";
import Wedding from "./wedding.jsx";
import Meeting from "./Meeting.jsx";
import Gym from "./Gym.jsx";
import Room from "./Rooms.jsx";
import Reservation from "./Reservation.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Admin from './Admin.jsx';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/package" element={<Package />} />
      <Route path="/birthday" element={<BD />} />
      <Route path="/wedding" element={<Wedding />} />
      <Route path="/meeting" element={<Meeting />} />
      <Route path="/gym" element={<Gym />} />
      <Route path="/room" element={<Room />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  );
}
