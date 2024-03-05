import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { FaStop } from "react-icons/fa";

const Description = ({ title, description, mute, setmute }) => {
  const [text, settext] = useState("Play");
  const [toggle, setToggle] = useState(true);

  function handlemute() {
    toggle && setmute(0);
    toggle && settext("Stop");
    !toggle && setmute(1);
    !toggle && settext("Play");
    setToggle(!toggle);
  }

  return (
    <div className="z-10 w-full aspect-video absolute top-0 px-12 text-white bg-gradient-to-r from-black">
      <div className="pt-[35%] lg:pt-[35%] md:pt-[28%] sm:pt-[25%]">
        {toggle && <h1 className="text-xl md:text-3xl lg:text-4xl">{title}</h1>}
        {toggle && (
          <h3 className="hidden sm:flex md:flex lg:flex w-[60%] lg:w-[40%]">
            {description}
          </h3>
        )}
        <div className="flex space-x-2 mt-2 absolute bottom-8 lg:bottom-32 md:bottom-20 ">
          <button
            onClick={handlemute}
            className="font-semibold flex items-center px-6  py-2 text-md sm:text-lg text-black bg-white hover:bg-[#C5CAC9] rounded-md space-x-2"
          >
            {toggle && <FaPlay />}
            {!toggle && <FaStop />}
            <span> {text}</span>
          </button>

          <button className="font-semibold flex items-center px-4  py-2 text-md sm:text-lg rounded-md space-x-1 text-white bg-[#4a5554] hover:opacity-50">
            <CiCircleInfo className="text-2xl" />
            <span> More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
