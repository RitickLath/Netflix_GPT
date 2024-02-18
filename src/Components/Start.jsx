import React from "react";
import HomeHeader from "./Home/HomeHeader";
import Home_Login from "./Home/Home_Login";
import Background from "./Home/Background";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <div className="bg-gradient-to-bl from-black z-10 border-2 w-screen h-screen">
        <HomeHeader />
        <Link to="/login">
          <button className="absolute z-50 right-0 my-5 mx-8 lg:mx-44 bg-[#C11119] px-4 py-1 rounded-md text-white font-[5px]">
            Sign In
          </button>
        </Link>
        <Background />
        <Home_Login />
      </div>
    </>
  );
};

export default Start;
