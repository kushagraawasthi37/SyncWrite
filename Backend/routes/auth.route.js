import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Register new user
router.post("/signup", signup);
// Login user
router.post("/login", login);
// Logout user (protected)
router.post("/logout", verifyJWT, logout);

export default router;
