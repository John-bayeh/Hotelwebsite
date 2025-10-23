import express from 'express';
import { createGym, getGyms } from '../controllers/gymContoller.js';

const router = express.Router();

// Create new gym booking
router.post("/", createGym);

// Get all gym bookings
router.get("/", getGyms);

export default router;
