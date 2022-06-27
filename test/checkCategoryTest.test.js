const assert = require('chai').assert;
const checkCategory = require('../functionality/checkCategory.js');
const config = require('../functionality/config.js');
// afterEach(cleanup);
describe('Category wise Amount test.', function () {

    // let check = checkDate;
    const amt = checkCategory(0, ['ADD_SUBSCRIPTION', 'MUSIC', 'PERSONAL'], '10-03-2022', '10-05-2022');
    it('Check category wise amount validation(MUSIC PERSONAL)', function () {
        assert.equal(amt, 100);
    });

    const videoAmt = checkCategory(0, ['ADD_SUBSCRIPTION', 'VIDEO', 'PERSONAL'], '10-03-2022', '10-05-2022');
    it('Check category wise amount validation(VIDEO PERSONAL)', function () {
        assert.equal(videoAmt, 200);
    });

    const topUpAmt = checkCategory(0, ['ADD_TOPUP', "FOUR_DEVICE", "2"], '10-03-2022', '10-05-2022');
    it('Check category wise amount validation(Top Up)', function () {
        assert.equal(topUpAmt, 100);
    });


    it('Check category wise amount validation(Print details error)', function () {
        config.TRACK_SUBSCRIPTION = [];
        config.FINAL_OUTPUT = [];
        const a = checkCategory(0, ['PRINT_RENEWAL_DETAILS'], '10-03-2022', '10-05-2022');
        // console.log(config.FINAL_OUTPUT);npm 
        assert.include(config.FINAL_OUTPUT, 'SUBSCRIPTIONS_NOT_FOUND');
    });


});