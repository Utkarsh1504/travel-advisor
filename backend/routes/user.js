import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// update new tour
router.put("/:id", updateUser);

// delete new User
router.delete("/:id", deleteUser);

// get single User
router.get("/:id", verifyUser, getSingleUser);

// create new User
router.get("/", verifyAdmin, getAllUser);

export default router;
