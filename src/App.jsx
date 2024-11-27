
import "./App.css"
import logo from "./assets/logo.png"
import icn1 from "./assets/icn1.png"
import  Button from "./companents/Button";
import { useEffect, useState } from "react";
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {axios} from "react"

function App() {
  const url="http://2.56.213.92:5001/todos"
  const [cards,setCards]=useState([])

  const getCard=async()=>{
    try {
      const {data}=await axios.get(url);
      console.log(2)
      setCards(data);
      console.log(data)
    } catch (error) {
      
    }
  }


getCard();

  return (
    <div>
      <div className="bg">
      <header className="grid md:grid-cols-[60%,40%] p-3 lg:justify-items-end items-center justify-items-center">
        <div className=""><img src={logo} alt="" /></div>
        <div className=""><img src={icn1} alt="" /></div>      

     </header>
     <div className="">
      <h1 className="pt-[12%] px-[8%] lg:text-5xl md:text-4xl text-3xl font-bold text-[#F9CDCD] text-center">Purpose-driven experiences convert customer attention and loyalty</h1>
      <p className="lg:px-[30%] md:px-[15%] px-[6%] text-center py-[4%] text-white">Modernsite designs and develops beautifully designed and cutting-edge e-commerce and
        small business websites around customer needs.</p>
      <div className="text-center pb-[5%] "><Button hasBorderGreen={true} itemBtn='Start Growing' /></div>                                             
     </div>
     </div>
     <main>
      <section>
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:w-[40%] p-[5%] w-[70%] ">Our work will
                                                tell  about us</h1>
        <div className="lg:flex justify-between px-[5%]  py-[1%] border-b border-solid border-black">
         <ul className="flex gap-8 flex-wrap">
          <li className="">ALL CASE</li>
          <li className="">e-commerce</li>
          <li className="">LANDING</li>
          <li className="">corporate</li>
         </ul>
         <div className="lg:w-[30%] md:w-[60%] w-[90%]">
          <p>The work we create lives at the intersection of clarity and surprise and positions brands</p>
        </div>
        </div>
        <div className="px-[5%] py-[3%]">
      
          <div className="py-[1%] border-b border-solid border-black grid lg:grid-cols-2 gap-[4%]">
           <div className=""><img src={img1} alt="" /></div>
           <div className="">
            <h1 className="text-3xl font-medium py-[2%]">TELEVISION MANAGER SERVICES</h1>
            <div className="md:flex gap-[11%] py-[2%] justify-between">
              <p>TASK:</p>
              <p className="text-sm">Conducted a review of the current site, identified pain points that did not allow the 
                client to be more recognizable to be more recognizable </p>
             </div>
            <div className="md:flex gap-[5%] py-[2%] ">
              <p>DECISION:</p>
              <p className="text-sm">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable to be more recognizable </p>

            </div>
            <div className="md:flex justify-between pt-[20%] pb-[4%] items-center">
              <h1 >#LANDING PAGE</h1>
              <Button hasbgGreen={true} itemBtn='DETAILS' />
            </div>
            </div> 
          </div>

          <div className="py-[1%] border-b border-solid border-black md:grid grid-cols-2 gap-[4%]">
           <div className=""><img src={img2} alt="" /></div>
           <div className="">
            <h1 className="text-3xl font-medium py-[2%]">TELEVISION MANAGER SERVICES</h1>
            <div className="flex gap-[11%] py-[2%] justify-between">
              <p>TASK:</p>
              <p className="text-sm">Conducted a review of the current site, identified pain points that did not allow the 
                client to be more recognizable to be more recognizable </p>
             </div>
            <div className="flex gap-[5%] py-[2%] ">
              <p>DECISION:</p>
              <p className="text-sm">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable to be more recognizable </p>

            </div>
            <div className="flex justify-between pt-[20%] pb-[4%] items-center">
              <h1 >#LANDING PAGE</h1>
              <Button hasbgGreen={true} itemBtn='DETAILS' />
            </div>
            </div> 
          </div>

          <div className="py-[1%] border-b border-solid border-black grid md:grid-cols-2 gap-[4%]">
           <div className=""><img src={img3} alt="" /></div>
           <div className="">
            <h1 className="text-3xl font-medium py-[2%]">TELEVISION MANAGER SERVICES</h1>
            <div className="flex gap-[11%] py-[2%] justify-between">
              <p>TASK:</p>
              <p className="text-sm">Conducted a review of the current site, identified pain points that did not allow the 
                client to be more recognizable to be more recognizable </p>
             </div>
            <div className="flex gap-[5%] py-[2%] ">
              <p>DECISION:</p>
              <p className="text-sm">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable to be more recognizable </p>

            </div>
            <div className="flex justify-between pt-[20%] pb-[4%] items-center">
              <h1 >#LANDING PAGE</h1>
              <Button hasbgGreen={true} itemBtn='DETAILS' />
            </div>
            </div> 
          </div>

        
        </div>
      </section>
      <section className="bg-[#1F2124]">
        <div className="px-[5%] grid lg:grid-cols-2 pb-2">
          <h1 className="text-6xl font-bold text-[#F9CDCD] py-[25%]">Our Services</h1>
          <p className="text-3xl font-medium text-white w-[80%] self-end justify-self-end text-end">skills and tools that enable businesses to take a step</p>
        </div>
<div className="grid lg:grid-cols-[40%,60%] p-[5%] border-t border-solid border-[#f9cdcd]">
  <h1 className="text-5xl font-semibold text-[#f9cdcd]">REDESIGN</h1>
  <div className="grid md:grid-cols-2 gap-[5%] md:pb-1 pb-[40%]">
   
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
   </div>
</div>

<div className="grid lg:grid-cols-[40%,60%] p-[5%] border-t border-solid border-[#f9cdcd]">
  <h1 className="text-5xl font-semibold text-[#f9cdcd]">REDESIGN</h1>
  <div className="grid md:grid-cols-2 gap-[5%] md:pb-1 pb-[40%]">
   
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
   </div>
</div>

<div className="lg:grid grid-cols-[40%,60%] p-[5%] border-t border-solid border-[#f9cdcd]">
  <h1 className="text-5xl font-semibold text-[#f9cdcd]">REDESIGN</h1>
  <div className="grid md:grid-cols-2 gap-[5%] md:pb-1 pb-[40%]">
   
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
      <div className="">
        <p className="text-xl py-[3%] text-[#F9CDCD]">REDESIGN WEB-SITE</p>
        <p className="text-white text-lg pb-[7%]">Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable Conducted a review of the current site, identified pain points that did not allow the client to be more recognizable </p>
      </div>
   </div>
</div>

      </section>
     </main>
     <footer>
      <div className="grid lg:grid-cols-2 p-[5%] ">
        <h1 className="self-center text-5xl font-semibold ">MODERN SITE</h1>
        <h1 className="md:w-[73%] w-[90%] text-3xl font-medium">We collaborate with ambitious brands and people. Let's build. </h1>
      </div>
     </footer>
     
    </div>
  );
}

export default App;
