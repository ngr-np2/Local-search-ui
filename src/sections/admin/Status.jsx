import React from "react";
import { Link } from "react-router-dom";
import BusinessesCountCard from "../../components/admin/BusinessesCountCard";
import AdsCountCard from "../../components/admin/AdsCountCard";

const Status = () => {
  const user = {
    total: 40,
  };
  const ads = {
    total: 12,
    pending: 1,
    revenu: 2990,
  };
  return (
    <div className="p-4 sm:ml-64">
      <AdsCountCard />
      <BusinessesCountCard />
      <div className="p-4 rounded-lg border-2 border-gray-200 border-dashed">
        <div className="grid grid-cols-3 gap-4 mb-4 max-sm:grid-cols-1">
          <div className="flex flex-col gap-2 justify-center items-center px-1 py-3 bg-gray-50 rounded h-33">
            <p className="tracking-wider text-center text-green-500 font-font-7">
              Users
            </p>
            <div className="px-3 py-1 bg-gray-200 text-slate-900 font-font-3">
              {user.total}
            </div>
          </div>
          <div
            title="Total listed Business"
            className="flex flex-col gap-2 justify-center items-center px-1 py-3 bg-gray-50 rounded h-33"
          >
            <p className="px-2 tracking-wider text-center text-green-500 font-font-7">
              Businesses
            </p>
            <div className="px-3 py-1 bg-gray-200 text-slate-900 font-font-3">
              {user.total}
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center px-1 py-2 bg-gray-50 rounded h-33">
            <p className="px-2 tracking-wider text-center text-green-500 font-font-7">
              ADs
            </p>
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
