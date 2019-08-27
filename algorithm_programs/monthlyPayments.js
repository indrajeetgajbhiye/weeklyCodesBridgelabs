/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.

*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed

*/

/******************************************************************************************************************
 *  Execution       :   
 * 
 * 
 *  Purpose         :   this program required to get the principle amount rate of interest and time duration
 *                      and generate the monthly payment one needs to pay according to the com[ound interest
 *                      
 * 
 * @description     
 *  
 * @file            :   monthlyPayments.js
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
/**
 * @description import the file from ../utility/commonUtils and store it in object coomon
 * @let <object> common
 */
let common = require("../utility/commonUtils")
/**
 * @description import the file from ../utility/monthlyPaymentsUtils and store it in object coomon
 * @let <object> monthlyPaymentsObj
 */
let monthlyPaymentObj = require("../utility/monthlyPaymentsUtils")
/**
 * @description definition of main function to run the driver file code
 */
function main (){
/**
 * @description declared variables to strore the inputs as principle amount, years, rate of interest
 * @var {number} principle
 * @var {number} years
 * @var {number} rate
 * @var {number} nMonths 
 * @var {number} iRate
 */
    var principle, years, rate, nMonths, iRate;
    console.log("******** Monthly Payments ********");
/**
 * @description getting thr input from calling coomon.inputfunction("string"), which takes string
 *              as argument and returns number 
 */
    principle = common.inputFunction("Enter the principle amount: ");
    years = common.inputFunction("Enter the no of years: ");
    rate = common.inputFunction("Enter the rate of interest: ");
/**
 * @description converting years into months, and rate of interest by formula 
 * @var {number} nMonths
 * @var {number} iRate
 */
    nMonths = parseInt(12 * years);
    iRate = parseInt(rate / (12 * 100 ));
/**
 * @description calling function monthlyPaymentObj.monthlyPayment(principle, nMonths, iRate)
 *              to count the monthly payment one need to make 
 * @let {number} payment
 */
    let payment = monthlyPaymentObj.monthlyPayment(principle, nMonths, iRate);
/**
 * @description returning a value to check in future
 */
    return payment;
}
/**
 * @description calling function main()
 */
main();

module.exports = {
    main,
}