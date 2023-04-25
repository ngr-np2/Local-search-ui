import { useState, useEffect } from "react";

const getTimeSince = (date) => {
  const diffInMs = Date.now() - Date.parse(date);
  const timeUnits = [
    { unit: "year", time: 31536000000 },
    { unit: "month", time: 2592000000 },
    { unit: "week", time: 604800000 },
    { unit: "day", time: 86400000 },
    { unit: "hour", time: 3600000 },
    { unit: "minute", time: 60000 },
    { unit: "second", time: 1000 },
  ];

  for (let i = 0; i < timeUnits.length; i++) {
    const unitTime = timeUnits[i].time;
    if (diffInMs >= unitTime) {
      const diff = Math.floor(diffInMs / unitTime);
      const unit = timeUnits[i].unit;
      return `${diff} ${unit}${diff > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};

const TimeAgo = ({ date }) => {
  const [time, setTime] = useState(getTimeSince(date));

  useEffect(() => {
    console.log("called");
    setTime(getTimeSince(date));
  }, [date]);

  return (
    <time className="block text-sm text-gray-500 dark:text-gray-400">
      {time}
    </time>
  );
};

export default TimeAgo;
