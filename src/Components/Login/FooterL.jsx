import React from "react";
import { Link } from "react-router-dom";

const FooterL = () => {
  return (
    <div className="w-full text-[#B3B3B3]  bg-black h-[220px] opacity-[0.87] lg:px-40 md:px-4  mt-8">
      
      <div className="px-8 pt-6">
        <h1 className="lg:pt-12">Questions? Call 000-800-919-1694</h1>

        <div className="grid grid-cols-3 grid-rows-2 lg:grid-cols-4 gap-5 text-[#B3B3B3] text-xs mt-8">
          <h1>
            <Link>FAQ</Link>
          </h1>
          <h1>
            <Link>Help Center</Link>
          </h1>
          <h1>
            <Link>Terms of Use</Link>
          </h1>
          <h1>
            <Link>Privacy</Link>
          </h1>
          <h1>
            <Link>Cookie Preferences</Link>
          </h1>
          <h1>
            <Link>Corporate Information</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FooterL;
