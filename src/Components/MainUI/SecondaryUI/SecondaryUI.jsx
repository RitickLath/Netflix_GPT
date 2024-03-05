import React from "react";
import Category1 from "./Category1";
import Category3 from "./Category2";
import Category2 from "./Category2";

const SecondaryUI = () => {
  return (
    <div className="bg-black text-white ">
      <div className="relative -mt-2 lg:-mt-20 z-50">
        <Category1 />
      </div>
      <Category2 page={1} topic={"Top Picks"} />
      <Category3 page={2} topic={"Most Played"} />
      <Category2 page={3} topic={"Classic Hits"} />
      <Category3 page={4} topic={"Action & Adventure"} />
      <Category2 page={5} topic={"Drama Picks"} />
      <Category3 page={6} topic={"Thriller Night"} />
      <Category2 page={7} topic={"Family Fun"} />
      <Category3 page={8} topic={"Most Played"} />
      <Category2 page={9} topic={"Top Picks"} />
      <Category3 page={10} topic={"Top Picks"} />
    </div>
  );
};

export default SecondaryUI;
