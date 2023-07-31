import { Router } from "express";
import { register } from "../controllers/login.js";
import {login} from "../controllers/login.js"

const router = Router();
router.post("/register", register );
router.post("/login", login)

export default router;