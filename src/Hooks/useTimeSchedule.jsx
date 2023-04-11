import {
    parse,
    isBefore,
    addMinutes,
    differenceInMinutes,
    addDays,
} from "date-fns";
import datas from "../assets/data.json";
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

const useTimeSchedule = () => {
    console.log("---");
    const data = datas.details[0];
    const openingTime = parse(data.time.from, "hh:mm a", new Date());
    let closingTime = parse(data.time.to, "hh:mm a", new Date());
    const now = new Date();
    if (isBefore(closingTime, openingTime)) {
        closingTime = addDays(closingTime, 1);
    }
    const currentDay = now.getDay();
    let status = "closed";
    let timeRemaining = null;
    let minutesToOpen;
    let minToClose;
    if (data.days.includes(currentDay)) {
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
            const nextOpenDay = data.days.find((day) => day > currentDay);
            if (nextOpenDay !== undefined) {
                const nextOpenTime = addDays(openingTime, nextOpenDay - currentDay);
                const minutesToNextOpen = differenceInMinutes(nextOpenTime, now);
                if (minutesToNextOpen < 30) {
                    status = `opening_soon`;
                    timeRemaining = minutesToNextOpen;
                    // console.log('1',nextOpenTime)
                } else {
                    status = "closed";
                    timeRemaining = minutesToNextOpen;
                }
            } else {
                status = "closed";
                timeRemaining = differenceInMinutes(
                    addDays(openingTime, 7 - currentDay),
                    now
                );
            }
        }
    } else {
        // Check if the shop will open today
        const nextOpenDay = data.days.find((day) => day > currentDay);
        if (nextOpenDay !== undefined) {
            const nextOpenTime = addDays(openingTime, nextOpenDay - currentDay);
            const minutesToNextOpen = differenceInMinutes(nextOpenTime, now);
            if (minutesToNextOpen < 30) {
                status = `opening_soon`;
                timeRemaining = minutesToNextOpen;
                // console.log('2',nextOpenTime)

            } else {
                status = "closed_today";
                timeRemaining = minutesToNextOpen;
            }
        } else {
            status = "closed";
            timeRemaining = differenceInMinutes(
                addDays(openingTime, 7 - currentDay),
                now
            );
        }
    }
    const hoursRemaining = Math.floor(timeRemaining / 60);
    const minutesRemaining = timeRemaining % 60;
    // console.log('hour',hoursRemaining)
    // console.log('min',minutesRemaining)

    // show time icon according to opening and closingtime
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

    // console.log('-----')
    // console.log("clo", minToClose)
    // console.log("opn", minutesToOpen)
    // console.log('rem', hoursRemaining, ":", minutesRemaining)

    // console.log(status)
    // console.log(fromHour)
    // console.log(toHour)
    return { FromIcon, ToIcon, status, timeRemaining };
};

export default useTimeSchedule;
