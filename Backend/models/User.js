import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "LostItems",
        }
      ],
      foundItems: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "FoundItems",
        }
      ],
},{timestamps:true});
const User = mongoose.model("User", userSchema);

export {User}; 