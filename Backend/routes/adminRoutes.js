import express from "express";
import Booking from "../models/Booking.js"; // Your Booking model
const router = express.Router();

// Get bookings by event type
router.get("/bookings/:eventType", async (req, res) => {
  const { eventType } = req.params;

  try {
    const bookings = await Booking.find({ eventType }); // match the field in DB
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
