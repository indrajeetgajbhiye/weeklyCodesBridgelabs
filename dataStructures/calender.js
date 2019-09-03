/******************************************************************************
 * Execution    :   default node            terminal> node cashCounter.js
 * 
 * Purpose      :   generate a calender when the year and month are given
 *                  
 * 
 * @description     
 * 
 * @file        :   calender.js
 * @overview    :   to genearte the calender when the year and month are given
 *                  
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/

var common = require('../utility/commonUtils');

var calender = require('../utility/calenderUtils');

var calenderUtils = new calender.Calender();

var arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function main(month, year) {

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        arrMonth[1] = parseInt(29);
    }

    if (month < 13 && month > 0 && year > 0) {
        var dayOfWeekCount = parseInt(calenderUtils.firstDayOfWeek(year, month));
        calenderUtils.monthMaker(dayOfWeekCount, arrMonth, month, year);
    }

    else {
        console.log("Invalid Date");

        startProgram();
    }
}
function startProgram() {

    var year = common.inputFunction("Enter the year: ");
    var month = common.inputFunction("Enter the month: ");
    try {

        if (isNaN(month) || isNaN(year)) {
            console.log('invalid input')
            throw true
        } else {
            main(month, year)
        };
    }
    catch (err) {
        if (err) {
            startProgram();
        }
    }
}

startProgram();

module.exports = {
    startProgram,
    main,
}