const config = require('./config.js');
const addSubscription = require('./addSubscription.js');
const addTopUp = require('./addTopUp.js');

const checkCategory = (FIN_AMT, command, endPersonal, endPremium) => {
    if (command[0] === 'ADD_SUBSCRIPTION') {
        const val = addSubscription(command.slice(1), endPersonal, endPremium);
        FIN_AMT += val;
        config.TRACK_SUBSCRIPTION.push(config.HAS_SUBSCRIPTION);
        return FIN_AMT;
    } else if (command[0] === 'ADD_TOPUP') {
        if (config.TRACK_SUBSCRIPTION.includes(config.HAS_SUBSCRIPTION)) {
            const topupAmt = addTopUp(command.slice(1));
            FIN_AMT += topupAmt;
            return FIN_AMT;
        } else {
            config.outputErrorList.push('ADD_TOPUP_FAILED SUBSCRIPTIONS_NOT_FOUND');
        }
    } else if (command[0] === 'PRINT_RENEWAL_DETAILS') {
        for (let error of config.outputErrorList) {
            console.log(error);
            config.FINAL_OUTPUT.push(error);
        }
        for (let data of config.outputList) {
            console.log(data);
            config.FINAL_OUTPUT.push(data);
        }
        if (config.TRACK_SUBSCRIPTION.includes(config.HAS_SUBSCRIPTION)) {
            console.log('RENEWAL_AMOUNT ' + String(FIN_AMT));
            config.FINAL_OUTPUT.push('RENEWAL_AMOUNT ' + String(FIN_AMT));
        } else {
            console.log('SUBSCRIPTIONS_NOT_FOUND');
            config.FINAL_OUTPUT.push('SUBSCRIPTIONS_NOT_FOUND');
        }
    }
}
module.exports = checkCategory;