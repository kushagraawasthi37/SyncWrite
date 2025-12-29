import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";

import connectDB from "./databases/db.js";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

/* -------------------- HTTP + SOCKET SERVER -------------------- */
const server = http.createServer(app);

const allowedOrigins = ["http://localhost:5000", process.env.FRONTEND_URI];

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  },
});

/* -------------------- MIDDLEWARES -------------------- */
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* -------------------- SOCKET.IO -------------------- */
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

/* -------------------- ROUTES -------------------- */
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

/* -------------------- ERROR HANDLER (ALWAYS LAST) -------------------- */
app.use(errorHandler);

/* -------------------- START SERVER -------------------- */
const startServer = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
