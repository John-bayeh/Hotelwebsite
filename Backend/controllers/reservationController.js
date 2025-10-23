import Reservation from "../models/reservation.js";

// ✅ Create new reservation
export const createReservation = async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    const saved = await newReservation.save();
    res.status(201).json({
      success: true,
      message: "✅ Reservation saved successfully",
      data: saved,
    });
  } catch (err) {
    console.error("❌ Error saving reservation:", err);
    res.status(500).json({
      success: false,
      message: "Failed to save reservation",
      error: err.message,
    });
  }
};

// ✅ Get all reservations
export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: reservations });
  } catch (err) {
    console.error("❌ Error fetching reservations:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Update reservation
export const updateReservation = async (req, res) => {
  try {
    const updated = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ success: false, message: "Reservation not found" });
    }
    res.status(200).json({
      success: true,
      message: "✅ Reservation updated successfully",
      data: updated,
    });
  } catch (err) {
    console.error("❌ Error updating reservation:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Delete reservation
export const deleteReservation = async (req, res) => {
  try {
    const deleted = await Reservation.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Reservation not found" });
    }
    res.status(200).json({
      success: true,
      message: "🗑️ Reservation deleted successfully",
    });
  } catch (err) {
    console.error("❌ Error deleting reservation:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};
