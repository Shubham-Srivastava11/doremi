import { outputList } from "./config.js";
import { addPaidSubs } from "./addPaidSubs.js";

export const addSubscription = (data, endPersonal, endPremium) => {
    if (data[1] !== 'FREE') {
        return addPaidSubs(data, endPersonal, endPremium);
    } else {
        outputList.push('RENEWAL_REMINDER ' + data[0] + ' ' + endPersonal);
        return 0;
    }


}