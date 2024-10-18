import express from "express";

import { registerUser, loginUser } from "../controllers/user.controller.js"
import { getMatchingFoundItems } from "../controllers/Match.controller.js";
const router=express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/match').post(getMatchingFoundItems)
export default router