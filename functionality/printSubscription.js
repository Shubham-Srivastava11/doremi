import { outputList } from "./config.js";

export const printSubscription = (category, str, endPersonal, endPremium) => {
    if (str === 'PERSONAL') {
        outputList.push('RENEWAL_REMINDER ' + category + ' ' + endPersonal);
    } else {
        outputList.push('RENEWAL_REMINDER ' + category + ' ' + endPremium);
    }

}