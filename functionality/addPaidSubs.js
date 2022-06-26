import { CATEGORY, TRACK_SUBSCRIPTION } from "./config.js";
import { printSubscription } from "./printSubscription.js";
import { subscriptionError } from "./subscriptionError.js";

export const addPaidSubs = (data, endPersonal, endPremium) => {
    var RENEWAL_AMOUNT = 0;
    if (!TRACK_SUBSCRIPTION.includes(data[0])) {
        RENEWAL_AMOUNT += CATEGORY[data[0]][data[1]];
        TRACK_SUBSCRIPTION.push(data[0]);
        printSubscription(data[0], data[1], endPersonal, endPremium);
        return RENEWAL_AMOUNT;
    } else {
        subscriptionError();
        return 0;
    }
}