import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import p1 from "../Images/InspiritLogo-White.png";
import Link from "react-scroll";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img src={p1} alt="" className="w-32 align-left" />
      <ul className="hidden md:flex">
        <li className="p-4" id="home">
          Home{" "}
        </li>
        <li className="p-4" id="about">
          About
        </li>
        <li className="p-4" id="Services">
          Services
        </li>
        <li className="p-4" id="Technology">
          Technology
        </li>
        <li className="p-4" id="Faqs">
          Faqs
        </li>
        <li className="p-4" id="Contact">
          Contact
        </li>
        <li className="p-4" id="Articles">
          Articles
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#15476a] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#42aecc] m-4">
          INSPIRIT.
        </h1>

        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Services</li>
        <li className="p-4 border-b border-gray-600">Technology</li>
        <li className="p-4 border-b border-gray-600">Faqs</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        <li className="p-4">Articles</li>
      </ul>
    </div>
  );
};

export default Navbar;
