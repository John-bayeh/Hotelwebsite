import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRout from "./routes/authroutes.js";
import userRoutes from "./routes/userRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import packageRoutes from './routes/packageRoute.js';
import birthdayRoutes from './routes/BirthdayRoutes.js';
import weddingRoutes from './routes/weddingRoute.js';
import gymRoutes from './routes/gymRoutes.js';
import meetingRoutes from './routes/meetingRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import contactRoute from './routes/contactroute.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/hotelDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🚀 Tsedey Hotel API is running...");
});

// ✅ Routes
app.use("/api/auth", authRout
  
);
app.use("/api/users", userRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/packages",packageRoutes);
app.use("/api/birthdays",birthdayRoutes);
app.use("/api/weddings",weddingRoutes);
app.use("/api/gym",gymRoutes);
app.use("/api/meetings",meetingRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/contact",contactRoute);
// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
