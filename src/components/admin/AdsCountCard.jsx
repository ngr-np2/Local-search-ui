import React from "react";
import RsSvg from "../svg/RsSvg";

const AdsCountCard = () => {
  return (
    <>
      <h3 className="mx-5 my-3 text-xl tracking-widest text-gray-600 font-font-11">
        Advertisment
      </h3>
      <div className="flex flex-wrap justify-evenly items-center mt-3 mb-8 space-y-2 w-full sm:flex-row sm:space-x-2">
        <div className="flex flex-row flex-wrap justify-center items-center p-5 w-full rounded-md border-l-4 border-blue-300 shadow-xl bg-slate-50 sm:flex-col sm:w-48">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex py-[0.1em] items-center px-3 text-xs text-blue-800 bg-blue-200 rounded-full">
                100%
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
        <div className="flex flex-row flex-wrap justify-center items-center p-5 w-full rounded-md border-l-4 border-purple-300 shadow-xl bg-slate-50 sm:flex-col sm:w-48">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
            </div>
            <div>
              {false && (
                <div className="flex py-[0.1em] items-center px-3 text-xs text-purple-800 bg-purple-200 rounded-full">
                  25%
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="font-bold text-center text-slate-700 font-font-3">
              1
            </div>
            <div className="text-sm font-bold text-slate-500">Pending</div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center p-5 w-full rounded-md border-l-4 border-red-300 shadow-xl bg-slate-50 sm:flex-col sm:w-48">
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <RsSvg />
              </div>
            </div>
            <div>
              <div className="flex py-[0.1em] items-center px-3 text-xs text-red-800 bg-red-200 rounded-full">
                50%
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
    </>
  );
};

export default AdsCountCard;
