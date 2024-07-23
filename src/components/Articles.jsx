import React from 'react'
import p1 from "../Images/aboutus.png";
import { Helmet } from "react-helmet";
const Articles = () => {
  return (
    <section className="tech ">
    <div className="container  mx-auto px-4 ">
      <h2 className="text-3xl font-semibold text-center text-white mb-12 ">
        Articles
      </h2>
      <Helmet>
        <title>Articles</title>
        <meta name="description" content="Inspirit Articles" />
        <meta name='keywords' content='Kyc, Kye, Due Diligence, compliance, AML, AVS, Validation, ID Verification, FICA, FIC'></meta>
      </Helmet>
      <div className="flex flex-wrap justify-center">
        <div className="w-[300px] md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-[#062d4c]   shadow-md p-6 hover:scale-105 duration-300">
            <img src={p1} alt="" className='w-48 mx-auto'/>
              <h3 className="text-xl font-bold  mb-4  text-center   text-white  ">
             Blog 1
            </h3>
            <p className="text-white leading-relaxed h-[150px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptatem nam asperiores fugiat repellat, eveniet eligendi eaque explicabo fuga quos!
              </p>
              <p className='text-white text-right mt-6'>1 July 2024</p>
          </div>
        </div>

        <div className="w-[300px] md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-[#074868] shadow-md p-6 hover:scale-105 duration-300">
              <img src={p1} alt="" className='w-48 mx-auto' />
              <h3 className="text-xl font-bold mb-4 text-center   text-white  ">
            Blog 2
            </h3>
            <p className="text-white leading-relaxed h-[150px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptatem nam asperiores fugiat repellat, eveniet eligendi eaque explicabo fuga quos!

              </p>
              <p className='text-white text-right mt-6'>1 July 2024</p>
          </div>
        </div>

        <div className="w-[300px] md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-[#1c74a0]  shadow-md p-6 hover:scale-105 duration-300">
              <img src={p1} alt="" className='w-48 mx-auto' />
              <h3 className="text-xl font-bold mb-4 text-center  text-white  ">
            Blog 3
            </h3>
            <p className="text-white leading-relaxed h-[150px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptatem nam asperiores fugiat repellat, eveniet eligendi eaque explicabo fuga quos!
              </p>
              <p className='text-white text-right mt-6'>1 July 2024</p>
          </div>
        </div>
        <div className="w-[300px] md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-[#062d4c]  shadow-md p-6 hover:scale-105 duration-300">
           
              <img src={p1} alt="" className='w-48 mx-auto' />
              <h3 className="text-xl font-bold mb-4 text-center   text-white  ">
            Blog 4
            </h3>
            <p className="text-white leading-relaxed h-[150px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptatem nam asperiores fugiat repellat, eveniet eligendi eaque explicabo fuga quos!

              </p>
              <p className='text-white text-right mt-6'>1 July 2024</p>
          </div>
        </div>
        <div className="w-[300px] md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-[#074868]  shadow-md p-6 hover:scale-105 duration-300">
          
              <img src={p1} alt="" className='w-48 mx-auto' />
              <h3 className="text-xl font-bold mb-4 text-center   text-white  ">
            Blog 5
            </h3>
            <p className="text-white leading-relaxed h-[150px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptatem nam asperiores fugiat repellat, eveniet eligendi eaque explicabo fuga quos!

              </p>
              <p className='text-white text-right mt-6'>1 July 2024</p>
          </div>
        </div>
        <div className="w-[300px] md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-[#1c74a0]   shadow-md p-6 hover:scale-105 duration-300">
              <img src={p1} alt="" className='w-48 mx-auto' />
              <h3 className="text-xl font-bold mb-4 text-center text-white ">
            Blog 6
            </h3>
            <p className="text-white leading-relaxed h-[150px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptatem nam asperiores fugiat repellat, eveniet eligendi eaque explicabo fuga quos!

              </p>
              <p className='text-white text-right mt-6'>1 July 2024</p>
          </div>
        </div>

        {/* Add more service items as needed */}
      </div>
    </div>
  </section>
  )
}

export default Articles
