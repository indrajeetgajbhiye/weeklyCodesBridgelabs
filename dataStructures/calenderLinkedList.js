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
/**
/**
 * @var {} common 
 * @description to access the functions in common 
 */
var common =  require('../utility/commonUtils');
/**
 * @var {} calender
 * @description to access the functions in calenderUtils.js file
 */
var calender = require('../utility/calenderUtils');
/**
 * @var {} calenderUtils 
 * @description creating a new object of class Calender
 */
var calenderUtils = new calender.Calender();
/**
 * @var {} arrMonth 
 * @description is a array of max days in month
 */
var arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/**
 * @function() {} main
 * @params {number} month
 * @params {number} year
 */
function main(month, year){
/**
 * @description checking for the leap year and change the array in case of leap year
 */
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        arrMonth[1] = parseInt(29);
    }
/**
 * @description calling function in calenderUtils when month<13
 *              consition for valid inputs
 */
    if(month<13 && month>0 && year>0){
        var dayOfWeekCount = parseInt(calenderUtils.firstDayOfWeek(year, month));
        calenderUtils.monthMaker(dayOfWeekCount,arrMonth, month, year);
    }
/**
 * @desciption in case of invalid inputs
 */
    else {
        console.log("Invalid Date");
/**
 * @description in case of invalid date it takes the inputs again
 */
        startProgram();
    }
}
function startProgram (){
/**
 * @var {number} year
 * @var {number} month
 * @description user inputs in months and years
 */
    var year = common.inputFunction("Enter the year: ");
    var month = common.inputFunction("Enter the month: ");
    try{
/**
 * @description if month and year are nuumbers then only proceed
 */
        if(!isNaN(month)&&!isNaN(year)) throw true;
        else false ;
    }
    catch (err){
        if(err==true){
/**
 * @description calling main function
 */
            main(month, year);
            return err;
        }
        else {
/**
 * @description calling startProgram
 */
            startProgram();
            return err;
        }
    }
}
/**
 * @description calling startProgram
 */
startProgram();
/**
 * @exports startProgram
 * @exports main
 */
module.exports = {
    startProgram,
    main,
}