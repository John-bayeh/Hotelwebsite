import express from "express";
import { createBirthday, getBirthdays } from "../controllers/birthdayController.js";

const router = express.Router();

// POST a new birthday
router.post("/", createBirthday);

// GET all birthdays
router.get("/", getBirthdays);

export default router;
