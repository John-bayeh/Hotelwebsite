import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    date: { type: Date, required: true },
    guests: { type: Number },
    status: { type: String, default: "Pending" },
    eventType: { type: String, required: true }, // birthday, meeting, gym, wedding
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
