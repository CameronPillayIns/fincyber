import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <section className="py-20 bg-[#162c4b]  ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
          {/* Contact Information */}
          <div className=" bg-white/10  text-white rounded-lg shadow-md p-8 ">
            <h2 className="text-2xl font-semibold  mb-6">Contact Information</h2>
            <Helmet>
        <title>Contact</title>
        <meta name="description" content="Inspirit Contact Page" />
        <meta name='keywords' content='Get in touch, Contact, Email, Phone'></meta>
      </Helmet>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <IoMdCall/>
                <span>+27 31 584 7379</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail/>
                <span>info@inspirit.co.za</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaLocationDot/>
                <span>4 Holwood Cres, Umhlanga</span>
              </li>
            </ul>
           
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 shadow-lg  text-white rounded-lg p-8 w-[100%]">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="firstName" className="block text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2d74bc]"
                    placeholder="Your First Name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2d74bc]"
                    placeholder="Your Last Name"
                  />
                </div>

                <div className="mb-4 ">
                  <label htmlFor="email" className="block  text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2d74bc]"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4 ">
                  <label htmlFor="phone" className="block text-sm font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2d74bc]"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block  text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#2d74bc]"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#2d74bc] text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-[#2d74bc]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
