import { LostItems } from "../models/LostItem.js";
import { User } from "../models/User.js";
import mongoose from "mongoose";
export const createLostItem=async(req,res)=>{
  try {
    const { category, brand, size, colour, location, description, submittedat, userId } = req.body;

    
    console.log(req.body);

  
    const userObjectId = mongoose.Types.ObjectId.isValid(userId) ? new mongoose.Types.ObjectId(userId) : null;


    if (!userObjectId) {
        return res.status(400).json({ message: "Invalid userId" });
    }

   
    const lostItem = await LostItems.create({
        category,
        brand,
        size,
        colour,
        location,
        description,
      
        user: userId, 
    });

    await lostItem.save();

  
    const user = await User.findById(userObjectId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    
    user.lostItems.push(lostItem);
    await user.save();

  
    res.status(201).json({ message: 'Lost item created successfully', lostItem,user });
} catch (error) {
    console.error("Error creating lost item:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
}
}

export const getAllLostItems = async (req, res) => {
    try {
      const  lostItems = await LostItems.find().populate('user', 'name email');
      res.status(200).json( lostItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getLostItemById = async (req, res) => {
    try {
      const lostItem = await LostItems.findById(req.params.id);
      if (!lostItem) {
        return res.status(404).json({ message: 'Lost item not found' });
      }
      res.status(200).json( lostItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  