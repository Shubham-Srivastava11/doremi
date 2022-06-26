import { dateFormat } from "./config.js";
import moment from 'moment';

export function checkDateFormat(startDate) {
    var res = true;
    var end_personal = ''
    var end_premium = ''

    const day = startDate.split('-')[0];
    const month = Number(startDate.split('-')[1]) - 1;
    const year = startDate.split('-')[2];
    try {
        if (moment(startDate.trim(), dateFormat, true).isValid()) {
            var d = new Date(year, String(month), day);
            d.setMonth(d.getMonth() + 1);
            d.setDate((new Date(d)).getDate() - 10)
            end_personal = d.toLocaleDateString('en-GB').replaceAll('/', '-');
            // --------------------------------------
            var d = new Date(year, String(month), day);
            d.setMonth(d.getMonth() + 3);
            d.setDate((new Date(d)).getDate() - 10)
            end_premium = d.toLocaleDateString('en-GB').replaceAll('/', '-');
            // console.log(end_premium);
        } else {
            res = false;
        }

    } catch {
        res = false;
        console.log("err");
    }
    return [res, end_personal, end_premium];
}
