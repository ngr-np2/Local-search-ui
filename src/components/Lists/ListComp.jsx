import { Link } from "react-router-dom";
import Star from "@mui/icons-material/Star";

import { useEffect, useState } from "react";
import OpeningFromAndTo from "./OpeningFromAndTo";
import SignOfOpeningAndClosing from "./SignOfOpeningAndClosing";
import Buttons from "./Buttons";
import calcTime from "./CalcTime";

const ListComp = ({ data }) => {
  console.log("----")
  console.log("listComp called");
  const [status, setStatus] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    const [status, timeRemaining] = calcTime(data);
    setStatus(status);
    setTimeRemaining(timeRemaining);
  }, []);

  // const [status, setStatus] = useState("");
  // const [timeRemaining, setTimeRemaining] = useState(null);
  // const [now, setNow] = useState(new Date());
  // const [currentDay, setCurrentDay] = useState(now.getDay());

  // const calcTime = () => {
  //   const openingTime = parse(data?.time?.from, "hh:mm a", new Date());
  //   let closingTime = parse(data?.time?.to, "hh:mm a", new Date());
  //   const now = new Date();
  //   if (isBefore(closingTime, openingTime)) {
  //     closingTime = addDays(closingTime, 1);
  //   }
  //   const currentDay = now.getDay();
  //   let minutesToOpen;
  //   let minToClose;
  //   if (data?.days?.includes(currentDay)) {
  //     if (isBefore(now, openingTime)) {
  //       minutesToOpen = differenceInMinutes(openingTime, now);
  //       if (minutesToOpen < 30) {
  //         setStatus(`opening_soon`);
  //         setTimeRemaining(minutesToOpen);
  //       } else {
  //         setStatus("closed");
  //         setTimeRemaining(minutesToOpen);
  //       }
  //     } else if (isBefore(now, closingTime)) {
  //       minToClose = differenceInMinutes(closingTime, now);
  //       if (minToClose < 30) {
  //         setStatus("closing_soon");
  //         setTimeRemaining(minToClose);
  //       } else {
  //         setStatus("open");
  //         setTimeRemaining(minToClose);
  //       }
  //     } else {
  //       // Check if the shop will open on the next day
  //       const nextOpenDay = data?.days?.find(
  //         (day) => day > currentDay || day > currentDay
  //       );
  //       if (nextOpenDay !== undefined) {
  //         const nextOpenTime = addDays(openingTime, nextOpenDay - currentDay);
  //         const minutesToNextOpen = differenceInMinutes(nextOpenTime, now);
  //         if (minutesToNextOpen < 30) {
  //           setStatus(`opening_soon`);
  //           setTimeRemaining(minutesToNextOpen);
  //           // console.log('1',nextOpenTime)
  //         } else {
  //           setStatus("closed");
  //           setTimeRemaining(minutesToNextOpen);
  //         }
  //       } else {
  //         setStatus("closed");
  //         setTimeRemaining(differenceInMinutes)(
  //           addDays(openingTime, 7 - currentDay),
  //           now
  //         );
  //       }
  //     }
  //   } else {
  //     // Check if the shop will open today
  //     const nextOpenDay = data?.days?.find((day) => day > currentDay);
  //     if (nextOpenDay !== undefined) {
  //       const nextOpenTime = addDays(openingTime, nextOpenDay - currentDay);
  //       const minutesToNextOpen = differenceInMinutes(nextOpenTime, now);
  //       if (minutesToNextOpen < 30) {
  //         setStatus(`opening_soon`);
  //         setTimeRemaining(minutesToNextOpen);
  //         // console.log('2',nextOpenTime)
  //       } else {
  //         setStatus("closed_today");
  //         setTimeRemaining(minutesToNextOpen);
  //       }
  //     } else {
  //       setStatus("closed_today");
  //       setTimeRemaining(
  //         differenceInMinutes(addDays(openingTime, 7 - currentDay), now)
  //       );
  //     }
  //   }
  //   // const hoursRemaining = Math.floor(timeRemaining / 60);
  //   // const minutesRemaining = timeRemaining % 60;
  // };
  // useEffect(() => {
  //   calcTime();
  // }, [status, now, data, currentDay]);
  // console.log(data.time);
  const dataLength = data && data.catg && data.catg.length;

  return (
    <div className="pt-8 pb-5  bg-white rounded-xl max-w-screen-lg mx-auto border-2 border-gray-100">
      <div className="flex relative gap-4 items-start px-4 pt-4 pb-0 max-sm:flex-col sm:px-6 lg:px-8">
        <Link to="#" className="block shrink-0">
          <img
            alt="Speaker"
            src="/ITAHARI.jpeg"
            className="object-cover max-sm:w-screen  object-bottom max-sm:h-[190px] w-28 h-28 rounded-md"
          />
        </Link>
        <div className="flex flex-wrap w-full">
          <div className="flex-[2]">
            <div className="flex gap-1 mb-1 items-center font-medium text-gray-700 text-start sm:text-lg">
              <Link
                to={`/profile/${data?._id}`}
                className="mr-4 hover:underline"
              >
                <h3 className="text-2xl font-bold text-gray-600 font-font-8">
                  {data?.name}
                </h3>
              </Link>
              <Star className="text-green-600 hover:text-green-500" />
              <div className="items-center text-gray-500 font-font-11">
                {data?.rating}
              </div>
            </div>
            <p className="text-lg text-gray-600 text-start font-font-4">
              {data?.address}
            </p>
            <div className="flex flex-wrap justify-end items-center">
              <div className="flex flex-1 gap-1 min-w-[220px] max-sm:flex-wrap sm:w-[300px] items-center mt-5 text-sm text-gray-700">
                Categories:
                {dataLength > 0 && (
                  <p className="mx-1 text-base text-gray-800 capitalize sm:overflow-hidden sm:whitespace-nowrap sm:text-ellipsis">
                    {data.catg[0]},
                  </p>
                )}
                {dataLength > 1 && (
                  <div
                    title={data?.catg}
                    className="mx-1 cursor-pointer px-[5px] py-[2px] text-white bg-green-600 rounded-md"
                  >
                    &#43;{data?.catg.length - 1}
                  </div>
                )}
              </div>
              {data.time && <OpeningFromAndTo data={data} status={status} />}
            </div>
          </div>
        </div>
        {status && <SignOfOpeningAndClosing status={status} />}
      </div>

      <Buttons />
    </div>
  );
};

export default ListComp;
