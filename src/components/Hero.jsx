import React from 'react';

import { ReactTyped } from "react-typed";
const Hero = () => {
    return (
   
    <div className='text-white'>
      <div className='p-4 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className=' font-bold p-2'>
          Inspirit
        </p>
        <h1 className='text-[#42aecc] md:text-7xl p-4 sm:text-6xl text-4xl font-bold md:py-6'>
        FinCyber
        </h1>
        <div className='p-4 flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            
          </p>
          <ReactTyped
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Know Your Customer', 'Know Your Employee', 'Due Diligence']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          </div>
          
         
        <p className='p-4 md:text-2xl text-xl font-bold text-gray-500'>Remain compliant and safeguard your business through thorough business verifications</p>
        <button className='bg-[#42aecc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
        </div>
        
  );
};

export default Hero;