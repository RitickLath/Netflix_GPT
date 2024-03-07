import React, { useState } from "react";
import Search from "./Search";
import Display from "./Display";

const GptSearch = () => {
  const [result, setResult] = useState();

  return (
    <div className="w-full bg-[#141414] text-white">
      
      <div className="w-full text-center">
        <h1 className="pt-20 px-20 md:text-3xl text-2xl lg:text-4xl font-semibold">
          Your Personalized Recommendations Await!
        </h1>
      </div>
      <Search result={result} setResult={setResult} />
      <Display result={result} />
    </div>
  );
};

export default GptSearch;
