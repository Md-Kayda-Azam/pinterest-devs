import express from "express";
import {
  activateAccount,
  forgotPassword,
  loggedInUser,
  login,
  passwordResetAction,
  register,
} from "../controllers/userController.js";

/// init routers
const router = express.Router();

// user auth router
router.post("/login", login);
router.post("/register", register);
router.get("/me", loggedInUser);
router.get("/activate/:token", activateAccount);
router.post("/forgot-password/", forgotPassword);
router.post("/forgot-password/:token", passwordResetAction);

// export default router
export default router;
