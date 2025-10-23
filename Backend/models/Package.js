import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    eventType: { type: String, required: true }, // birthday, meeting, etc.
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    guests: { type: Number },
    extraDetails: { type: Object }, // stores any event-specific info
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);
export default Package;
