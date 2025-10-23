import express from "express";
import { createMeeting, getMeetings } from "../controllers/meetingController.js";

const router = express.Router();

// Create new meeting
router.post("/", createMeeting);

// Get all meetings
router.get("/", getMeetings);

export default router;
