import express from "express";
import {
  createReservation,
  getAllReservations,
  updateReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const router = express.Router();

// CRUD routes
router.post("/", createReservation);
router.get("/", getAllReservations);
router.put("/:id", updateReservation);
router.delete("/:id", deleteReservation);

export default router;
