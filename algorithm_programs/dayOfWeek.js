/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.

*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed

*/

/******************************************************************************************************************
 *  Execution       :   
 * 
 * 
 *  Purpose         :   this program required to have inputs in the form of yyyy mm dd and then 
 *                      converts it to the day of the fall on that day
 * 
 * @description     
 *  
 * @file            :   dayOfWeek.js
 * @overview        :   to get the corresponding day of week for the date given
 * @module          :
 * @author          :   Indrajeet Gajbhiye indrajetgajbhiye@gmail.com
 * @version         :   
 * @since           :   21-08-2019
 * 
 * 
 ********************************************************************************************************************/

/**
 * 
 * The module.exports or exports is a special object which is included in every JS file in the Node.js application by default.
 *  
 * module is a variable that represents current module and exports is an object that will be exposed as a module. 
 * 
 * So, whatever you assign to module.exports or exports, will be exposed as a module.
 */
let dayOfWeekutils = require("../utility/dayOfWeekUtils");
let commonVar = require("../utility/commonUtils");
console.log("******* Finding day of week *******");
var day, month, year;
var arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
year = commonVar.inputFunction("Enter the year: ");
month = commonVar.inputFunction("Enter the month: ");
day = commonVar.inputFunction("Enter the day: ");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    arrMonth[1] = parseInt(29);
}
if (day <= arrMonth[month - 1]) {
    var dayOfWeekCount = parseInt(dayOfWeekutils.dayOfWeek(year, month, day));
    console.log("day of week is ", dayOfWeekutils.dayFinder(dayOfWeekCount));
}
 else {
    console.log("Invalid Date");
}
