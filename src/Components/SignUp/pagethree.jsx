import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterS from "./FooterS";

const Pagethree = () => {
  const navigate = useNavigate();

  const browse = () => {
    navigate("/browse")
  };

  return (
    <>
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

      <div className="pb-24 px-4 text-left flex items-center w-full mt-[10vh] text-[#333333]">
        <div className="w-[450px]  mx-auto">
          <h3 className="mt-4 text-left">STEP 3 OF 3</h3>
          <h1 className="text-3xl font-semibold  mt-2">Choose how to pay</h1>
          <p className="mt-3 text-lg">
            Your payment is encrypted and you can change your <br /> payment
            method at anytime
          </p>
          <p className="font-semibold mt-1 text-lg">
            Secure your peace of mind. <br />
            Cancel easily online.
          </p>
          <div>
            <button className="text-left mt-3 w-[100%] rounded-sm py-3 text-xl px-3 border-2">
              Credit or Debit Card
            </button>
            <button className="text-left mt-3 w-[100%] rounded-sm py-3 text-xl px-3 border-2">
              UPI Autopay
            </button>
            <button
              onClick={browse}
              className="text-center mt-3 w-[100%] rounded-sm py-3 text-xl px-3 border-2 bg-[#D9242F] text-white"
            >
              Continue without Subscription
            </button>
          </div>
        </div>
      </div>
      <FooterS />
    </>
  );
};

export default Pagethree;
