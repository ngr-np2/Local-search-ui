import useGetListedFree from "../../../Hooks/useGetListedFree";
import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DropDownArrowSvg from "../../buttons/DropDownArrowSvg";
const days = [
  { num: 0, day: "Sunday" },
  { num: 1, day: "Monday" },
  { num: 2, day: "Tuesday" },
  { num: 3, day: "Wednesday" },
  { num: 4, day: "Thursday" },
  { num: 5, day: "Friday" },
  { num: 6, day: "Sataurday" },
];
const BusinessOpeningHours = () => {
  const {
    handleOpeningDaysChange,
    openAllDayAndWeek,
    setOpenAllDayAndWeek,
    times,
    setOpenFrom,
    setOpenTill,
    setOpeningDays,
    handleOpenTimeChange,
    handleCloseTimeChange,
  } = useGetListedFree();

  return (
    <>
      <div className="flex gap-10 justify-center m-auto mt-10 w-full max-lg:flex-wrap">
        <div
          title="Opening Hours"
          className="relative w-full duration-200 ease-in group"
        >
          <label
            htmlFor="openingHours"
            className="block mb-2 text-sm font-medium text-left text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
          >
            Opening Hours
          </label>
          <div
            title="open 24 hours a day, seven day a week. CheckBox"
            className="flex gap-2 items-center m-auto ml-28 duration-200 ease-in cursor-pointer max-lg:flex-wrap"
          >
            {!openAllDayAndWeek ? (
              <CheckBoxOutlineBlankIcon
                onClick={() => (
                  setOpenAllDayAndWeek(!openAllDayAndWeek),
                  setOpenTill(""),
                  setOpenFrom(""),
                  setOpeningDays("")
                )}
              />
            ) : (
              <CheckBoxOutlined
                onClick={() => setOpenAllDayAndWeek(!openAllDayAndWeek)}
                className={openAllDayAndWeek && "text-blue-600"}
              />
            )}
            <p
              className="p-0 m-0 text-base font-font-8"
              onClick={() => setOpenAllDayAndWeek(!openAllDayAndWeek)}
            >
              24/7
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
        <div
          title="Opening time"
          className={`relative w-full duration-200 ease-in group flex flex-col-reverse
                    ${openAllDayAndWeek && "cursor-not-allowed opacity-50"}`}
        >
          <select
            disabled={openAllDayAndWeek}
            name="openingHours"
            defaultValue={"OPENFROM"}
            onChange={!openAllDayAndWeek ? handleOpenTimeChange : undefined}
            className={`ease-in duration-200 peer bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 
                        ${
                          openAllDayAndWeek
                            ? "text-gray-600  cursor-not-allowed -z-1"
                            : "cursor-pointer"
                        }
                        `}
          >
            <option value="OPENFROM">Opening Time</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <DropDownArrowSvg />

          <label
            htmlFor="openingHours"
            className={`block mb-2 text-sm font-medium text-left text-gray-200 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  
                        ${
                          openAllDayAndWeek
                            ? "text-gray-500 cursor-not-allowed -z-1"
                            : "text-white"
                        }
                        `}
          >
            From
          </label>
        </div>
        <div
          title="closing time"
          className={` relative w-full duration-200 ease-in group flex flex-col-reverse
                ${openAllDayAndWeek && "cursor-not-allowed opacity-50 "}
                `}
        >
          <DropDownArrowSvg />
          <select
            name="openTill"
            disabled={openAllDayAndWeek}
            defaultValue={"OPENTILL"}
            onChange={!openAllDayAndWeek ? handleCloseTimeChange : undefined}
            className={`ease-in duration-200 bg-[#1a1f2d] w-full outline-none peer pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  
                        ${
                          openAllDayAndWeek
                            ? "text-gray-600 cursor-not-allowed -z-1"
                            : "cursor-pointer"
                        }
                        `}
          >
            <option value="OPENTILL">Closing Time</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <label
            htmlFor="openTill"
            className={`block mb-2 text-sm font-medium text-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500  ${
              openAllDayAndWeek
                ? "text-gray-500 cursor-not-allowed -z-1"
                : "text-white"
            }`}
          >
            To
          </label>
        </div>
      </div>

      <div
        className={`flex gap-10 mt-5 justify-center m-auto w-full max-lg:flex-wrap ${
          openAllDayAndWeek && "cursor-not-allowed opacity-50"
        }`}
      >
        <div
          title="business opening weeks"
          className="relative w-full duration-200 ease-in group"
        >
          <label
            htmlFor="dayOpened"
            className="block mb-2 text-sm font-medium text-left text-gay-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
          >
            OPENING WEEKS
          </label>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(6rem,_1fr))]  gap-8 w-full">
        {days.map((day) => {
          return (
            <div
              disabled={openAllDayAndWeek}
              key={day.num}
              className="flex gap-3 w-28 text-base font-font-1"
            >
              <input
                className={
                  openAllDayAndWeek
                    ? "text-red-900 cursor-not-allowed -z-1"
                    : "cursor-pointer"
                }
                disabled={openAllDayAndWeek}
                type="checkbox"
                value={day.num}
                onChange={
                  !openAllDayAndWeek ? handleOpeningDaysChange : undefined
                }
                id={day.day}
              />
              <label
                className={
                  openAllDayAndWeek
                    ? "text-gray-600 cursor-not-allowed -z-1"
                    : "cursor-pointer"
                }
                htmlFor={day.day}
              >
                {day.day}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BusinessOpeningHours;

// {
/* <div
          title="from which day day Business will be closed"
          className={`relative w-full flex flex-col-reverse duration-200 ease-in group ${
            openAllDayAndWeek && "cursor-not-allowed opacity-50"
          }`}
        >
          <DropDownArrowSvg />
          <select
            disabled={openAllDayAndWeek}
            name="openingHours"
            id="dayofffrom"
            defaultValue={"DAYOFFFROM"}
            onChange={!openAllDayAndWeek ? handleFromDayOffChange : undefined}
            className={`ease-in duration-200 peer bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${
              openAllDayAndWeek
                ? "text-gray-600 cursor-not-allowed -z-1"
                : "cursor-pointer"
            }`}
          >
            <option value="DAYOFFFROM" disabled>
              Select a day
            </option>
            <option value="sun">Sunday</option>
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
          </select>
          <label
            htmlFor="dayofffrom"
            className={`block mb-2 text-sm font-medium text-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ${
              openAllDayAndWeek
                ? "text-gray-500 cursor-not-allowed -z-1"
                : "text-white"
            }`}
          >
            From
          </label>
        </div> */
// }

// {
/* <div
          title="till which day the business will be close"
          className={`relative w-full duration-200 flex flex-col-reverse ease-in group 
        ${openAllDayAndWeek && "cursor-not-allowed opacity-50 "}
        `}
        >
          <DropDownArrowSvg />
          <select
            name="dayofftill"
            id="dayofftill"
            disabled={openAllDayAndWeek}
            onChange={!openAllDayAndWeek ? handleToDayOffChange : undefined}
            defaultValue={"DAYOFFTILL"}
            className={`ease-in duration-200 peer bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  
                ${
                  openAllDayAndWeek
                    ? "text-gray-600 cursor-not-allowed -z-1"
                    : "cursor-pointer"
                }
                `}
          >
            <option value="DAYOFFTILL" disabled>
              Select a day
            </option>
            <option value="sun">Sunday</option>
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">Friday</option>
            <option value="satu">Saturday</option>
          </select>
          <label
            htmlFor="dayofftill"
            className={`block mb-2 text-sm font-medium text-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500  ${
              openAllDayAndWeek
                ? "text-gray-500 cursor-not-allowed -z-1"
                : "text-white"
            }`}
          >
            To
          </label>
        </div> */
// }
