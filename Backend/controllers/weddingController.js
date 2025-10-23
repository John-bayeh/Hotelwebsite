import Wedding from "../models/wedding.js";

// Create wedding booking
export const createWedding = async (req, res) => {
  try {
    const newWedding = new Wedding(req.body);
    await newWedding.save();
    res.status(201).json({ message: "Wedding booked successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all wedding bookings
export const getWeddings = async (req, res) => {
  try {
    const weddings = await Wedding.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: weddings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
