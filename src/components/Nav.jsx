import React from 'react'
import { Link } from "react-router-dom";
import p1 from "../assets/InspiritLogo-White.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export const Nav = () => {
    const [nav, setNav] = useState(false);
  
    const handleNav = () => {
      setNav(!nav);
    };
  return (
      <nav className="flex justify-between items-center h-24  mx-auto px-4 text-white bg-[#162c4b]">
         <Link to="/"><img src={p1} alt="" className="w-32 align-left" /></Link>
          <ul className="hidden md:flex"> 
              <li className="p-4 text-gray-400">
                  <Link to="/about">About</Link>
              </li>
              <li className="p-4 text-gray-400">
                  <Link to="/services">Services</Link>
              </li>
              <li className="p-4 text-gray-400">
                  <Link to="/technology">Technology</Link>
              </li>
              <li className="p-4 text-gray-400">
                  <Link to="/articles">Articles</Link>
              </li>
              <li className="p-4 text-gray-400">
                  <Link to="/faqs">Faqs</Link>
              </li>
              <li className="p-4 text-gray-400">
                  <Link to="/contact">Contact</Link>
              </li>
       
              <li className="p-4 bg-[#42aecc]  rounded-md text-white cursor-pointer">
                  <Link to="/login">Sign In</Link>
        </li>
        
             
          </ul>
          
       
        <div onClick={handleNav} className=" block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "z-10 fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#15476a] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
         <li className="p-4 border-b border-gray-600">
          <a href="/">Home</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/about">About</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/services">Services</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/technology">Technology</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/faqs">FAQs</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/contact">Contact</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          
          <a href="/articles">Articles</a>
        </li>

        <li className="p-4 border-b border-gray-600">
          <a href="/login" className="bg-[#42aecc] px-4 py-2 rounded-md text-white cursor-pointer">
            Sign In
          </a>
        </li>
      </ul>
      </nav>
      
  )
}

export default Nav
