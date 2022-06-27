const CATEGORY = {
    'MUSIC': {
        'PERSONAL': 100,
        'PREMIUM': 250
    },
    'VIDEO': {
        'PERSONAL': 200,
        'PREMIUM': 500
    },
    'PODCAST': {
        'PERSONAL': 100,
        'PREMIUM': 300
    }
}
const TOPUP = {
    'FOUR_DEVICE': 50,
    'TEN_DEVICE': 100
}
var TRACK_SUBSCRIPTION = []
var outputErrorList = []
var outputList = []
var FINAL_OUTPUT = []
var FIN_AMT = 0;
const HAS_SUBSCRIPTION = 'HAS_SUBSCRIPTION';
const dateFormat = "DD-MM-YYYY";
module.exports =
    { CATEGORY, TOPUP, TRACK_SUBSCRIPTION, outputErrorList, outputList, dateFormat, FINAL_OUTPUT, HAS_SUBSCRIPTION, FIN_AMT, };