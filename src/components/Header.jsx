import React, { useState ,useContext } from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import Darkmode from '../context/Darkmode';
function Header() {
  const [menu ,setmenu] = useState(false);

  const togglemenu = ()=>{
    setmenu(!menu)
  }
  const closemenu = ()=>{
    setmenu(true)
  }

  const {Order }  =  useContext(Darkmode);
  return (
    <div className='top-0 z-50 fixed flex justify-between items-center w-full h-[70px] backdrop-blur-20  bg-[#000000b9]  px-9'>
        <div> <h1 className= 'flex items-center justify-center lg:mb-7 leading-none nav text  text-[6vh] font-semibold text-white'>Pizza <span className='navtext text-[10vh] inline-block  mt-[-40px] text-orange-500'>pie</span></h1></div>
        <div className='lg:flex hidden  lg:block lg:gap-11 text-white'>
            {["home  ","about", "pizza ","FAQ","contact"].map((item,index)=>(  <a  key={index}  to={item}>{item}</a>)  )}
        </div>
        <div className='lg:flex hidden relative  lg:block lg:gap-7'>
        <IoMdSearch style={{color:"white" , fontSize:"3.5vh"}}  />
        <IoPersonSharp className='text-blue-500' style={{ fontSize:"3.5vh"}} />
        <FaHeart className='text-red-500 ' style={{ fontSize:"3.5vh"}}  />
        <FaShoppingCart className=' z-10' style={{color:"white" , fontSize:"3.5vh"}}   />
      <div className=' absolute w-6 h-6 right-[-12px] top-[-15px] rounded-full bg-red-600 text-white flex items-center justify-center text-[13px] '> {Order}</div>
        </div>
        <div onClick={togglemenu}>{menu ? <IoMdClose className='text-white text-[30px]' /> :<IoMdMenu className='text-white text-[30px] lg:hidden' /> }
        </div>

        <div className={`${menu ? 'flex' : 'hidden'} bg-[#000000b9] h-fit w-full p-4 absolute top-[70px] items-center justify-center capitalize left-0  `} onClick={closemenu} > 
        <div className='flex flex-col text-white    justify-center items-center gap-2 w-full '>
        {["home  "," about", "pizza ","FAQ","contact"].map((item,index)=>( <a className='w-full text-center rounded-lg px-3 py-1 hover:bg-orange-500' key={index} href="#">{item}</a>) )}
        </div>
        </div>
        
    </div>
  )
}

export default Header