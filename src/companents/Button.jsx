import React from "react"


const Button = ({
itemBtn="",
hasBorderGreen=false,
hasbgOrange=false,
hasbgGreen=false,
hasbgGrey=false,

})=>{ 
  
const borderGreen="border border-white border-solid text-white"
const bgOrange="border border-[#FF6633] border-solid text-white bg-[#FF6633]"
const bgGreen="border border-[#000000] border-solid text-[#000000]"
const bgGrey="  border border-[#F3F2F1] border-solid text-[#000000] bg-[#F3F2F1]"

  return (
    
    <div>
     
     <button className={` px-5 py-2 rounded-2xl my-[3%] ${hasBorderGreen && borderGreen} 
     ${hasbgOrange && bgOrange} 
     ${hasbgGreen && bgGreen}
     ${hasbgGrey && bgGrey}
      `}>
        {itemBtn}</button>
    </div>
  )
}
export default Button