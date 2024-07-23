import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

import Nav from "./components/Nav";
import ContactButton from "./components/ContactButton";


/* 
import { About, Services, Technology, Articles, Faqs, Contact, Login } from "./index"; */
import About from "./components/About";
import Services from "./components/Services";
import Technology from "./components/Technology";
import Articles from "./components/Articles";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Footer2 from "./components/Footer2";
import Footer from "./components/Footer";

import PAIA from "./components/PAIA";
import Terms from "./components/Terms";
import CookiePolicy from "./components/CookiePolicy";
/* import Institues from "./components/Institutes" */
function App() {
  return (
    <div className='overflow-hidden'>
      

   <div className="relative z-20">
      <Nav />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/technology" element={<Technology/>}></Route>
        <Route path="/articles" element={<Articles/>}></Route>
        <Route path="/faqs" element={<Faqs/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
       
          <Route path="/paia" element={<PAIA/>}></Route>
          <Route path="/cookiePolicy" element={<CookiePolicy/>}></Route>
          <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </div>
      
      <div className="footer">
        <Footer />
        <hr className=" w-[90%] h-px mx-auto my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
