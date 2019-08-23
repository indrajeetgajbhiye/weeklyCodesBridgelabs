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
