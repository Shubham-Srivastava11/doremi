const assert = require('chai').assert;
const addSubscription = require('../functionality/addSubscription.js');
const addTopUp = require('../functionality/addTopUp.js');
const config = require('../functionality/config.js');

describe('End to End', function () {
    const input = [
        ['MUSIC', 'PERSONAL'],
        ['MUSIC', 'PREMIUM']
    ];
    for (let val of input) {
        const addSubError = addSubscription(val);
    }
    it('Subscription duplicate Error validation', function () {
        assert.include(config.outputErrorList, 'ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY');
    });
});