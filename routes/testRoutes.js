import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("<h1>This is the test route</h1>");
  console.log("Test route working even after using Router");
});

export default router;
