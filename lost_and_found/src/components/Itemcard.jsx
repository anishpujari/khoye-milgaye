import React from 'react'

function Itemcard({data}) {
    console.log("items",data);
    
  return (
   <>
  

<div class=" text-gray-900 ">
  <div class="bg-gray-200  p-8 flex items-center justify-center">
    <div class="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 sm:h-32">
      
  
      <img class=" w-full object-cover object-end" src="https://content.presspage.com/uploads/633/f560a24d-88da-446a-9746-31ac89eb5d9e/1920_gp-ln-23-007-pixel7a-6-48-master-full-uk-blue-240323.png?10000" alt="Home in Countryside" />
      <div class="px-6 py-2">
        <div class="flex items-baseline">
          <span class={`inline-block bg-${data?.colour|"white"}-500 text-${""} py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide`}>{data?.colour}</span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
         Category: {data?.category}
          </div>
        </div>
        <h4 class="mt-2 font-semibold text-lg leading-tight truncate">Brand:{data?.brand}</h4>

        <div class="mt-1">
          <span>Description:{data?.description}</span>
          {/* <span class="text-gray-600 text-sm">/ wk</span> */}
        </div>
        <div class="mt-2 flex flex-col ">
          
              <span class="ml- text-gray-600 text-sm">Location: {data?.location}</span>
              {data.submittedAt?              <span class="ml- text-gray-600 text-sm">Submitted At: {data?.submittedAt}</span>:null}
        </div>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default Itemcard