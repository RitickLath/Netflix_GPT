import React from "react";
import { useState } from "react";


const FAQButton = ({ question, answer }) => {
  const [selected, setelected] = useState(false);
  
  return (
    <div className="text-center mb-2">
      <button
        onClick={() => setelected(!selected)}
        className="bg-[#414141] text-white px-8 w-[88%] lg:w-[75%]"
      >
        <h1 className="flex justify-between py-3 md:py-4 lg:py-5 text-2xl">
          {question} <span>{!selected ? "+" : "x"}</span>
        </h1>
      </button>
      {selected ? (
        <div className="bg-[#414141] text-white px-8 w-[88%] lg:w-[75%] flex mx-auto mt-3 py-4 ">
          <h1 className="text-left">{answer}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FAQButton;
