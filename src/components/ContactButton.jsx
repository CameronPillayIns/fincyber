import React from 'react';
import { HiMiniArrowUpRight } from "react-icons/hi2";

const ContactButton = () => {
    return (
      <div className='fixed z-10 bottom-0 right-0 mr-[35px] mb-[35px]'>
      <a href="/contact" className='mx-auto rounded-full  flex space-x-4 btn bg-[#42aecc] hover:bg-gray-400  max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-[#42aecc]'>Contact<HiMiniArrowUpRight /></a>



</div>
  )
}

export default ContactButton
