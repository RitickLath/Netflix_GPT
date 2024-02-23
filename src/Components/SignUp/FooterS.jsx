import React from "react";
import { Link } from "react-router-dom";
const FooterS = () => {
  return (
    <div className="w-full px-12 bg-[#F3F3F3] text-[#91918b] pb-14 border-t-2">
      <h1 className="mb-6  pt-10">Questions? Call <Link>000-800-919-1694</Link></h1>
      <div className="text-sm  grid grid-cols-3 lg:grid-cols-4 gap-3">
        <Link>FAQ</Link>
        <Link>Help Centre</Link>
        <Link>Netflix Shop</Link>
        <Link>Terms of Use</Link>
        <Link>Privacy</Link>
        <Link>Cookie Preferences</Link>
        <Link>Corporate Information</Link>
      </div>
    </div>
  );
};

export default FooterS;
