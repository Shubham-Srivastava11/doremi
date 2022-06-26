// //Add your tests here

// // const assert = require('chai').assert;
// import checkDateFormat from './functionality/checkDateFormat.js';
// describe('ALL', function () {
//     describe('Date test', function () {

//         // let check = checkDate;
//         const [exp, personal, premium] = checkDateFormat('20-02-2022')
//         it('Date validation', function () {
//             assert.equal(exp, true);
//         });

//         it('Personal plan date validation', function () {
//             assert.equal(personal, '10-03-2022');
//         });

//         it('Premium plan date validation', function () {
//             assert.equal(premium, '10-05-2022');
//         });

//         const [expDate, personalPlan, premiumPlan] = checkDateFormat('20-20-2022')
//         it('Date validation', function () {
//             assert.equal(expDate, false);
//         });
//     });
//     describe('Category wise Amount test.', function () {

//         // let check = checkDate;
//         const amt = checkCategory(0, ['ADD_SUBSCRIPTION', 'MUSIC', 'PERSONAL'], '10-03-2022', '10-05-2022');
//         it('Check category wise amount validation(MUSIC PERSONAL)', function () {
//             assert.equal(amt, 100);
//         });

//         const premiumAmt = checkCategory(0, ['ADD_SUBSCRIPTION', 'VIDEO', 'PERSONAL'], '10-03-2022', '10-05-2022');
//         it('Check category wise amount validation(VIDEO PERSONAL)', function () {
//             assert.equal(premiumAmt, 200);
//         });

//     });

//     describe('End to End', function () {

//         // let check = checkDate;
//         const input = [
//             ['MUSIC', 'PERSONAL'],
//             ['MUSIC', 'PREMIUM']
//         ];

//         console.log(FINAL_OUTPUT);
//         const amt = addTopUp(["FOUR_DEVICE", "3"]);
//         it('Top up validation', function () {
//             assert.equal(amt, 150);
//         });

//         const amtError = addTopUp(["FOUR_DEVICE", "3"]);
//         it('Top up Error validation', function () {
//             assert.equal(amtError, 0);
//             assert.include(outputErrorList, 'ADD_TOPUP_FAILED DUPLICATE_TOPUP');
//         });

//         for (let val of input) {
//             const addSubError = addSubscription(val);
//         }
//         it('Subscription duplicate Error validation', function () {
//             assert.include(outputErrorList, 'ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY');
//         });

//     });
// });