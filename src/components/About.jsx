import React, { useContext, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import about1 from '../assets/images/about1.jpg'
import Darkmode from '../context/Darkmode';
function About() {
  
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
    <div className={` ${darkmode ? 'dark bg-black ':'light bg-white' } w-full flex-col `} >
      
      <div className='w-full flex-col lg:py-[50px] flex justify-center gap-9 lg:flex-row lg:justify-evenly  '>

      <div data-aos="zoom-in" data-aos-delay="200" className={` ${darkmode ? 'dark text-white hover:text-black ':'light text-black' } lg:w-[20vw] mx-auto mt-7 w-[70%] h-[200px] lg:h-[32.5vh]  rounded-xl font-bold text-[24px] border-orange-600 border-[2px]  flex items-center justify-center hover:bg-[#feecdcc1] flex-col lg:gap-9  `} ><img src={icon1} alt="" className='w-[80px] h-[80px]  transform hover:scale-105 transition-transform duration-300 cursor-pointer  '/>ABOUT US</div>
      <div data-aos="zoom-in" data-aos-delay="200"  className={` ${darkmode ? 'dark text-white hover:text-black ':'light text-black' } lg:w-[20vw] mx-auto mt-7 w-[70%] h-[200px] lg:h-[32.5vh]  rounded-xl font-bold text-[24px] border-orange-600 border-[2px]  flex items-center justify-center hover:bg-[#FEECDCc1] flex-col lg:gap-9  `} ><img src={icon2} alt="" className='w-[80px] h-[80px]  transform hover:scale-105 transition-transform duration-300 cursor-pointer  '/>ORAGANIC</div>
      <div data-aos="zoom-in" data-aos-delay="200"  className={` ${darkmode ? 'dark text-white hover:text-black ':'light text-black' } lg:w-[20vw] mx-auto mt-7 w-[70%] h-[200px] lg:h-[32.5vh]  rounded-xl font-bold text-[24px] border-orange-600 border-[2px]  flex items-center justify-center hover:bg-[#FEECDCc1] flex-col lg:gap-9  `} ><img src={icon3} alt="" className='w-[80px] h-[80px]  transform hover:scale-105 transition-transform duration-300 cursor-pointer  '/>PIZZA</div>
      <div data-aos="zoom-in" data-aos-delay="200"  className={` ${darkmode ? 'dark text-white hover:text-black ':'light text-black' } lg:w-[20vw] mx-auto mt-7 w-[70%] h-[200px] lg:h-[32.5vh]  rounded-xl font-bold text-[24px] border-orange-600 border-[2px]  flex items-center justify-center hover:bg-[#FEECDCc1] flex-col lg:gap-9  `} ><img src={icon4} alt="" className='w-[80px] h-[80px]  transform hover:scale-105 transition-transform duration-300 cursor-pointer  '/>PASSTA</div>
      </div>

      <div className='w-full   mt-16 flex flex-col lg:flex-row lg:px-20 px-4'>
        <div> <img src={about1} alt="" className='lg:w-[700px]  object-cover rounded-xl overflow-hidden lg:h-[700px]' /></div>
        <div className='lg:w-[50%] flex flex-col items-center justify-center my-auto'> <h4 className={`  ${darkmode ? 'dark text-white ':'light text-black' } text-[3vh] font-semibold mt-9 leading-none`}>WELCOME TO</h4> <h1 className={` ${darkmode ? 'dark text-white ':'light text-black' }  text-[7vh] font-semibold` }  >Pizzazz Pies </h1> 
        <p className=' leading-8 text-[#47505F] px-2 text-[2.7vh] text-center'>We are specialized in authentic Neapolitan pizza, baked hot and fast in a brick oven to achieve a not-too-thick, not-to-thin chewy, smoky crust, made from a recipe that’s been handed down through five generations of pizzaioli (pizza makers).</p>
        </div>
      </div>
    </div>
  )
}

export default About