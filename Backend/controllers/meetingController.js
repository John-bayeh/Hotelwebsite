import Meeting from "../models/meeting.js";

// ✅ Create a new meeting booking
export const createMeeting = async (req, res) => {
  try {
    console.log("Incoming request body:", req.body); // Helps debug

    const newMeeting = new Meeting({
      name: req.body.name,
      company: req.body.company,
      email: req.body.email,
      contactNumber: req.body.contactNumber,
      meetingDate: req.body.meetingDate,
      meetingTime: req.body.meetingTime,
      numberOfAttendances: req.body.numberOfAttendances,
      specRequest: req.body.specRequest,
    });

    await newMeeting.save();
    res.status(201).json({ message: "Meeting booked successfully!" });
  } catch (err) {
    console.error("Mongoose error:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// ✅ Get all meetings (optional)
export const getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().sort({ createdAt: -1 });
    res.status(200).json(meetings);
  } catch (err) {
    console.error("Mongoose error:", err.message);
    res.status(500).json({ message: err.message });
  }
};
