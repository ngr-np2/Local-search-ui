import React from "react";
import PendingDataComp from "../../../components/admin/dashboard/PendingData";

const PendingDataSection = () => {
  return (
    <div className="px-4 py-4 mx-4 mt-6 max-w-screen-lg rounded-lg shadow-lg bg-slate-100">
      <h3 className="mx-5 my-5 text-xl tracking-widest text-gray-600 font-font-11">
        Pending
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] place-items-center justify-evenly items-center mt-3 mb-8 w-full gap-x-6 gap-y-6">
        <PendingDataComp count={1} name={"Ads"} border={"border-orange-300"} />
        <PendingDataComp
          count={3}
          name={"Businesses"}
          border={"border-blue-300"}
        />
        <PendingDataComp count={5} name={"Catg"} border={"border-purple-300"} />
        <PendingDataComp
          count={3}
          name={"Keyword"}
          border={"border-purple-300"}
        />
      </div>
    </div>
  );
};

export default PendingDataSection;
