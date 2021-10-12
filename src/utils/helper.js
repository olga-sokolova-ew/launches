import {HOURS, MINUTE, SECONDS} from './const';

const getTimeFormate = (endtime) => {
    if (Date.parse(endtime) !== Date.parse(new Date())) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % SECONDS);
        const minutes = Math.floor((t / 1000 / MINUTE) % MINUTE);
        const hours = Math.floor((t / (1000 * SECONDS * MINUTE)) % HOURS);
        const days = Math.floor(t / (1000 * SECONDS * MINUTE * HOURS));
        return ((days <= 9) ? `0`+ days : days) + ` : ` + ((hours <= 9) ? `0`+ hours : hours) + ` : ` + ((minutes <= 9) ? `0`+ minutes : minutes) + ` : ` + ((seconds <= 9) ? `0`+ seconds : seconds)
    } 
    
    return 0;
};

export {getTimeFormate};