import express from "express";
import { createWedding, getWeddings } from "../controllers/weddingController.js";

const router = express.Router();

router.post("/", createWedding);
router.get("/", getWeddings);

export default router;
