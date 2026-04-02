import express from "express";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";
import { getSummary } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/", auth, role("analyst", "admin"), getSummary);

export default router;
