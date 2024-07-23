import React from "react";
import { Helmet } from "react-helmet";
const Technology = () => {
  return (
    <section className="tech ">
      <div className="container h-[900px] mx-auto px-4 ">
        <h2 className="text-3xl font-semibold text-center text-white mb-12 ">
          Technology
        </h2>
        <Helmet>
          <title>Technology</title>
          <meta name="description" content="Inspirit Technology Page" />
          <meta
            name="keywords"
            content="Customer Onboarding, AVS, Adress Verification, AML, Anti-money laundering, OCR, Fincyber, Validation, Liveness Detection"
          ></meta>
        </Helmet>


        
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-[#062d4c]   shadow-md p-6 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold  mb-4  text-center   text-white  ">
                Customer Onboarding
              </h3>
              <p className="text-white leading-relaxed h-[150px]">
                It encompasses a series of steps aimed at familiarizing
                customers with what the business offers, establishing a positive
                initial experience, and facilitating their transition into
                becoming active and engaged users.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-[#074868] shadow-md p-6 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-4 text-center   text-white  ">
                Address Verification Service
              </h3>
              <p className="text-white leading-relaxed h-[150px]">
                A security feature commonly used in payment processing to help
                verify the identity of a cardholder during a transaction. AVS
                compares the billing address provided by the card holder with
                the address on file with the card issuer.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-[#1c74a0]  shadow-md p-6 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-4 text-center  text-white  ">
                Anti-Money Laundering
              </h3>
              <p className="text-white leading-relaxed h-[150px]">
                Anti-Money Laundering refers to a set of laws, regulations, and
                procedures designed to prevent criminals from disguising
                illegally obtained funds as legitimate income.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-[#062d4c]  shadow-md p-6 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-4 text-center   text-white  ">
                Optical Character Recognition
              </h3>
              <p className="text-white leading-relaxed h-[150px]">
                Fincyber’s Optical Character Recognition (OCR) engine, converts
                images into machine readable text. It is used to extract
                important information from the identity, proof of address and
                bank account documentation and then validates the extracted
                information to 3rd party database sources.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-[#074868]  shadow-md p-6 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-4 text-center   text-white  ">
                FinCyber Validation
              </h3>
              <p className="text-white leading-relaxed h-[150px]">
                Fincyber’s FICA process offers a customizable workflow that
                includes the following checks: Identity verification (ID number,
                name and surname) Address KYC Bank account verification Facial
                recognition World checks – AML, PIPS and PEPS
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-[#1c74a0]   shadow-md p-6 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-4 text-center text-white ">
                Liveness Detection
              </h3>
              <p className="text-white leading-relaxed h-[150px]">
                Facial liveness is a must-have biometric based feature as a way
                to fight fraud by using face biometrics as a means of
                authentication. The role of liveness detection is to 1.
                determine if this is a real person and 2. Validate the image to
                a government database.
              </p>
            </div>
          </div>

          {/* Add more service items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Technology;
