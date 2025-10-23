import Gym from "../models/Gym.js";

// Create gym booking
export const createGym = async (req, res) => {
  try {
    const newGym = new Gym(req.body);
    await newGym.save();
    res.status(201).json({ message: "Gym booked successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all gym bookings
export const getGyms = async (req, res) => {
  try {
    const gyms = await Gym.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: gyms });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
