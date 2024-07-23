import React from 'react'
import p1 from '../Images/Syspro.png';
import p2 from '../Images/IOCO.png';
import p3 from '../Images/MIE.png';
import p4 from '../Images/XDS.png';

const Partners = () => {
  return (
    <div className="w-full  py-[10rem] px-4">
    <h1 className='text-white text-center text-4xl font-extrabold   sm:text-2xl mb-8'>Powered By</h1>
    <div className='max-w-[1240px] mx-auto grid-cols-1 grid md:grid-cols-4 gap-8'>
        
    <div className='w-full  justify-center shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        
    <img className='  mx-auto h-full hidden lg:block' src={p1} alt='/' />
       
    </div>
    <div className='w-full  justify-center shadow-xl bg-gray-100 flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300'>
       
      
    <img className='  mx-auto hidden lg:block' src={p4} alt='/' />
       
    </div>
    <div className='w-full justify-center shadow-xl flex  bg-gray-100 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
       
      
    <img className='   mx-auto hidden lg:block' src={p2} alt='/' />
        </div>
        <div className='w-full  justify-center shadow-xl flex  bg-gray-100 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
       
        <img className='  mx-auto hidden lg:block' src={p3} alt='/' />
    
        </div>
       
    
   
</div>
</div>
  )
}

export default Partners
