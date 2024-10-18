import { LostItems } from "../models/LostItem.js";
import { FoundItems } from "../models/FoundItems.js";
import mongoose from "mongoose";
export const getMatchingFoundItems = async (req, res) => {
    try {
    
      let { userId, lostItemId } = req.body;
        userId=mongoose.Types.ObjectId.isValid(userId) ? new mongoose.Types.ObjectId(userId) : null;
     
    lostItemId=mongoose.Types.ObjectId.isValid(lostItemId) ? new mongoose.Types.ObjectId(lostItemId) : null;
    // console.log(userId,lostItemId);
    
        const lostItem = await LostItems.findOne({ _id: lostItemId, user: userId });
        if (!lostItem) {
            return res.status(200).json({ message: 'Lost item not found or does not belong to the user.' });
          }
      
          const foundItems = await FoundItems.find({
            $or: [
              { category: lostItem.category },
             
              
            ]
          }).populate('user', 'name email');
  
      res.status(200).json({foundItems,lostItem});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };