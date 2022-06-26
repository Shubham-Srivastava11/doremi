import { assert } from 'chai';
import { checkCategory } from '../functionality/checkCategory.js';
// import { cleanup } from '@testing-library/react';

// afterEach(cleanup);
describe('Category wise Amount test.', function () {

    // let check = checkDate;
    const amt = checkCategory(0, ['ADD_SUBSCRIPTION', 'MUSIC', 'PERSONAL'], '10-03-2022', '10-05-2022');
    it('Check category wise amount validation(MUSIC PERSONAL)', function () {
        assert.equal(amt, 100);
    });

    const premiumAmt = checkCategory(0, ['ADD_SUBSCRIPTION', 'VIDEO', 'PERSONAL'], '10-03-2022', '10-05-2022');
    it('Check category wise amount validation(VIDEO PERSONAL)', function () {
        assert.equal(premiumAmt, 200);
    });



});