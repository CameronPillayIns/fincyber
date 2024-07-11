import React from 'react'
import daisyui from "daisyui"

const Services = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              
              <h2 className='text-2xl font-bold text-center py-8'>Due Diligence</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Bank Account Verification</p>
                  <p className='py-2 border-b mx-8'>Sanctions</p>
            <p className='py-2 border-b mx-8'>Debt Summary</p>
            <p className='py-2 border-b mx-8'>Compliance</p>
              </div>
              <button className='bg-[#42aecc] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300'>
             
              <h2 className='text-2xl font-bold text-center py-8'>Know Your Customer</h2>
            
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>ID Verification</p>
                  <p className='py-2 border-b mx-8'>Address Verification</p>
            <p className='py-2 border-b mx-8'>Risk Calculation</p>
            <p className='py-2 border-b mx-8'>Customer Due Diligence</p>
              </div>
              <button className='bg-black text-[#42aecc] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl flex  bg-gray-100 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
             
              <h2 className='text-2xl font-bold text-center py-8'>Know Your Employee</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>ID Verification</p>
                  <p className='py-2 border-b mx-8'>Credit Checks</p>
            <p className='py-2 border-b mx-8'>Criminal Records</p>
            <p className='py-2 border-b mx-8'>Educational Qualifications</p>
              </div>
              <button className='bg-[#42aecc] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
      </div>
    </div>
      
      
  )
}

export default Services
