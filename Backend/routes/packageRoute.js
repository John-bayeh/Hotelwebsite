import express from "express";
import {
  createPackage,
  getPackages,
  getPackageById,
  updatePackage,
  deletePackage,
} from "../controllers/packageController.js";

const router = express.Router();

// ✅ Create new package booking
router.post("/", createPackage);

// ✅ Get all packages
router.get("/", getPackages);

// ✅ Get one package by ID
router.get("/:id", getPackageById);

// ✅ Update package
router.put("/:id", updatePackage);

// ✅ Delete package
router.delete("/:id", deletePackage);

export default router;
