import React, { useEffect, useState } from "react";
import Itemcard from "./Itemcard";

function Item(){
    const [lostdata,setlostData]=useState([]);
    const [founddata,setfoundData]=useState([]);
    function getLostData(){
        const user=JSON.parse(localStorage.getItem("user"));
        console.log(user);
        
        {
            
           setlostData(user.lostItems)
        }
        console.log(user);
        
    }
    function getFoundData(){
        const user=JSON.parse(localStorage.getItem("user"));
        // console.log(user);
        
        {
            
            setfoundData(user.foundItems)
        }
        // console.log(user);
        
    }
    useEffect(()=>{
        getLostData();
        getFoundData();

    },[])
    return(
        <div id="item " className="sm:flex ">

            <div id="lostItems" className="bg-gray-200">
                <h1 className="flex justify-center text-xl font-semibold pt-2">LostItems</h1>
            {
                lostdata.map((item)=>{
                    return(
                        <div>
<Itemcard data={item}/>
                        </div>
                    )
                })
            }
            </div>
            <div id="foundItems" className="bg-gray-200">
            <h1 className="flex justify-center text-xl font-semibold pt-2">FoundItems</h1>
            {/* <div id="lostItems"> */}
            {
                founddata.map((item)=>{
                    return(
                        <div>
<Itemcard data={item}/>
                        </div>
                    )
                })
            }
            {/* </div> */}

</div>
        </div>
    );
}

export default Item;