import express, { Router } from "express";


import cors from 'cors'
import router from "./routes/user.routes.js";
import { lostrouter } from "./routes/lost.routes.js";
import { foundrouter } from "./routes/found.routes.js";
const app=express()

app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use('/api/v1/found',foundrouter)
app.use('/api/v1/lost',lostrouter)
app.use('/api/v1/auth',router)
export {app}