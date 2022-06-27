const fs = require('fs');
const config = require('./functionality/config.js');
const checkDateFormat = require('./functionality/checkDateFormat.js');
const checkCategory = require('./functionality/checkCategory.js');

const filename = process.argv[2]
if (!filename) {
    console.log('Provide File Name.')
} else {
    fs.readFile(filename, "utf8", (err, data) => {
        var splitBy = '\n';
        if (data.split('\n')[0].includes('\r')) {
            splitBy = '\r\n';
        }
        const Lines = []
        for (let line of data.split(splitBy)) {
            Lines.push(line.split(' '));
        }
        const startDate = Lines[0][1];
        const [res, endPersonal, endPremium] = checkDateFormat(startDate);

        if (res) {
            var FIN_AMT = 0;
            for (let command of Lines.slice(1)) {
                FIN_AMT = checkCategory(FIN_AMT, command, endPersonal, endPremium);
            }
        } else {
            console.log('INVALID_DATE');
            config.FINAL_OUTPUT.push("INVALID_DATE");
            for (let command of Lines.slice(1)) {
                if (command[0].includes('ADD')) {
                    console.log(command[0] + '_FAILED INVALID_DATE');
                    config.FINAL_OUTPUT.push(command[0] + '_FAILED INVALID_DATE');
                }
            }
            console.log('SUBSCRIPTIONS_NOT_FOUND');
            config.FINAL_OUTPUT.push('SUBSCRIPTIONS_NOT_FOUND');
        }

    })
}
