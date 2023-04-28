import React from "react";
import AdsCountCard from "../../components/admin/AdsCountCard";
import PendingDataSection from "./dashboard/PendingDataSection";
import TotalCountSection from "./dashboard/TotalCountSection";
import PopularCatgCard from "../../components/home/popularCatg/PopularCatgCard";

const Status = () => {
  const user = {
    total: 40,
  };

  return (
    <div className="m-auto max-w-screen-xl space-y-10 w-[90%] ">
      <PendingDataSection />
      <TotalCountSection />
      <AdsCountCard />
      <div className="p-4 rounded-lg border-2 border-gray-200 border-dashed">
        <h5 className=" font-font-2 py-4 capitalize text-2xl text-center text-slate-800">
          Popular Category
        </h5>
        <div className="grid place-items-center sm:px-4 lg:px-8 py-4 m-auto max-w-screen-xl gap-20 grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))]">
          <PopularCatgCard />
          <div
            title="Total listed Business"
            className="flex flex-col gap-2 justify-center items-center px-1 py-3 bg-gray-50 rounded h-33"
          >
            <div className="px-3 py-1 bg-gray-200 text-slate-900 font-font-3">
              {user.total}
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center px-1 py-2 bg-gray-50 rounded h-33">
            <div className="px-3 py-1 bg-gray-200 text-slate-900 font-font-3">
              {user.total}
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-between items-center px-8 mb-4 h-28 bg-gray-50 rounded">
          <p className="text-2xl tracking-wider text-orange-500 font-font-7">
            Pending Businesses
          </p>
          <div className="px-3 py-1 bg-red-400 text-slate-50 font-font-3">
            {user.total}
          </div>
        </div>
        <div className="flex gap-1 justify-between items-center px-8 mb-4 h-28 bg-gray-50 rounded">
          <p className="text-2xl tracking-wider text-orange-500 font-font-7">
            Pending Catg
          </p>
          <div className="px-3 py-1 bg-red-400 text-slate-50 font-font-3">
            {user.total}
          </div>
        </div>
        <div className="flex gap-1 justify-between items-center px-8 mb-4 h-28 bg-gray-50 rounded">
          <p className="text-2xl tracking-wider text-orange-500 font-font-7">
            Pending keyword
          </p>
          <div className="px-3 py-1 bg-red-400 text-slate-50 font-font-3">
            {user.total}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
