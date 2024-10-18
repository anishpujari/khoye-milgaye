import express from "express"

import { createLostItem,getAllLostItems,getLostItemById } from "../controllers/lostitem.controller.js"

const lostrouter=express.Router()
lostrouter.post("/create",createLostItem)
lostrouter.get("/all",getAllLostItems)
lostrouter.get("/:id",getLostItemById)
export {lostrouter}
