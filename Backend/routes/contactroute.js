// routes/contactroute.js
import express from "express";
import { createContact, getContacts } from "../controllers/contactController.js"

const router = express.Router();

router.post("/", createContact);   // POST /api/contact
router.get("/", getContacts);      // GET /api/contact

export default router;
