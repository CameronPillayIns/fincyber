import React from "react";
import { Helmet } from "react-helmet";
const DueDil = () => {
  return (
    <div className="w-full text-sm  py-[10rem] px-4">
          <Helmet>
        <title>Articles</title>
        <meta name="description" content="Inspirit Articles" />
        <meta name='keywords' content='Kyc, Kye, Due Diligence, compliance, AML, AVS, Validation, ID Verification, FICA, FIC'></meta>
      </Helmet>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">Due Diligence</h2>

          <div className="text-center  h-[200px] md:h-[350px]  font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Real-time Identity Verification
            </p>
            <p className="py-2 border-b mx-8">Bank Account Verification</p>
            <p className="py-2 border-b mx-8">Debt Summary</p>
            <p className="py-2 border-b mx-8">RMCP Risk Rating</p>
            <p className="py-2 border-b mx-8">Facial Recognition</p>
          </div>
          
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            KYC
          </h2>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Sanctions</p>
            <p className="py-2 border-b mx-8"> Anti-Money Laundering</p>
            <p className="py-2 border-b mx-8">DPEP</p>
            <p className="py-2 border-b mx-8"> FPEP </p>
            <p className="py-2 border-b mx-8"> PIP </p>
            <p className="py-2 border-b mx-8">TFS Screening</p>
          </div>
         
        </div>
        <div className="w-full shadow-xl flex  bg-gray-100 flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Know Your Employee
          </h2>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Reference Checks</p>
            <p className="py-2 border-b mx-8">Credit Checks</p>
            <p className="py-2 border-b mx-8">Criminal Checks</p>
            <p className="py-2 border-b mx-8">Industry Membership Checks</p>
            <p className="py-2 border-b mx-8">Compliance Screening</p>
            <p className="py-2 border-b mx-8">Risk Assessment</p>
          </div>
         
        </div>
        <div></div>
        <button >
        <a href="/services" className=' text-white mx-auto rounded-md mt-12 flex space-x-4 btn bg-[#42aecc] hover:bg-gray-400  max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-[#42aecc]'>Learn More</a>
          
        </button>
        
      </div>
    </div>
  );
};

export default DueDil;
