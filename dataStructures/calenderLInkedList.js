var common =  require('../utility/commonUtils');
var calender = require('../utility/calenderUtilsLinkedList');
var calenderUtils = new calender.Calender();
var arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function main(month, year){
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        arrMonth[1] = parseInt(29);
    }
    if(month<13){
        var dayOfWeekCount = parseInt(calenderUtils.firstDayOfWeek(year, month));
        calenderUtils.monthMaker(dayOfWeekCount,arrMonth, month, year);
    }
    else {
        console.log("Invalid Date");
        startProgram();
    }
}
function startProgram (){
    var year = common.inputFunction("Enter the year: ");
    var month = common.inputFunction("Enter the month: ");
    try{
    if(!isNaN(month)&&!isNaN(year)) throw true;
    else false ;
    }
    catch (err){
        if(err==true){
            main(month, year);
            return err;
        }
        else {
            startProgram();
            return err;
        }
    }
}
startProgram();

module.exports = {
    startProgram,
    main,
}