const assert = require('chai').assert;
const addTopUp = require('../functionality/addTopUp.js');
const config = require('../functionality/config.js');

describe('End to End', function () {
    const input = [
        ['MUSIC', 'PERSONAL'],
        ['MUSIC', 'PREMIUM']
    ];

    it('Top up validation', function () {
        config.TRACK_SUBSCRIPTION = [];
        const amt = addTopUp(["TEN_DEVICE", "3"]);
        // console.log(amt);
        assert.equal(amt, 300);
    });

    it('Top up Error validation', function () {
        const amtError = addTopUp(["FOUR_DEVICE", "3"]);
        assert.equal(amtError, 0);
        assert.include(config.outputErrorList, 'ADD_TOPUP_FAILED DUPLICATE_TOPUP');
    });
});