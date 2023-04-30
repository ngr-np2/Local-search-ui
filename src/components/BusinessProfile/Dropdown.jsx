import React, { useState } from "react";
import datas from "../../assets/data.json";
import { daysName } from "../../assets/date";

const Dropdown = ({ data }) => {
  const [show, setShow] = useState(false);
  const currentDay = new Date().getDay();

  const openDays = data.days.map((day) => daysName[day]);
  // //console.log(daysName[currentDay]);
  // //console.log(currentDay);

  const allDays = [0, 1, 2, 3, 4, 5, 6];
  const closedDays = allDays.filter((day) => !data.days.includes(day));

  const closedDaysList = closedDays.map((day, idx) => {
    return (
      <li
        key={idx}
        onClick={() => setShow(!show)}
        className="flex px-4 py-2 w-full text-sm font-normal whitespace-nowrap bg-transparent cursor-pointer"
      >
        <div className="w-20">{daysName[day]}</div>:
        <div className="px-2 text-red-500">Closed</div>
      </li>
    );
  });
  // //console.log("is", closedDays.includes(currentDay));
  return (
    <div className="relative pt-3 bg-slate-100 text-gray-700 ease-in-out duration-200  transition-all">
      <button
        onClick={() => setShow(!show)}
        className="flex max-sm:min-w-fit bg-slate-100 max-sm:px-3 max-sm:py-2 items-center whitespace-nowrap  w-full max-w-screen-sm rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-50 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]motion-reduce:transition-none text-gray-900"
        type="button"
      >
        <div className="w-20">{daysName[currentDay]}</div>:
        {!closedDays.includes(currentDay) ? (
          <>
            <div className="px-2">{data.time.from}</div> -
            <div className="px-2">{data.time.to}</div>
          </>
        ) : (
          <div className="px-2 text-red-500">Closed</div>
        )}
        <div className="flex justify-end items-end w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5 transform duration-200 ${
              show && "-scale-y-125"
            } `}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      {show && (
        <ul className="absolute ease-in-out duration-200  transition-all z-[9000] m-0 pl-[0.4rem] min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg top-3">
          {openDays.map((day, idx) => {
            const isToday = day === daysName[currentDay];
            return (
              <li
                key={idx}
                onClick={() => setShow(!show)}
                className={`${
                  isToday && "bg-green-500"
                } flex px-4 py-2 w-full text-sm font-normal whitespace-nowrap bg-transparent cursor-pointer text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 `}
              >
                <div className="w-20">{day}</div>:
                <div className="px-2">{data.time.from}</div>-
                <div className="px-2">{data.time.to}</div>
              </li>
            );
          })}
          {closedDaysList}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
