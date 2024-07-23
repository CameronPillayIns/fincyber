import React from "react";

import p1 from "../assets/InspiritLogo-White.png";
import Terms from "./Terms";
import PAIA from "./PAIA";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
      <img src={p1} alt="" className="w-32 align-left" />
     
      
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Menu</h6>
          <ul>
            <li className="py-2 text-sm"> <a href="/services">Services</a></li>
            <li className="py-2 text-sm"> <a href="/technology">Technology</a></li>
            <li className="py-2 text-sm"><a href="/contact">Contact</a></li>
            <li className="py-2 text-sm"><a href="/login">Sign In</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Information</h6>
          <ul>
            <li className="py-2 text-sm"><a href="/about">About</a></li>
            <li className="py-2 text-sm"><a href="/faqs">FAQs</a></li>
            
            <li className="py-2 text-sm"><a href="/articles">Articles</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Policies</h6>
          <ul>
          
             
            <li className="py-2 text-sm"><a href="/terms" >Terms & Conditions</a></li>
            <li className="py-2 text-sm"><a href="/paia">PAIA</a></li>
            <li className="py-2 text-sm"><a href="/cookiePolicy">Cookie Policy</a></li>
            
          </ul>
              </div>
              
          </div>
        
          
      
      </div>
     
  );
};

export default Footer;
