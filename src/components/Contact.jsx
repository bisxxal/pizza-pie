import React, { useContext, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner4 from '../assets/images/contact1.jpg'
import Darkmode from '../context/Darkmode';
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
function Contact() {
  useEffect(()=>{
    AOS.init({

      offset: 200,  
      delay: 100,  
      duration: 800,  
      easing: 'ease-in-sine', 
     
    });
  },[]);
  const {darkmode , toggleDarkMode}  =  useContext(Darkmode);
  return (
    <div  className='flex w-full lg:h-screen   h-[150vh] bg-red-600 bg-cover bg-no-repeat bg-center p-3 ' style={{backgroundImage:`url(${banner4})`}}>
      
      <div className='w-full  px-3  h-full flex lg:flex-row gap-4 flex-col items-center justify-center '>

        <div data-aos= {'zoom-in'}  className={` ${darkmode ? 'dark bg-[#111827] ':'light bg-white'} flex flex-col gap-2 items-center justify-center  h-[300px] w-[400px] border-l-8 border-orange-500 p-4 rounded-xl `}  >
          <div className='bg-orange-500 rounded-[50%] p-3'>
            <FaMapMarkedAlt className='text-white text-[6vh] ' /> 

          </div>
            <h1 className=' dark:text-white   text-[4vh] font-semibold '>Reach Us </h1>
            <p className=' dark:text-white text-center '>Lorem ipsum d  soluta harum eaque distinctio quae perferendis ducimus!</p>
            <button className='text-white bg-orange-500 px-7 py-3 rounded-full'>OPEN MAP</button>
        </div>

        <div data-aos= {'zoom-in'}  className={` ${darkmode ? 'dark bg-[#111827] ':'light bg-white'} flex flex-col gap-2 items-center justify-center  h-[300px] w-[400px] border-l-8 border-orange-500 p-4 rounded-xl `}  >
        <div className='bg-orange-500 rounded-[50%] p-3'>
            <IoIosMail className='text-white text-[6vh] ' /> 

          </div>
            <h1 className=' dark:text-white   text-[4vh] font-semibold '>EMAIL US </h1>
            <p className=' dark:text-white text-center '>Lorem ipsum d  soluta harum eaque distinctio quae perferendis ducimus!</p>
            <button className='text-white bg-orange-500 px-7 py-3 rounded-full'>Helllo@gmail.com</button>
        </div>


        <div data-aos= {'zoom-in'}  className={` ${darkmode ? 'dark bg-[#111827] ':'light bg-white'} flex flex-col gap-2 items-center justify-center  h-[300px] w-[400px] border-l-8 border-orange-500 p-4 rounded-xl `}  >
        <div className='bg-orange-500 rounded-[50%] p-3'>
            <IoCall className='text-white text-[6vh] ' /> 
          </div>
            <h1 className=' dark:text-white   text-[4vh] font-semibold '>CALL US</h1>
            <p className=' dark:text-white text-center '>Lorem ipsum d  soluta harum eaque distinctio quae perferendis ducimus!</p>
            <button className='text-white bg-orange-500 px-7 py-3 rounded-full'> +91 32454 53242  </button>
        </div>


      </div>
    </div>
  )
}

export default Contact