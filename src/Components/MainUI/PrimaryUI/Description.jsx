import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { FaStop } from "react-icons/fa";

const Description = ({ title, description, mute, setmute }) => {
  const [text, settext] = useState("Play");
  const [toggle, setToggle] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  function handlemute() {
    toggle && setmute(0);
    toggle && settext("Stop");
    !toggle && setmute(1);
    !toggle && settext("Play");
    setToggle(!toggle);
  }

  return (
    <div className="z-10 pt-6 lg:-mt-48 lg:pb-20 w-full px-12 text-white bg-[#141414]">
      <div className="">
        <h1 className="text-xl md:text-3xl lg:text-4xl">{title}</h1>

        <div className={`relative flex space-x-2 mt-2 ${!toggle && ""}`}>
          <button
            onClick={handlemute}
            className="font-semibold flex items-center px-6  py-2 text-md sm:text-lg text-[#141414] bg-white hover:bg-[#C5CAC9] rounded-md space-x-2"
          >
            {toggle && <FaPlay />}
            {!toggle && <FaStop />}
            <span> {text}</span>
          </button>

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer relative font-semibold flex items-center px-4  py-2 text-md sm:text-lg rounded-md space-x-1 text-white bg-[#4a5554] hover:opacity-50"
          >
            <CiCircleInfo className="text-2xl" />
            <span> More Info</span>
          </button>
          {isHovered && (
            <div className="absolute top-14 left-0 bg-gray-100 text-gray-800 p-2 rounded-md shadow-md">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
