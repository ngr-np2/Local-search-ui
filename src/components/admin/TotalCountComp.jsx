import React from "react";
import RsSvg from "../svg/RsSvg";
import DBSvg from "../svg/DBSvg";
import PendingBucketSvg from "../svg/PendingBucketSvg";
import TagSvg from "../svg/TagSvg";
import KeySvg from "../svg/KeySvg";
import BriefCaseSvg from "../svg/BriefCaseSvg";
import BuildingOfficeSvg from "../svg/BuildingOfficeSvg";

const TotalCountComp = ({ count, persent, name }) => {
  return (
    <>
      <div
        className={`flex flex-row flex-wrap justify-center items-center p-5 w-full rounded-md border-l-4 
        ${
          persent < 0
            ? "border-red-300"
            : persent == 0
            ? "border-gray-300"
            : persent > 0
            ? "border-green-300"
            : "border-purple-300"
        }
         shadow-xl bg-slate-50 sm:flex-col sm:w-48`}
      >
        <div className="flex justify-between w-full">
          <div>
            <div className="p-2 text-slate-500">
              {name === "keyword" ? (
                <KeySvg />
              ) : name === "Catg" ? (
                <TagSvg />
              ) : name === "Businesses" ? (
                <BuildingOfficeSvg />
              ) : name == "Ads" ? (
                <p>Ads</p>
              ) : (
                <DBSvg />
              )}
            </div>
          </div>
          <div>
            {persent && (
              <div
                className={`flex py-[0.1em] items-center px-3 text-xs
            ${
              persent < 0
                ? "text-red-800 bg-red-200"
                : persent == 0
                ? "text-gray-800 bg-gray-300"
                : persent > 0
                ? "text-green-800 bg-green-200"
                : "text-blue-800 bg-blue-200"
            }
               rounded-full`}
              >
                {persent} %
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="font-bold text-center font-font-3 text-slate-700">
            {count}
          </div>
          <div className="text-sm font-bold text-slate-500">{name}</div>
        </div>
      </div>
    </>
  );
};

export default TotalCountComp;
