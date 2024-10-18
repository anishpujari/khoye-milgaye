import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(
    {
        path:"./.env"
    }
)

export const connectDB=async()=>{
    console.log(process.env.MONGOOSE_URI);
    
    const connectionInstance=await mongoose.connect(`${process.env.MONGOOSE_URI}}/${"datas"}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    
}