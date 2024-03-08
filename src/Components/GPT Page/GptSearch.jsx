import React, { useState } from "react";
import Search from "./Search";
import Display from "./Display";

const GptSearch = () => {
  const [result, setResult] = useState();

  return (
    <div className="w-full bg-[#141414] text-white">
      <div className="w-full text-center">
        <h1 className="text-[#D9232E] pt-12 px-4 text-3xl md:text-3xl lg:text-4xl font-bold">
          GPT-Powered Recommendations
        </h1>
      </div>
      <Search result={result} setResult={setResult} />
      <Display result={result} />
    </div>
  );
};

export default GptSearch;
