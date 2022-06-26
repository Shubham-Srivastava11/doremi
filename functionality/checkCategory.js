import { TRACK_SUBSCRIPTION, HAS_SUBSCRIPTION, outputErrorList, FINAL_OUTPUT, outputList } from './config.js';
import { addSubscription } from './addSubscription.js';
import { addTopUp } from './addTopUp.js';

export const checkCategory = (FIN_AMT, command, endPersonal, endPremium) => {

    if (command[0] === 'ADD_SUBSCRIPTION') {

        const val = addSubscription(command.slice(1), endPersonal, endPremium);
        FIN_AMT += val;
        TRACK_SUBSCRIPTION.push(HAS_SUBSCRIPTION);
        return FIN_AMT;
    } else if (command[0] === 'ADD_TOPUP') {
        if (TRACK_SUBSCRIPTION.includes(HAS_SUBSCRIPTION)) {
            const topupAmt = addTopUp(command.slice(1));
            FIN_AMT += topupAmt;
            return FIN_AMT;
        } else {
            outputErrorList.push('ADD_TOPUP_FAILED SUBSCRIPTIONS_NOT_FOUND');
        }

    } else if (command[0] === 'PRINT_RENEWAL_DETAILS') {
        for (let error of outputErrorList) {
            console.log(error);
            FINAL_OUTPUT.push(error);
        }
        for (let data of outputList) {
            console.log(data);
            FINAL_OUTPUT.push(data);
        }
        if (TRACK_SUBSCRIPTION.includes(HAS_SUBSCRIPTION)) {
            console.log('RENEWAL_AMOUNT ' + String(FIN_AMT));
            FINAL_OUTPUT.push('RENEWAL_AMOUNT ' + String(FIN_AMT));
        } else {
            console.log('SUBSCRIPTIONS_NOT_FOUND');
            FINAL_OUTPUT.push('SUBSCRIPTIONS_NOT_FOUND');
        }
    }
}