import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },          // camelCase
    contactNumber: { type: String, required: true },
    meetingDate: { type: String, required: true },
    meetingTime: { type: String, required: true },
    numberOfAttendances: { type: String, required: true },
    specRequest: { type: String, required: true },
  },
  { timestamps: true }
);

const Meeting = mongoose.model("Meeting", meetingSchema); // Capitalized model name
export default Meeting;
