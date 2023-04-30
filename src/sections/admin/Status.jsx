import React from "react";
import AdsCountCard from "../../components/admin/AdsCountCard";
import PendingDataSection from "./dashboard/PendingDataSection";
import TotalCountSection from "./dashboard/TotalCountSection";
import PopularKeywordsSection from "../home/PopularKeywordsSection";
import PopularCatgComp from "../../components/home/popularCatg/PopularCatgComp";

const Status = () => {
  const user = {
    total: 40,
  };

  return (
    <div className="m-auto max-w-screen-xl space-y-10 w-[90%] ">
      <PendingDataSection />
      <AdsCountCard />
      <TotalCountSection />
      <div className="p-4 rounded-lg border-2 border-gray-200 border-dashed">
        <h5 className=" font-font-2 py-4 capitalize text-2xl text-center text-slate-800">
          Popular Category
        </h5>
        <div className="grid place-items-center sm:px-4 lg:px-8 py-4 m-auto max-w-screen-xl gap-20 grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))]">
          <PopularCatgComp />
        </div>
        <PopularKeywordsSection />
      </div>
    </div>
  );
};

export default Status;
