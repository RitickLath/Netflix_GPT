import React, { useContext } from "react";
import HomeHeader from "./Home/HomeHeader";
import MemberShip from "./Home/MemberShip";
import Background from "./Home/Background";
import { Link, useNavigate } from "react-router-dom";
import FAQs from "./Home/FAQs";
import FooterH from "./Home/FooterH";
import UserContext from "../Context/UserContext";
import OnAuth from "./utils/OnAuth";

const Start = () => {
  return (
    <>
      <OnAuth />
      <div className="bg-gradient-to-bl from-black w-screen h-screen overflow-x-hidden">
        <div className="w-full relative h-[100%] bg-transparent">
          <HomeHeader />
          <Link to="/login">
            <button className="absolute z-5 right-0 my-5 mx-8 lg:mx-44 bg-[#C11119] px-4 py-1 rounded-md text-white font-[5px]">
              Sign In
            </button>
          </Link>
          <Background />
          <MemberShip />
        </div>
        <FAQs />
        <FooterH />
      </div>
    </>
  );
};

export default Start;
