import { connectDB } from "./DB/connectDB";
import { app } from "./app";
import dotenv from "dotenv";

dotenv.config(
    {
        path:"./.env"
    }
)
connectDB()
app.listen(8015,()=>{
    console.log("server is running on port 8015");
})
