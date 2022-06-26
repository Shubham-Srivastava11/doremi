import { assert } from 'chai';
// import { addSubscription } from '../functionality/addSubscription.js';
import { addTopUp } from '../functionality/addTopUp.js';
// import { checkCategory } from '../functionality/checkCategory.js';
import { FINAL_OUTPUT, outputErrorList } from '../functionality/config.js';

describe('End to End', function () {
    const input = [
        ['MUSIC', 'PERSONAL'],
        ['MUSIC', 'PREMIUM']
    ];

    it('Top up validation', function () {
        const amt = addTopUp(["FOUR_DEVICE", "3"]);
        console.log(amt);
        assert.equal(amt, 150);
    });

    it('Top up Error validation', function () {
        const amtError = addTopUp(["FOUR_DEVICE", "3"]);
        assert.equal(amtError, 0);
        assert.include(outputErrorList, 'ADD_TOPUP_FAILED DUPLICATE_TOPUP');
    });
});