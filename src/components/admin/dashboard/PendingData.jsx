import React from "react";
import KeySvg from "../../svg/KeySvg";
import TagSvg from "../../svg/TagSvg";
import BuildingOfficeSvg from "../../svg/BuildingOfficeSvg";
import DBSvg from "../../svg/DBSvg";

const PendingDataComp = ({ border, count, name }) => {
  return (
    <div
      className={`flex flex-row flex-wrap justify-center items-center p-5 w-full rounded-md border-l-4 shadow-xl ${border} bg-slate-50 sm:flex-col sm:w-48`}
    >
      <div className="flex justify-between w-full">
        <div>
          <div className="p-2 text-slate-500">
            {name === "Keyword" ? (
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
      </div>
      <div>
        <div className="font-bold text-center text-slate-700 font-font-3">
          {count}
        </div>
        <div className="text-sm font-bold text-slate-500">{name}</div>
      </div>
    </div>
  );
};

export default PendingDataComp;
