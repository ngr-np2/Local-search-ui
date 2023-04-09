import { parse, isBefore, addMinutes, differenceInMinutes } from 'date-fns';

const useTimeSchedule = () => {
    const openingTime = parse(data.time.from, 'hh:mm a', new Date());
    const closingTime = parse(data.time.to, 'hh:mm a', new Date());
    const now = new Date();

    const currentDay = now.getDay();
    let status = 'closed';
    let timeRemaining = null;
    let minutesToOpen;
    let minToClose;
    if (data.days.includes(currentDay)) {
        if (isBefore(now, openingTime)) {
            minutesToOpen = differenceInMinutes(openingTime, now);
            console.log(minutesToOpen)
            if (minutesToOpen <= 15) {
                status = `opening_soon`;
                timeRemaining = minutesToOpen
            } else {
                status = 'closed';
                timeRemaining = minutesToOpen;
            }
        } else if (isBefore(now, closingTime)) {
            minToClose = differenceInMinutes(closingTime, now)
            if (minToClose <= 15) {
                status = 'closing_soon';
                timeRemaining = minToClose
            } else {
                status = 'open';
                timeRemaining = minToClose
            }
        } else {
            status = 'closed';
            timeRemaining = differenceInMinutes(addMinutes(openingTime, 1440), now); // add 24 hours to openingTime
        }
    }
    const hoursRemaining = Math.floor(timeRemaining / 60);
    const minutesRemaining = timeRemaining % 60;
    return
}

export default useTimeSchedule