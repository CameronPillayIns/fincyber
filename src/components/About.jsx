import React from "react";
import p1 from "../Images/aboutus.png";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className=" about  w-full  py-16 px-4">
      <div className="  max-w-[90%] mx-auto grid md:grid-cols-2">
        <img className=" aboutImg w-[600px] mx-auto my-4" src={p1} alt="Inspirit about image" />
        <div className=" text-white flex flex-col justify-center items-start">
          <h1 className="md:text-3xl sm:text-2xl text-1xl font-bold py-2">
            About
          </h1>
          <Helmet>
            <title>About </title>
          
        <meta name="description" content="About Inspirit " />
        <meta name='keywords' content='Kyc, Kye, Due Diligence, compliance'></meta>
          </Helmet>
          <p className="max-w-[600px]">
            As experts in the ICT industry since 1999 we at Inspirit have
            experience within the ERP landscape driving integration, automation
            and optimization. We have a blend of OEM and custom developed
            solutions to enhance your business outputs to ultimately make your
            organisation more efficient and effective. Over the last decade we
            have harnessed the power of data driven solutions to provide our
            customers with analytical and tailored data solutions to meet their
            business needs. We are a South African based organisation with an
            EMEA (Europe, the Middle East & Africa) footprint and have partnered
            with some of Africa's largest ICT companies like SYSPRO, IOCO, MIE
            and XDS giving us access to a broad range of solutions, data
            products and access to specialised resources to optimise your
            business. At the Inspirit group of companies, we create industry
            specific solutions that are easily accessible for small to medium
            organisations and blue-chip companies
          </p>
          <button className="">
            <a
              href="/contact"
              className="  text-white mx-auto rounded-md mt-12 flex space-x-4 btn bg-[#42aecc] hover:bg-gray-400  max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-[#42aecc]"
            >
              Learn More
            </a>
          </button>
        </div>
      </div>

      <div className="mt-20 max-w-[82%] mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full  leading-6 flex shadow-xl  bg-gray-100 rounded-lg flex-col p-4 my-4  hover:scale-105 duration-300">
          <h1 className=" text-xl text-center bg-[#162c4b] text-white  rounded-md">
            What we do
          </h1>
          <p>
            Inspirit provides insights to companies and assists in unlocking
            their unknown potential or hidden opportunities by delivering
            top-quality, business intelligence and analytic solutions under one
            umbrella.
          </p>
          <p>
            The Inspirit group of companies prides itself on being change
            management agents and are passionate about "breathing new life into
            your business"
          </p>
        </div>
        <div className="w-full  leading-6 justify-center shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h1 className=" text-xl text-center bg-[#162c4b] text-white  rounded-md">
            People and Risk Applications
          </h1>
          <ul>
            <li>
              Human Capital Management, encompassing resource onboarding,
              employee vetting, criminal & educational checks{" "}
            </li>
            <li>
              Tracing Applications - debtor tracing, consumer and company
              verification -KYC, Data Enrichment, Fraud Prevention
            </li>
            <li>
              FCS Applications - provide solutions that enables businesses to
              remain compliant with the Financial Sector Regulation Act
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default About;
