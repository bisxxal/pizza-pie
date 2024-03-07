import React, { useContext, useEffect } from 'react'
import { pizza } from './data'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Darkmode from '../context/Darkmode';
 
function BestSeller() {
  useEffect(()=>{
    AOS.init({

      offset: 200,  
      delay: 100,  
      duration: 800,  
      easing: 'ease-in-sine', 
     
    });
  },[]);

  
  const {makeorder , darkmode }  =  useContext(Darkmode);
  return (
    <div className=' w-full lg:h-[180vh] bg-[#5c5e5f] text-white '> 
    <h1 data-aos="zoom-in" className='text-center text-[7vh] font-semibold'>  Our Best Sellers</h1>
      <div    className='w-full flex flex-col lg:flex-row flex-wrap justify-center items-start px-8 gap-10'> 
        {
         
           pizza.map((item,index)=>(
            <div data-aos= {'slide-up'}  key={index} id='product-box'  className={` ${darkmode ? 'dark bg-[#111827] ':'light bg-white' } w-full bg-[#3b3b3b] lg:h-[79vh] lg:w-[24vw] p-8 flex flex-col justify-evenly items-center gap-4 rounded-xl `}  >
              <img src={item.image} alt="asdasdasd" className=' rounded-md object-cover lg:h-[100%] lg:w-[100%  ] transform hover:scale-105 transition-transform duration-300 cursor-pointer'  />
              <h1  className={` ${darkmode ? 'dark text-white ':'light text-black' } text-center text-2xl font-bold`}   >{item.title}</h1>
              <h1   className=' text-orange-500 text-center text-3xl font-bold ' >{item.price}</h1>
              <p  className={` ${darkmode ? 'dark text-white ':'light text-black' } font-medium text-lg text-center `}   >{item.para}</p>
              <button onClick={makeorder} className={` ${darkmode ? 'dark text-white ':'light text-black' }  bg-orange-500 font-bold  transition hover:bg-black px-9 py-3 rounded-full `}  >Order Now</button>
            </div>
          ))
        
        
        }</div>
    </div>
  )
}

export default BestSeller