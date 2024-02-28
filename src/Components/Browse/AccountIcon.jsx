import React from "react";
import { img } from "../../Constants/Image";
import { useNavigate } from "react-router-dom";

const AccountIcon = ({ name, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/browse/${id}`);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="p-2 text-center text-sm text-[#656565] hover:text-white"
      >
        <img
          className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] rounded-md hover:border-2"
          src={img[id].img}
        />
        <p className="pt-1 lg:text-base">{name}</p>
      </button>
    </div>
  );
};

export default AccountIcon;
