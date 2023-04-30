import React from "react";
import RsSvg from "../svg/RsSvg";
import DBSvg from "../svg/DBSvg";

const AdsCountCard = () => {
  const persent = "10";
  return (
    <div className="px-4 py-4 mx-4 max-w-screen-lg rounded-lg shadow-lg px bg-slate-100">
      <h3 className="mx-5 my-5 text-xl tracking-widest text-gray-600 font-font-11">
        Total
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] place-items-center justify-evenly items-center mt-3 mb-8 w-full gap-x-6 gap-y-6">
        <div className="flex flex-row flex-wrap justify-center items-center p-5 w-full rounded-md border-l-4 border-blue-300 shadow-xl bg-slate-50 sm:flex-col sm:w-48">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2 text-gray-500">
                <DBSvg />
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-center font-font-3 text-slate-700">
              12
            </div>
            <div className="text-sm font-bold text-slate-500">Total</div>
          </div>
        </div>
        <div
          className={`
         ${
           persent < 0
             ? "border-red-300"
             : persent == 0
             ? "border-gray-300"
             : persent > 0
             ? "border-green-300"
             : "border-purple-300"
         } flex flex-row flex-wrap justify-center items-center p-5 w-full rounded-md border-l-4 shadow-xl bg-slate-50 sm:flex-col sm:w-48`}
        >
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <RsSvg />
              </div>
            </div>
            <div>
              <div
                className={`
               ${
                 persent < 0
                   ? "text-red-800 bg-red-200"
                   : persent == 0
                   ? "text-gray-800 bg-gray-300"
                   : persent > 0
                   ? "text-green-800 bg-green-200"
                   : "text-purple-800 bg-purple-200"
               } flex py-[0.1em] items-center px-3 text-xs rounded-full`}
              >
                {persent} %
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-center text-slate-700 font-font-3">
              29000 Rs
            </div>
            <div className="text-sm font-bold text-center text-slate-500">
              Revenu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCountCard;
