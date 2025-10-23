import mongoose from "mongoose";

const weddingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  partnerName: { type: String, required: true },
  weddingDate: { type: String, required: true },
  guestCount: { type: Number, required: true },
  preferredTheme: { type: String, required: true },
  contactNumber: { type: String, required: true },
  specialRequest: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Wedding = mongoose.model("Wedding", weddingSchema);
export default Wedding;
