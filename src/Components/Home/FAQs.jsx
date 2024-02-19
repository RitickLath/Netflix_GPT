import React from "react";
import FAQButton from "./FAQButton";
import { faqData } from "../../Constants/FAQS";

const FAQs = () => {
  return (
    <div className="bg-black w-[100%] flex justify-center pb-20 z-50 -mt-40 lg:-mt-5">

      <div className="w-full z-50">
      <hr className=" bg-[#333333] h-2 border-0 " />
        {/* Heading FAQS */}
        <h1 className="text-white font-bold text-3xl lg:text-4xl md:text-4xl pt-12 text-center">
          Frequently Asked Questions
        </h1>

        {/* GAP */}
        <div className="pt-12"></div>

        {/* FAQs BUTTONS */}
        {faqData.map((i, a) => (
          <FAQButton key={a} question={i.question} answer={i.solution} />
        ))}

        {/* FOOTER */}

        <h1 className="text-white text-center text-lg lg:text-xl px-12 pt-12">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className="lg:flex lg:justify-center lg:items-center md:flex md:justify-center flex justify-center mt-6">
          <form className="" action="">
            <input
              className="bg-[#0F0F0F] w-[100%] lg:w-[500px] outline-none bg-transparent border-[0.4px] border-gray-300 px-4 py-4 lg:py-4 rounded-md text-normal"
              type="email"
              placeholder="Email address"
            />
          </form>

          <div>
            <button className="mx-2 rounded-md text-xl lg:text-2xl font-semibold px-4 py-[0.85rem] md:py-4 lg:py-4 bg-[#C11119] text-white">
              Get Started
            </button>
          </div>
        </div>
        <hr className="mt-12 lg:mt-28 md:mt-[4.4rem] bg-[#232323] h-2 border-0" />
      </div>

      {/*  */}
    </div>
  );
};

export default FAQs;
