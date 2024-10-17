import { LostItems } from "../models/LostItem";
import { FoundItems } from "../models/FoundItems";

export const getMatchingFoundItems = async (req, res) => {
    try {
    
        const userId = req.user.id; 
        
    const lostItemId = req.params.id; 
        const lostItem = await LostItems.findOne({ _id: lostItemId, user: userId });
        if (!lostItem) {
            return res.status(404).json({ message: 'Lost item not found or does not belong to the user.' });
          }
      
          const foundItems = await FoundItems.find({
            $or: [
              { category: lostItem.category },
              { colour: lostItem.colour },
              { brand: lostItem.brand },
              
            ]
          }).populate('user', 'name email');
  
      res.status(200).json(foundItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };