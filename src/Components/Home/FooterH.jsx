import React from "react";
import { Link } from "react-router-dom";

const FooterH = () => {
  return (
    <div className="bg-black w-[100%]  text-sm px-12 pb-20 lg:px-40">
      <div>
        <h1 className="text-[#AFAFAF] pb-8 text-base">Questions? Call <Link className="underline">000-800-919-1694</Link></h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-[#AFAFAF] gap-3">
          <h1>
            <Link className="underline">FAQ</Link>
          </h1>
          <h1>
          <Link className="underline">Help Centre</Link>
        </h1>
        <h1>
          <Link className="underline">Account</Link>
        </h1>
        <h1>
          <Link className="underline">Media Centre</Link>
        </h1>
        <h1>
          <Link className="underline">Investor Relations</Link>
        </h1>
        <h1>
          <Link className="underline">Jobs</Link>
        </h1>
        <h1>
          <Link className="underline">Ways to Watch</Link>
        </h1>
        <h1>
          <Link className="underline">Terms of Use</Link>
        </h1>
        <h1>
          <Link className="underline">Privacy</Link>
        </h1>
        <h1>
          <Link className="underline">Cookie Preferences</Link>
        </h1>
        <h1>
          <Link className="underline">Corporate Information</Link>
        </h1>
        <h1>
          <Link className="underline">Contact Us</Link>
        </h1>
        <h1>
          <Link className="underline">Speed Test</Link>
        </h1>
        <h1>
          <Link className="underline">Legal Notices</Link>
        </h1>
        <h1>
          <Link className="underline">Only on Netflix</Link>
        </h1>
        </div>
        
      </div>
    </div>
  );
};

export default FooterH;
