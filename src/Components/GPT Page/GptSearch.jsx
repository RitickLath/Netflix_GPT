import React, { useState } from "react";
import Search from "./Search";
import Display from "./Display";
import { FaInfo } from "react-icons/fa";

const GptSearch = () => {
  const [result, setResult] = useState();
  const [showdiv, setShowDiv] = useState(false);

  return (
    <div className="w-full bg-[#141414] text-white overflow-hidden">
      <div className="w-full text-center">
        <h1 className="text-[#D9232E] relative flex justify-center pt-12 px-4 text-[1.3rem] sm:text-3xl md:text-3xl lg:text-4xl font-bold">
          GPT-Powered Recommendations{" "}
          <div className="relative">
            <div className="absolute">
              <div className="relative">
                <FaInfo
                  onMouseEnter={() => {
                    setShowDiv(true);
                  }}
                  onMouseLeave={() => {
                    setShowDiv(false);
                  }}
                  className="relative mx-2 mt-[0.6rem] lg:mt-[1rem] text-[1.3rem] font-semibold text-white"
                />
                {showdiv && (
                  <p className="absolute bottom-7 right-6 w-[300px] rounded-md font-normal bg-white text-left text-xs text-black p-2">
                    Share your movie vision and get personalized
                    recommendations. Just describe your ideal pick, and our
                    GPT-powered system will find the perfect match for your
                    taste.
                  </p>
                )}
              </div>
            </div>
          </div>
        </h1>
      </div>
      <Search result={result} setResult={setResult} />
      <Display result={result} />
    </div>
  );
};

export default GptSearch;
