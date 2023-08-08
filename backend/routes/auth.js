import express from "express";
import { login, register, checkLoggedIn } from "../controllers/auth.js";
const router = express.Router();


router.post("/register", register);
router.post("/login", login);

router.get('/checkLoggedIn', checkLoggedIn);

export default router