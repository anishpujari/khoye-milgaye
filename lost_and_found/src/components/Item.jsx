import React from "react";

function Item(){
    const [data,setData]=useState();
    function getLostData(){
        const user=JSON.parse(localStorage.getItem("user"));
        console.log(user);
        
        {
            
            user.lostItems.map(()=>{
                return console.log(user.lostItems)
            })
        }
        console.log(user);
        
    }
    return(
        <div className="item">
{
    getLostData()
    
}
            <div></div>
        </div>
    );
}

export default Item;