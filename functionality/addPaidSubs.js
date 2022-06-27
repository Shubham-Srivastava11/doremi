const config = require('./config.js');
const printSubscription = require('./printSubscription.js');
const subscriptionError = require('./subscriptionError.js');

const addPaidSubs = (data, endPersonal, endPremium) => {
    var RENEWAL_AMOUNT = 0;
    if (!config.TRACK_SUBSCRIPTION.includes(data[0])) {
        RENEWAL_AMOUNT += config.CATEGORY[data[0]][data[1]];
        config.TRACK_SUBSCRIPTION.push(data[0]);
        printSubscription(data[0], data[1], endPersonal, endPremium);
        return RENEWAL_AMOUNT;
    } else {
        subscriptionError();
        return 0;
    }
}
module.exports = addPaidSubs;