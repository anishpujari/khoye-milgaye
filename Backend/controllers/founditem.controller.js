import { LostItems } from "../models/LostItem";
import { User } from "../models/User";
export const createLostItem=async(req,res)=>{
    try {
        const{category,brand,image,size,colour,location,description,submittedat}=req.body
        const userId = req.user.id; 
        const lostItem=new LostItems(
            {category,brand,image,size,colour,location,description,submittedat,user:userId}
        )
        await lostItem.save()
        const user=await User.findById(userId)
        user.lostItems.push(lostItem)
        await user.save()

        res.status(201).json({ message: 'Lost item created successfully', lostItem });
    } catch (error) {
        
    }
}

export const getAllLostItems = async (req, res) => {
    try {
      const lostItems = await LostItems.find().populate('user', 'name email');
      res.status(200).json(lostItems);
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
      res.status(200).json(lostItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  