import { useState } from "react";
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
const useClockIcon = (data) => {
  const [FromIcon, setFromIcon] = useState();
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

  setFromIcon(iconMap[fromHour % 12 || 12]);
  setToIcon(iconMap[toHour % 12 || 12]);

  return { FromIcon, ToIcon };
};

export default useClockIcon;
