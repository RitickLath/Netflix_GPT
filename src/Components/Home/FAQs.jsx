import React, { useState } from "react";
import FAQButton from "./FAQButton";
import { faqData } from "../../Constants/FAQS";
import { useNavigate } from "react-router-dom";

const FAQs = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState();
  return (
    <div className="bg-[black] w-[100%] flex justify-center pb-20 z-50 -mt-48 lg:-mt-5">
      <div className="w-full z-50">
        <hr className=" bg-[#333333] h-2 border-0 " />
        {/* Heading FAQS */}
        <h1 className="px-4 text-white font-bold text-2xl sm:text-3xl lg:text-4xl md:text-4xl pt-12 text-center">
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
          <form className="flex w-full px-6 justify-center" action="">
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="bg-[#0F0F0F] w-[300px] md:w-[400px] lg:w-[400px] outline-none bg-transparent border-[0.4px] border-gray-300 px-4 py-3 lg:py-3 rounded-md text-normal"
              type="email"
              required
              placeholder="Email address"
            />

            <button
              onClick={() => {
                /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
                  input
                ) && navigate("/signup");
              }}
              className="mx-2 w-[160px] rounded-md text-xl font-semibold px-3 py-1 md:py-2 lg:py-2 bg-[#C11119] text-white"
            >
              Get Started
            </button>
          </form>
        </div>
        <hr className="mt-12 lg:mt-28 md:mt-[4.4rem] bg-[#232323] h-2 border-0" />
      </div>

      {/*  */}
    </div>
  );
};

export default FAQs;
