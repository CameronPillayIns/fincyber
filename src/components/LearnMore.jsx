import React from 'react'
import p1 from '../Images/LearnMore.png'
const LearnMore = () => {
  return (
    <div className='w-full py-16 px-4 bg-[#081b29]'>
    <div className='max-w-[90%] mx-auto grid md:grid-cols-2'>
      <img className='w-[800px] mx-auto my-4' src={p1} alt='/' />
      <div className='flex flex-col justify-center'>
        
        <h1 className='md:text-4xl sm:text-3xl mt-4 text-2xl font-bold py-4 text-white'>We are here to Listen</h1>
        <p className='text-white mt-4'>
          Speak to one of our dedicated solutions experts to find out more
        </p>
        <button className='bg-[#42aecc] mt-12 w-[200px] text-black rounded-md font-medium my-6 mx-auto px-6 py-3   md:mx-0'>Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default LearnMore
