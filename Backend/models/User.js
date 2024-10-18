import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
    isAdmin:{
            type:Boolean,
            default:false
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique : true,
        validate : validator.isEmail,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength : [6, "Password Must Be Atleast 6 characters"],
    },
    lostItems: [
       
      ],
      foundItems: [
        
      ],
},{timestamps:true});
const User = mongoose.model("User", userSchema);

export {User}; 