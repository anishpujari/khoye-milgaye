import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(
    {
        path:"./.env"
    }
)

export const connectDB=async()=>{
    const connectionInstance=await mongoose.connect(`${process.env.MONGOOSE_URI}}/${"lostfound"}`)
}