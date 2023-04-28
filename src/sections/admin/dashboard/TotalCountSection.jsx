import React from "react";
import TotalCountComp from "../../../components/admin/TotalCountComp";

const TotalCountSection = () => {
  return (
    <div className="px-4 py-4 mx-4 max-w-screen-lg rounded-lg shadow-lg px bg-slate-100">
      <h3 className="mx-5 my-5 text-xl tracking-widest text-gray-600 font-font-11">
        Total
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] place-items-center justify-evenly items-center mt-3 mb-8 w-full gap-x-6 gap-y-6">
        <TotalCountComp count={1} name={"Ads"} persent={"-1"} />
        <TotalCountComp count={1} name={"Businesses"} persent={"10"} />
        <TotalCountComp count={1} name={"Catg"} />
        <TotalCountComp count={1} name={"keyword"} />
      </div>
    </div>
  );
};

export default TotalCountSection;
