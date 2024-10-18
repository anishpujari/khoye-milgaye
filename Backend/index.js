import { connectDB } from "./DB/connectDB.js";
import { app } from "./app.js";
import dotenv from "dotenv"

dotenv.config(
    {
        path:"./.env"
    }
)
connectDB()
app.listen(8015,()=>{
    console.log("server is running on port 8015");
})
