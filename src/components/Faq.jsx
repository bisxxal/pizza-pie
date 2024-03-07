import React, { useContext, useEffect } from 'react'
 
import faq1 from "../assets/images/faq1.jpg";
import faq2 from "../assets/images/faq2.jpg";
import faq3 from "../assets/images/faq3.jpg";
import faq4 from "../assets/images/faq4.jpg";
import { Accordion } from 'flowbite-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Darkmode from '../context/Darkmode';
function Faq() {
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
 
      

<div className={` ${darkmode ? 'dark bg-black ':'light bg-white' } w-full flex lg:h-[140vh]   py-6 flex-col   lg:flex-row `} >

      <div className={`w-full lg:h-full flex flex-col px-9 lg:flex-wrap gap-9 my-9 lg:w-1/2`} >
      <h1  className={` ${darkmode ? 'dark text-white ':'light text-black' } lg:text-[7vh] text-[5vh] font-semibold`} >Frequently Asked Questions</h1>


      <Accordion>
      <Accordion.Panel>
        <Accordion.Title>What are your opening hours?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We're open seven days a week! Our operating hours are from 11:00 AM to 10:00 PM, Monday through Sunday.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Do you offer delivery services?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, we provide delivery within a 5-mile radius. There's a $3 delivery fee, and orders over $30 qualify for free delivery.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Can I Place Order Online?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We accept all major credit cards, cash upon delivery, and popular online payment platforms like PayPal.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
         
        </Accordion.Content>
      </Accordion.Panel> 
      <Accordion.Panel>
        <Accordion.Title>Do you have gluten-free or vegan pizza options?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, we offer both gluten-free crust and vegan cheese options. You can customize your pizza to suit your dietary preferences.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>How can I customize my pizza?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          You can fully customize your pizza by choosing from a variety of crusts, sauces, cheeses, and toppings. Create the perfect pizza for your taste!
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Are there any current promotions or discounts?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Check out our "Specials" page on the website for the latest promotions and discounts. We also have exclusive deals for our newsletter subscribers.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
    
    </Accordion>
    <button className='bg-orange-500 py-4 w-[160px] rounded-full font-semibold text-white'>Contact Us</button> 

      </div>
      
      <div className='w-full  flex items-center justify-center flex-wrap gap-6 lg:flex-wrap lg:gap-3 lg:h-[89%] lg:w-1/2'> 
        <img className=' lg:w-[20vw] lg:h-[60vh] w-[60vw] h-[30vh]  rounded-xl' src={faq1} alt="" />
        <img  className='lg:w-[20vw] lg:h-[60vh] w-[60vw] h-[30vh] rounded-xl'  src={faq2} alt="" />
        <img  className='lg:w-[20vw] lg:h-[60vh] w-[60vw] h-[30vh] rounded-xl'  src={faq3} alt="" />
        <img  className='lg:w-[20vw] lg:h-[60vh] w-[60vw] h-[30vh] rounded-xl'  src={faq4} alt="" />
      </div> 
</div>
 
  )
}

export default Faq