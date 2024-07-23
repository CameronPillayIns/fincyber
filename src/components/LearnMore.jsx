import React from 'react'
import p1 from '../Images/LearnMore.png'


const LearnMore = () => {
  return (
    <div className='w-full py-16 px-4 '>
    <div className='max-w-[90%] mx-auto grid md:grid-cols-2'>
      <img className='w-[800px] mx-auto my-4' src={p1} alt='Image of laptop' />
      <div className='flex flex-col justify-center'>
        
        <h1 className='text-4xl font-extrabold  text-left  text-[#162c4b] sm:text-6xl'>We are here to Listen</h1>
        <p className='text-[#162c4b] mt-4 font-bold'>
          Speak to one of our dedicated solutions experts to find out more
        </p>
        <button className='bg-[#42aecc] mt-12 w-[200px] text-black rounded-md font-bold my-6 mx-auto px-6 py-3   md:mx-0'>Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default LearnMore
