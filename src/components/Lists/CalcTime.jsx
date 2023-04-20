import { parse, addDays, isBefore, differenceInMinutes } from "date-fns";

const calcTime = (data) => {
  const openingTime = parse(data?.time?.from, "hh:mm a", new Date());
  let closingTime = parse(data?.time?.to, "hh:mm a", new Date());
  const now = new Date();
  if (isBefore(closingTime, openingTime)) {
    closingTime = addDays(closingTime, 1);
  }
  const currentDay = now.getDay();
  let minutesToOpen;
  let minToClose;
  let nextOpenDay;
  let nextOpenTime;
  let minutesToNextOpen;
  let status = "";
  let timeRemaining = null;

  if (data?.days?.includes(currentDay)) {
    if (isBefore(now, openingTime)) {
      minutesToOpen = differenceInMinutes(openingTime, now);
      if (minutesToOpen < 30) {
        status = `opening_soon`;
        timeRemaining = minutesToOpen;
      } else {
        status = "closed";
        timeRemaining = minutesToOpen;
      }
    } else if (isBefore(now, closingTime)) {
      minToClose = differenceInMinutes(closingTime, now);
      if (minToClose < 30) {
        status = "closing_soon";
        timeRemaining = minToClose;
      } else {
        status = "open";
        timeRemaining = minToClose;
      }
    } else {
      // Check if the shop will open on the next day
      nextOpenDay = data?.days?.find((day) => day > currentDay);
      if (nextOpenDay === undefined) {
        // Check if the shop will open next week
        nextOpenDay = data?.days?.[0];
        if (nextOpenDay < currentDay) {
          nextOpenDay = nextOpenDay + 7;
        }
      }
      nextOpenTime = parse(data?.time?.from, "hh:mm a", new Date());
      nextOpenTime = addDays(nextOpenTime, nextOpenDay - currentDay);
      minutesToNextOpen = differenceInMinutes(nextOpenTime, now);
      if (minutesToNextOpen < 30) {
        status = `opening_soon`;
        timeRemaining = minutesToNextOpen;
      } else {
        status = "closed";
        timeRemaining = minutesToNextOpen;
      }
    }
  } else {
    // Check if the shop will open today
    nextOpenDay = data?.days?.find((day) => day > currentDay);
    if (nextOpenDay === undefined) {
      // Check if the shop will open next week
      nextOpenDay = data?.days?.[0];
      if (nextOpenDay < currentDay) {
        nextOpenDay = nextOpenDay + 7;
      }
    }
    nextOpenTime = parse(data?.time?.from, "hh:mm a", new Date());
    nextOpenTime = addDays(nextOpenTime, nextOpenDay - currentDay);
    minutesToNextOpen = differenceInMinutes(nextOpenTime, now);
    if (minutesToNextOpen < 30) {
      status = `opening_soon`;
      timeRemaining = minutesToNextOpen;
      //console.log(minutesToNextOpen);
    } else {
      status = "closed_today";
      timeRemaining = minutesToNextOpen;
    }
  }
  return [status, timeRemaining];
};

export default calcTime;
