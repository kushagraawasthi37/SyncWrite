import express from "express";
import dotenv from "dotenv";
import connectDB from "./Databases/db.js";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

let server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5000", process.env.FRONTEND_URI],
    methods: ["POST", "GET", "PATCH", "DELETE"],
  },
});
app.use(
  cors({
    origin: ["http://localhost:5000", process.env.FRONTEND_URI],
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Socket connection
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

try {
  connectDB();
  app.get("/", (req, res) => {
    console.log("Welcome back");
    res.send("Hii Backend is running");
  });

  server.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
  });
} catch (error) {
  console.log("Something went Wrong in Index.js", error);
}
