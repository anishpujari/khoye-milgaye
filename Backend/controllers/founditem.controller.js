import { FoundItems } from "../models/FoundItems";
import { User } from "../models/User";
export const createFoundItem=async(req,res)=>{
    try {
        const{category,brand,image,size,colour,location,description,submittedat}=req.body
        const userId = req.user.id; 
        const foundItem=new FoundItems(
            {category,brand,image,size,colour,location,description,submittedat,user:userId}
        )
        await foundItem.save()
        const user=await User.findById(userId)
        user.foundItems.push(foundItem)
        await user.save()

        res.status(201).json({ message: 'Found item created successfully',foundItem });
    } catch (error) {
        
    }
}

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
  