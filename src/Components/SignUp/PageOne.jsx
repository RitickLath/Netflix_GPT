import React from "react";
import { Link } from "react-router-dom";
import FooterS from "./FooterS";
import { useNavigate } from "react-router-dom";
import OnAuth from "../utils/OnAuth";

const PageOne = () => {
  const navigate = useNavigate();

  return (
    <>
      {console.log("h")}
      {/* <OnAuth /> */}
      <div>
        <div className="flex justify-between">
          <img
            className="size-3/4 w-52"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
          />
          <button className="px-6 -mt-3 font-bold">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
        <hr className="-mt-1" />
      </div>

      <div className="text-center flex items-center w-full h-[82vh] text-[#333333]">
        <div className="w-[330px]  mx-auto">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
            alt="Computer mobile desktop pic"
          />
          <h3 className="mt-4">STEP 1 OF 3</h3>
          <h1 className="text-3xl font-semibold  mt-2">
            Finish Setting up your account
          </h1>
          <p className="mt-3 px-10 text-lg">
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
          <button
            onClick={() => {
              navigate("/signup/regform");
            }}
            className="mt-3 w-[300px] rounded-sm py-3 text-2xl font-semibold text-white px-3 bg-[#F6121D]"
          >
            Next
          </button>
        </div>
      </div>
      <FooterS />
    </>
  );
};

export default PageOne;
