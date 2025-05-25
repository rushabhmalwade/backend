import express from "express";
import getAllUsers from "./userController.js";

const router = express.Router();

router.get("/", getAllUsers);

export default router;
