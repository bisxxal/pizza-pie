import { useState } from 'react' 
import './App.css' 
import Header from './components/Header'
import Hero from './components/Hero'
import Fotter from './components/Fotter'
import Contact from './components/Contact'
import Faq from './components/Faq'
import About from './components/About'
import BestSeller from './components/BestSeller'
import TopRateted from './components/TopRateted'
import Darkmode from './context/Darkmode' 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Try from './components/Try'
 
function App() {
  const [darkmode, setdarkmode] = useState(1)

  const [Order ,setOrder] = useState(0);
  const toggleDarkMode = ()=>{
    setdarkmode(!darkmode);
  }
 const makeorder = ()=>{
  setOrder(Order+1);
 }
   
 
  return (
    <Darkmode.Provider value={{darkmode , toggleDarkMode , Order , makeorder}}>
       
              <Header/>
              <Hero/>
              <About/> 
              <TopRateted/>
              <BestSeller/>
              <Faq/>
              <Contact/>
              <Fotter/>
    </Darkmode.Provider>
  )
}

export default App
