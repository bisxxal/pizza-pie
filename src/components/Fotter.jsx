import React, { useContext, useEffect, useState } from 'react'
import { FaFacebook } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";


import { MdDarkMode } from "react-icons/md";

import { CiLight } from "react-icons/ci";
import Darkmode from '../context/Darkmode';
function Fotter() {
  const {darkmode , toggleDarkMode}  =  useContext(Darkmode);
 const [light , setlight ] = useState(0);

 const toggleLightMode =  ()=>{
      setlight(!light);
 }
  return (
    <div className='flex flex-col bg-[#111827] items-center justify-center gap-6'>  
      <h1 className='text-white text-[5vh] font-semibold'> Pizza <span className='navtext text-[8vh] text-orange-500 font-semibold'>Pie</span></h1>
<p className='text-white '>Slice into perfection with every bite – Welcome to our pizza paradise!</p>

<div className='flex gap-4'>
  <div className='bg-orange-500 p-3  rounded-full'><FaFacebook  className='text-[4vh] text-white'/></div>
  <div className='bg-orange-500 p-3  rounded-full'><FaTwitter  className='text-[4vh] text-white'/></div>
  <div className='bg-orange-500 p-3  rounded-full'><FaInstagram className='text-[4vh] text-white' /></div>
 
</div>

<div className=' fixed bottom-4 left-5'>
<button onClick={toggleDarkMode}  className='bg-orange-500 p-3  rounded-full'>
 {darkmode ? <CiLight  className='text-[4vh]   text-white' /> : <MdDarkMode  className='text-[4vh] font-semibold text-white' />  }  
  </button>
  </div>




    </div>
  )
}

export default Fotter