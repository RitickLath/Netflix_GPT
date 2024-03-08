import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterMain = () => {
  return (
    <div className="bg-[#141414] w-full pt-8 pb-8 px-12 text-[#5B5B5B]">
      <div className="flex space-x-4 mb-4  lg:px-32">
        <FaFacebookF className="text-white text-2xl cursor-pointer" />
        <AiFillInstagram className="text-white text-2xl cursor-pointer" />
        <FaTwitter className="text-white text-2xl cursor-pointer" />
        <FaYoutube className="text-white text-2xl cursor-pointer" />
      </div>
      <div className="list-none grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 lg:px-32 gap-4 text-sm ">
        <li className="cursor-pointer">Audio Description</li>
        <li className="cursor-pointer">Gift Cards</li>
        <li className="cursor-pointer">Investor Relations</li>
        <li className="cursor-pointer">Terms of Use</li>
        <li className="cursor-pointer">Legal Notices</li>
        <li className="cursor-pointer">Corporate Information</li>
        <li className="cursor-pointer">Help Centre</li>
        <li className="cursor-pointer">Media Centre</li>
        <li className="cursor-pointer">Jobs</li>
        <li className="cursor-pointer">Privacy</li>
        <li className="cursor-pointer">Cookie Preferences</li>
        <li className="cursor-pointer">Contact Us</li>
      </div>
      <div className="text-xs sm:text-sm flex w-full justify-center mt-10 pb-2 text-white">
        Powered by @Ritick Lath
      </div>
    </div>
  );
};

export default FooterMain;
