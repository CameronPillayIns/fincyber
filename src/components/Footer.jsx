import React from "react";
import logo from "../Images/InspiritLogo-White.png";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <img src={logo} alt="" className="w-[200px]" />
        <div className="flex justify-between md:w-[75%] my-6"></div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#42aecc]">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Services</li>
            <li className="py-2 text-sm">Technology</li>
            <li className="py-2 text-sm">Articles</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#42aecc]">Support</h6>
          <ul>
            <li className="py-2 text-sm">Faqs</li>
            <li className="py-2 text-sm">Terms & Conditions</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#42aecc]">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Articles</li>
            <li className="py-2 text-sm">Cookie Policy</li>
          </ul>
        </div>
      </div>
      <hr className="h-px my-8 w-[1200px] bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Footer;
