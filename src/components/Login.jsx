import React from 'react'

const Login = () => {
  return (
    <div className=' grid mx-auto h-screen w-full'>
        

        <div className='bg-[#162c4b] flex flex-col '>
            <form className=' bg-white/25 rounded-md mt-40  max-w-[400px] w-full mx-auto bg-white p-4'>
          
          
            <h2 className='text-xl font-bold text-center py-6 text-white'>Login</h2>
                <div className='flex flex-col py-2'>
                    
                    <input placeholder="Username" className='border p-2 rounded-md' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    
                    <input placeholder="Password" className='border p-2 rounded-md' type="password" />
                </div>
                <button className='border w-full my-5 py-2 rounded-md bg-[#162c4b] hover:bg-[#417ccf] text-white'>Sign In</button>
                <div className='flex justify-between'>
                  
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
