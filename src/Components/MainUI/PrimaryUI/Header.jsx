import React from "react";

const Header = () => {
  return (
    <div className="z-50 absolute top-0 w-full flex justify-between px-8 py-2">
      <img
        className="w-[100px]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      <button>
        <img
          className="w-[35px] h-[35px] rounded-md"
          src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt=""
        />
      </button>
    </div>
  );
};

export default Header;
