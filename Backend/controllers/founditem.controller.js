import { FoundItems } from "../models/FoundItems.js";
import { User } from "../models/User.js";
import mongoose from "mongoose";
export const createFoundItem = async (req, res) => {
  try {
      const { category, brand, size, colour, location, description, submittedat, userId } = req.body;

      
      console.log(req.body);

    
      const userObjectId = mongoose.Types.ObjectId.isValid(userId) ? new mongoose.Types.ObjectId(userId) : null;

  
      if (!userObjectId) {
          return res.status(400).json({ message: "Invalid userId" });
      }

     
      const foundItem = await FoundItems.create({
          category,
          brand,
          size,
          colour,
          location,
          description,
          submittedAt: submittedat, 
          user: userId, 
      });

      await foundItem.save();

    
      const user = await User.findById(userObjectId);

      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      
      user.foundItems.push(foundItem);
      await user.save();

    
      res.status(201).json({ message: 'Found item created successfully', foundItem ,user});
  } catch (error) {
      console.error("Error creating found item:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const getAllFoundItems = async (req, res) => {
    try {
      const foundItems = await FoundItems.find().populate('user', 'name email');
      res.status(200).json(foundItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const getFoundItemById = async (req, res) => {
    try {
      const foundItem = await FoundItems.findById(req.params.id);
      if (!foundItem) {
        return res.status(404).json({ message: 'Found item not found' });
      }
      res.status(200).json(foundItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  