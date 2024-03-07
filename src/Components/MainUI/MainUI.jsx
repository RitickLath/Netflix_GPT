import React, { useState } from "react";
import PrimaryUI from "./PrimaryUI/PrimaryUI";
import SecondaryUI from "./SecondaryUI/SecondaryUI";
import HeaderInside from "./PrimaryUI/HeaderInside";
import GptSearch from "../GPT Page/GptSearch";
import FooterMain from "./FooterMain";

const MainUI = () => {
  return (
    <>
      <HeaderInside />
      <PrimaryUI />
      <GptSearch />
      <SecondaryUI />
      <FooterMain />
    </>
  );
};

export default MainUI;
