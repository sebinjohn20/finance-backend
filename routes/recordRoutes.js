import express from "express";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} from "../controllers/recordController.js";

const router = express.Router();

router.post("/", auth, role("admin"), createRecord);
router.get("/", auth, role("viewer", "analyst", "admin"), getRecords);
router.put("/:id", auth, role("admin"), updateRecord);
router.delete("/:id", auth, role("admin"), deleteRecord);

export default router;
