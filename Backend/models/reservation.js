import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }, // ✅ added
  checkin: { type: String, required: true },
  checkout: { type: String, required: true },
  rooms: { type: Number, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, default: 0 },
  rate: { type: String, required: true },
  roomType: { type: String, required: true },
});

export default mongoose.model("Reservation", reservationSchema);
