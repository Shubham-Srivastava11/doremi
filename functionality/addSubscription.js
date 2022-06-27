const config = require('./config.js');
const addPaidSubs = require('./addPaidSubs.js');

const addSubscription = (data, endPersonal, endPremium) => {
    if (data[1] !== 'FREE') {
        return addPaidSubs(data, endPersonal, endPremium);
    } else {
        config.outputList.push('RENEWAL_REMINDER ' + data[0] + ' ' + endPersonal);
        return 0;
    }
}

module.exports = addSubscription;