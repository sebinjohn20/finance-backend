import express from "express";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";
import { getUsers, updateUserStatus } from "../controllers/userController.js";

const router = express.Router();

router.get("/", auth, role("admin"), getUsers);
router.put("/:id/status", auth, role("admin"), updateUserStatus);

export default router;
