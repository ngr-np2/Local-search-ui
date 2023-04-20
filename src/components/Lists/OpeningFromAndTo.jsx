import {
  WiTime1,
  WiTime2,
  WiTime3,
  WiTime4,
  WiTime5,
  WiTime6,
  WiTime7,
  WiTime8,
  WiTime9,
  WiTime10,
  WiTime11,
  WiTime12,
} from "react-icons/wi";

const timeIcon = (data) => {
  const fromHour = parseInt(data.time.from.split(":")[0]);
  const toHour = parseInt(data.time.to.split(":")[0]);

  const iconMap = {
    1: WiTime1,
    2: WiTime2,
    3: WiTime3,
    4: WiTime4,
    5: WiTime5,
    6: WiTime6,
    7: WiTime7,
    8: WiTime8,
    9: WiTime9,
    10: WiTime10,
    11: WiTime11,
    12: WiTime12,
  };
  const FromIcon = iconMap[fromHour % 12 || 12];
  const ToIcon = iconMap[toHour % 12 || 12];
  return { FromIcon, ToIcon };
};

const OpeningFromAndTo = ({ data, status }) => {
  const { FromIcon, ToIcon } = timeIcon(data);
  console.log("openingtimes called");

  const fromTimeClass =
    status === "open" || status === "closing_soon"
      ? "text-green-500"
      : "text-neutral-800";
  const toTimeClass =
    status === "closed" || status === "closed_today"
      ? "text-red-500"
      : status === "opening_soon"
      ? "text-red-700"
      : "text-neutral-800";

  return (
    <div className="flex right-0 flex-1 justify-end items-end text-center text-gray-800">
      <div className="pt-4 w-full cursor-pointer">
        <div className="flex flex-wrap justify-end items-end">
          <div
            title="opening time"
            className="flex gap-1 items-center mx-3 w-40 text-start"
          >
            <FromIcon className={fromTimeClass} />
            From:
            <b className={fromTimeClass}>&nbsp;{data?.time?.from}</b>
          </div>
          <div
            title="closing time"
            className="flex gap-1 items-center mx-3 w-40 text-start"
          >
            <ToIcon className={toTimeClass} />
            To:
            <b className={toTimeClass}>&nbsp;{data?.time?.to}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningFromAndTo;
