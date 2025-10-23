import express from "express";
import User from '../models/userModel.js';

const router = express.Router();

// ✅ Get all users (Admin only)
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "fullName email role createdAt"); // Select only needed fields
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
});

export default router;
