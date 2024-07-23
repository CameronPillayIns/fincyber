import React from "react";
import Accordion from "./Accordion";
import { Helmet } from "react-helmet";
import { Section } from "lucide-react";
const Faqs = () => {
 
    <Accordion
    className="text-white "  />
  return (

    <div className=" h-full mt-5 mb-5 m-auto flex flex-col w-[60%] bg-[#062d4c]  py-20 p-4 rounded-lg">
      <h1 className="text-center text-2xl  text-white">FAQs</h1>
      <Helmet>
        <title>FAQs</title>
        <meta name="description" content="Frequently Asked Questions" />
        <meta name='keywords' content='Kyc, Kye, Due Diligence, compliance, AML, AVS, Validation, ID Verification, FICA, FIC'></meta>
      </Helmet>
      <Accordion
        title="What is AML?"
        answer="Anti-Money Laundering refers to a set of laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income."
       
      />
      <Accordion
        title="What are AML measures?"
        answer ="FIC,
                KYC,
                Suspicious Transaction Reporting,
                Record-Keeping Requirements,
                Risk-Based Approach,
                Training and Awareness,
                International Cooperation,
                Penalties for non-compliance"
                 
              
      />
      <Accordion
        title="What is AVS?"
        answer="A security feature commonly used in payment processing to help verify the identity of a cardholder during a transaction. AVS compares the billing address provided by the card holder with the address on file with the card issuer."
      />
      <Accordion
        title="How does AVS work?
"
        answer="Transaction Initiation,
                Address Verification,
                Comparison with card issuer’s Records,
                Response Code,
                Merchant Decision"
      />
      <Accordion
        title="What is FinCyber's Validation process?"
        answer="Fincyber’s FICA process offers a customizable workflow that includes the following checks:

                Identity verification (ID number, name and surname),
                Address KYC,
                Bank account verification,
                Facial recognition,
                World checks – AML, PIPS and PEPS"
      />
      <Accordion
        title="How long will the verification process take?"
        answer="The entire FICA process is conducted in real-time, which includes Identity verification, Facial recognition, Bank account verification, KYC with World Compliance checks and should not take more than 2 to 3 minutes to complete."
      />
      <Accordion
        title="What is FICA?"
        answer="The FIC Act introduces a regulatory framework of measures requiring certain categories of business to fulfil compliance obligations. These compliance obligations are critical to assisting in identifying and disrupting money laundering, tax evasion and terrorist financing activities."
      />
      <Accordion
        title="Who does FICA apply to?"
        answer="The Act applies to all Accountable and Reporting Institutions as defined in schedule 1 of the Act, must comply with the requirements set out in the Act."
      />
      <Accordion
        title="What documents are required for FICA?"
        answer="
                1. Electronic copy, image of green barcoded/ smart identity card
                2. Proof of address not less than 3 months old
                3. Proof of bank account using a bank statement or bank confirmation letter"
      />
     
   </div>
   
  );
};

export default Faqs;
