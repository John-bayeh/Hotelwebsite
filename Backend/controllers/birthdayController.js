import Birthday from "../models/Birthday.js";

// Create a new birthday booking
export const createBirthday = async (req, res) => {
  try {
    const newBirthday = new Birthday(req.body);
    await newBirthday.save();
    res.status(201).json({ message: "Birthday booked successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all birthday bookings
export const getBirthdays = async (req, res) => {
  try {
    const birthdays = await Birthday.find().sort({ createdAt: -1 });
    res.json(birthdays);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
