var common =  require('../utility/commonUtils');
var calender = require('../utility/calenderUtils');
var calenderUtils = new calender.Calender();
var arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var year = common.inputFunction("Enter the year: ");
var month = common.inputFunction("Enter the month: ");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    arrMonth[1] = parseInt(29);
}
if(month<13){
    var dayOfWeekCount = parseInt(calenderUtils.firstDayOfWeek(year, month));
    console.log("day of week is ", calenderUtils.dayFinder(dayOfWeekCount));
    calenderUtils.monthMaker(dayOfWeekCount,arrMonth, month);
}
 else {
    console.log("Invalid Date");
}