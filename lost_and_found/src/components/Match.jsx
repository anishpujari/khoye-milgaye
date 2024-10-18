import React, { useState } from 'react'
import axios from 'axios';
import { getMatchAPI } from './Api';
import Itemcard from './Itemcard';
function Match({data,userId}) {
    const[lost,setlost]=useState()
    async function getData(){
        console.log(data,userId);
        const data1 = await axios.post(getMatchAPI, {
           userId,
           lostItemId:data
          });
          console.log(data1.data.lostItem);
          setlost(data1.data.lostItem)

          
    }
    getData() 
  return (
  
   <>
   <div>
    <Itemcard data={lost} />
{/* jab item.jsx pe click krke idhar aoge toh uska lostitem ka data as a prop comapre krna with one jo backend dega match api se vo category wise divided phle se hi agya */}
   </div>
   </>
  )
}

export default Match