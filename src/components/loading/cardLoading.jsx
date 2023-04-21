import React from "react";

const CardLoading = () => {
  return (
    <div className="pt-8 pb-5 mx-auto max-w-screen-lg bg-white rounded-xl border-2 border-slate-100">
      <div className="flex relative gap-4 items-start px-4 pt-4 pb-0 max-sm:flex-col sm:px-6 lg:px-8">
        <div className="h-28  rounded-md animate-loadingping bg-slate-200 object-cover w-36 object-bottom max-sm:h-[190px] max-sm:w-full" />
        <div className="flex flex-wrap w-full">
          <div className="flex-[2]">
            <div className="flex gap-1 items-center mb-1 font-medium text-start text-slate-700 sm:text-lg">
              <div className="items-center w-2/4 h-7 rounded font-font-11 animate-loadingping bg-slate-200 text-slate-500" />
            </div>
            <p className="w-2/3 h-7 text-lg rounded font-font-4 animate-loadingping bg-slate-200 text-start text-slate-600" />
            <div className="flex flex-wrap justify-end items-center">
              <div className="mt-5 flex min-w-[220px] flex-1 items-center gap-1 text-sm text-slate-700 max-sm:flex-wrap sm:w-[300px]">
                <p className="mx-1 w-2/3 h-7 text-base capitalize rounded animate-loadingping bg-slate-200 text-slate-800 sm:overflow-hidden sm:text-ellipsis sm:whitespace-nowrap"></p>
              </div>
              <div className="flex right-0 flex-1 justify-end items-end text-center text-slate-800">
                <div className="pt-4 w-full cursor-pointer">
                  <div className="flex flex-wrap justify-end items-end">
                    <div className="flex gap-1 items-center mx-3 w-40 text-start">
                      <div className="my-1 w-2/3 h-7 rounded animate-loadingping bg-slate-200" />
                    </div>
                    <div className="flex gap-1 items-center mx-3 w-40 text-start">
                      <div className="my-1 w-2/3 h-7 rounded animate-loadingping bg-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-start px-6 pt-3 pb-5 shadow-sm cursor-pointer">
        <div>
          <div className="{bottonStyle}">
            <div className="inline-flex h-9 w-20 items-center gap-1 rounded-br-xl rounded-tl-xl animate-loadingping bg-slate-200 px-3 py-1.5 text-white shadow-lg duration-100 hover:gap-2 hover:shadow-xl" />
          </div>
        </div>
        <div>
          <div className="{bottonStyle}">
            <div className="inline-flex h-9 w-20 items-center gap-1 rounded-br-xl rounded-tl-xl animate-loadingping bg-slate-200 px-3 py-1.5 text-white shadow-lg duration-100 hover:gap-2 hover:shadow-xl" />
          </div>
        </div>
        <div>
          <div className="{bottonStyle}">
            <div className="inline-flex h-9 w-20 items-center gap-1 rounded-br-xl rounded-tl-xl animate-loadingping bg-slate-200 px-3 py-1.5 text-white shadow-lg duration-100 hover:gap-2 hover:shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
