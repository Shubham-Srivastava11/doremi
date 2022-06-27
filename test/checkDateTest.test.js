const assert = require('chai').assert;
const checkDateFormat = require('../functionality/checkDateFormat.js');

describe('Date test', function () {

    // let check = checkDate;
    const [exp, personal, premium] = checkDateFormat('20-02-2022')
    it('Date validation', function () {
        assert.equal(exp, true);
    });

    it('Personal plan date validation', function () {
        assert.equal(personal, '10-03-2022');
    });

    it('Premium plan date validation', function () {
        assert.equal(premium, '10-05-2022');
    });

    const [expDate, personalPlan, premiumPlan] = checkDateFormat('20-20-2022')
    it('Date validation', function () {
        assert.equal(expDate, false);
    });
});