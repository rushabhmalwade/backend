import express from "express";
import authLoginController from "./authController.js";
const router = express.Router();

router.post("/login", authLoginController);

export default router;
