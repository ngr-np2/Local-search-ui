import React from "react";

const SignOfOpeningAndClosing = ({ status }) => {
  const timeClass =
    "px-[0.4rem] pb-[0.1rem] pt-1 text-white rounded-md tracking-widest text-xs font-font-11";
  return (
    <div className="absolute right-9 text-gray-900 top-15 max-sm:top-10">
      <div className="relative z-10 h-8">
        {status === "open" && (
          <p className={`bg-green-500 ${timeClass}`}>Open Now</p>
        )}
        {status === "closed" && (
          <p
            style={{ paddingLeft: "11px", paddingRight: "11px" }}
            className={`bg-red-500 ${timeClass}`}
          >
            Closed
          </p>
        )}
        {status === "opening_soon" && (
          <p className={`bg-green-700 text-[9px] ${timeClass}`}>Openign Soon</p>
        )}
        {status === "closing_soon" && (
          <p className={`bg-red-700 text-[9px] ${timeClass}`}>Closeing Soon</p>
        )}
        {status === "closed_today" && (
          <p className={`bg-red-500 text-[9px] ${timeClass}`}>Closed today</p>
        )}

        <div
          style={{ transform: "rotate(-45deg)" }}
          className="-z-10 absolute bottom-0 -top-7 left-[63%] w-[3px] h-9 bg-yellow-300 transform -translate-x-1/2"
        ></div>
        <div
          style={{ transform: "rotate(45deg)" }}
          className="-z-10 absolute bottom-0 -top-7 left-[33%] w-[3px] h-9 bg-yellow-300 transform -translate-x-1/2"
        ></div>
        <span className="absolute top-0 left-[73%] w-1 h-1 bg-purple-600 rounded-full transform translate-x-1 translate-y-[0.10rem]"></span>
        <span className="absolute top-0 left-[23.6%] w-1 h-1 bg-purple-600 rounded-full transform -translate-x-[0.29rem] translate-y-[0.10rem]"></span>
        <span className="absolute -top-[1.1rem] left-1/2 w-3 h-3 bg-black rounded-full transform -translate-x-2/4 -translate-y-full"></span>
      </div>
    </div>
  );
};

export default SignOfOpeningAndClosing;
