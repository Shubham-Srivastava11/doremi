const config = require('./config.js');

const printSubscription = (category, str, endPersonal, endPremium) => {
    if (str === 'PERSONAL') {
        config.outputList.push('RENEWAL_REMINDER ' + category + ' ' + endPersonal);
    } else {
        config.outputList.push('RENEWAL_REMINDER ' + category + ' ' + endPremium);
    }
}

module.exports = printSubscription;