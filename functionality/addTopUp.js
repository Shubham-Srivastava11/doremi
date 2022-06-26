import { outputErrorList, TOPUP, TRACK_SUBSCRIPTION } from "./config.js";

export const addTopUp = (data) => {
    var RENEWAL_AMOUNT = 0;
    if (!(TRACK_SUBSCRIPTION.includes('ADD_TOPUP'))) {
        RENEWAL_AMOUNT += Number(data[1]) * TOPUP[data[0]];
        TRACK_SUBSCRIPTION.push('ADD_TOPUP');
    } else {
        outputErrorList.push('ADD_TOPUP_FAILED DUPLICATE_TOPUP')
    }

    return RENEWAL_AMOUNT;
}