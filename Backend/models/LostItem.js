import mongoose from "mongoose";

const lostitemschema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Enter the category"],
    },
    brand: {
      type: String,
      required: [true, "Enter the brand"],
    },
    image: {
      type: String,
    },
    size: {
      type: String,
    },
    colour: {
      type: String,
      required: [true, "Enter the colour"],
    },
    description: {
      type: String,
    },
    location: {
      type: String,
      required: [true, "Enter the location"],
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
  },
  { timestamps: true }
);
const LostItems = mongoose.model("LostItems", lostitemschema);

export { LostItems };
