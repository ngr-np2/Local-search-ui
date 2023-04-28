import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HandburgetSvg from "../components/svg/HandburgetSvg";
import DimondSvg from "../components/svg/DimondSvg";
import UserSvg from "../components/svg/UserSvg";
import TagSvg from "../components/svg/TagSvg";
import KeySvg from "../components/svg/KeySvg";
import BuildingOfficeSvg from "../components/svg/BuildingOfficeSvg";

const AdminLayout = () => {
  const [hide, setHide] = useState(true);
  return (
    <>
      <div className="flex justify-between items-center my-2 w-full md:hidden">
        <button
          onClick={(e) => setHide(!hide)}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <HandburgetSvg />
        </button>
        <div className="mx-4">
          <img
            src="/ITAHARI.jpeg"
            className="w-8 h-8 rounded-full"
            alt="user"
          />
        </div>
      </div>

      <aside
        className={`${
          hide ? "-translate-x-full" : "translate-x-0"
        } fixed top-13  left-0 z-40 w-64 h-screen  transition-transform md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="overflow-y-auto px-3 py-4 h-full bg-gray-50">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <div className="ml-3">Dashboard</div>
              </Link>
            </li>
            <li className="text-gray-500">
              <Link
                to="/dashboard/businesses"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <div className="text-gray-500">
                  <BuildingOfficeSvg color={"text-gray-500"} />
                </div>
                <div className="flex-1 ml-3 whitespace-nowrap">Businesses</div>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/ads"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <DimondSvg />
                <div className="flex-1 ml-3 whitespace-nowrap">ADs</div>
                <div className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  3
                </div>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <UserSvg />
                <div className="flex-1 ml-3 whitespace-nowrap">Users</div>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <TagSvg />
                <div className="flex-1 ml-3 whitespace-nowrap">Catg</div>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <KeySvg />
                <div className="flex-1 ml-3 whitespace-nowrap">Keyword</div>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="flex-1 ml-3 whitespace-nowrap">Sign In</div>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="flex-1 ml-3 whitespace-nowrap">Sign Up</div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div onClick={(e) => !hide && setHide(!hide)}>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
