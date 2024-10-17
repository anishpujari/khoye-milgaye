import express from "express"

import { createFoundItem,getAllFoundItems,getFoundItemById } from "../controllers/founditem.controller.js"
import { verifyAdmin } from "../middleware/admin.js"

const foundrouter=express.Router()
foundrouter.post("/create",createFoundItem)
foundrouter.get("/all",verifyAdmin,getAllFoundItems)
foundrouter.get("/:id",verifyAdmin,getFoundItemById)
export {foundrouter}
