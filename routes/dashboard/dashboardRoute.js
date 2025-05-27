import express from "express";
import dashboardAccess from "./dashboardController.js";
const router = express.Router();

router.get("/", dashboardAccess);
export default router;
