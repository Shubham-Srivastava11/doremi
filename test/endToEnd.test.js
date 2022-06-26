import { assert } from 'chai';
import { addSubscription } from '../functionality/addSubscription.js';
import { addTopUp } from '../functionality/addTopUp.js';
// import { checkCategory } from '../functionality/checkCategory.js';
import { FINAL_OUTPUT, outputErrorList } from '../functionality/config.js';
// import { cleanup } from '@testing-library/react';
// afterEach(cleanup);
describe('End to End', function () {
    const input = [
        ['MUSIC', 'PERSONAL'],
        ['MUSIC', 'PREMIUM']
    ];
    // const amt = addTopUp(["FOUR_DEVICE", "3"]);
    // it('Top up validation', function () {
    //     assert.equal(amt, 150);
    // });
    // const amtError = addTopUp(["FOUR_DEVICE", "3"]);
    // it('Top up Error validation', function () {
    //     assert.equal(amtError, 0);
    //     assert.include(outputErrorList, 'ADD_TOPUP_FAILED DUPLICATE_TOPUP');
    // });

    for (let val of input) {
        const addSubError = addSubscription(val);
    }
    it('Subscription duplicate Error validation', function () {
        assert.include(outputErrorList, 'ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY');
    });



});