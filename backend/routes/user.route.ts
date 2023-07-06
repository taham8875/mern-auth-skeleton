import express, { Router } from "express";
const router: Router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controller/user.controller.ts";
import { protect } from "../middleware/auth.middleware.ts";

router.post("/login", authUser);
router.post("/", registerUser);
router.get("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
