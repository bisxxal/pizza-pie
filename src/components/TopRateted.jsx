import React, { useContext, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Darkmode from '../context/Darkmode';
import { pizza } from './data';
import vege from "../assets/images/vege.jpg";

import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';   

function TopRateted() {
  useEffect(()=>{
    AOS.init({

      offset: 200,  
      delay: 100,  
      duration: 800,  
      easing: 'ease-in-sine', 
     
    });
  },[]);

  
  const {darkmode, makeorder , toggleDarkMode}  =  useContext(Darkmode);
 
  return (
    <div  className={` ${darkmode ? 'dark bg-black ':'light bg-white' } w-full flex flex-col justify-center items-center lg:h-screen `} >
      <div>
    
        <h1 data-aos = "zoom-in" className={` ${darkmode ? 'dark text-white ':'light text-black' } text-center text-[7vh] font-bold pt-20 px-5 `} >Top Rated</h1>
        <p data-aos = "zoom-in" className={` ${darkmode ? 'dark text-white ':'light text-black' }   text-center text-[3vh] px-5 `}>Stop by and find out what all the buzz is about. Order your favorites today
        or visit our restaurant to create your ideal pizza!</p></div>

          
<div className="lg:px-20 lg:py-9 py-4 px-4 w-full lg:h-[90vh] mb-9 h-[50vh] lg:block flex-wrap   flex-col justify-center gap-7 items-center">
  <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{ clickable: true }}
    loop={true}
    navigation={true}
    className="mySwiper w-full h-full"
    breakpoints={{
     
      240: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
     
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }}
  >
    {pizza.map((item, index) => (
      <SwiperSlide key={index} className=" swip bg-[#3b3b3b]  py-5 flex flex-col justify-center items-center gap-4 rounded-xl">
        <img src={item.image} alt="asdasdasd" className="rounded-md object-cover h-[230px] w-[230px] transform hover:scale-105 transition-transform duration-300 cursor-pointer" />
        <h1 className="text-white text-center text-2xl font-bold">{item.title}</h1>
        <h1 className="text-orange-500 text-center text-3xl font-bold">{item.price}</h1>
        <p className="lg:w-[60%] w-full text-lg text-center text-white">{item.para}</p>
        <button onClick={makeorder} className="bg-orange-500 font-bold text-white transition hover:bg-black px-9 py-3 rounded-full">Order Now</button>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
       </div>
  )
}

export default TopRateted