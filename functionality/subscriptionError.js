const config = require('./config.js');

const subscriptionError = () => {
    config.outputErrorList.push('ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY');
}

module.exports = subscriptionError;