import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner4 from '../assets/images/banner4.jpg'
function Hero() {
 
  useEffect(()=>{
    AOS.init({

      offset: 200,  
      delay: 100,  
      duration: 800,  
      easing: 'ease-in-sine', 
     
    });
  },[])
  return (
    <div  className=' items-center hero  mt-[70px]  bg-center bg-cover w-full h-screen bg-slate-800 flex ' style={{backgroundImage:`url(${banner4})`}}> 
    

    <div  data-aos-delay="500" className='px-[5vh] lg:px-[10vh] leading-none text-white w-[80%] lg:w-[60%] '>
      <h1 data-aos="zoom-in" className='lg:text-[9vh] text-[30px] font-semibold'>Life is a combination of Pizza & Magic</h1>
      <p data-aos="zoom-in" className='w-[70%] text-[16px] leading-5 lg:text-[2.7vh]  mt-3'>
      "Savor the taste of perfection with every slice – Welcome to the ultimate pizza paradise where every bite is a delight!!
      </p>
    <button data-aos="flip-up" className='px-10 py-5 bg-orange-500 rounded-xl mt-10' > Order now</button>
    </div>
    </div>
  )
}

export default Hero