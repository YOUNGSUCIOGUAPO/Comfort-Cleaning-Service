import { Router } from "express";
import { register } from "../controllers/login.js";

const router = Router();
router.post("/login", register );

export default router;