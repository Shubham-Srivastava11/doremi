const config = require('./config.js');

const addTopUp = (data) => {
    var RENEWAL_AMOUNT = 0;
    if (!(config.TRACK_SUBSCRIPTION.includes('ADD_TOPUP'))) {
        RENEWAL_AMOUNT += Number(data[1]) * config.TOPUP[data[0]];
        config.TRACK_SUBSCRIPTION.push('ADD_TOPUP');
    } else {
        config.outputErrorList.push('ADD_TOPUP_FAILED DUPLICATE_TOPUP')
    }
    return RENEWAL_AMOUNT;
}
module.exports = addTopUp;