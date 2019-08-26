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
var readlineSync = require("readline-sync");
let common = require("../utility/commonUtils")
let monthlyPaymentObj = require("../utility/monthlyPaymentsUtils")
function main (){
    var principle, years, rate, nMonths, iRate;
    console.log("******** Monthly Payments ********");
    principle = common.inputFunction("Enter the principle amount: ");
    years = common.inputFunction("Enter the no of years: ");
    rate = common.inputFunction("Enter the rate of interest: ");
    nMonths = parseInt(12 * years);
    iRate = parseInt(rate / (12 * 100 ));
    let payment = monthlyPaymentObj.monthlyPayment(principle, nMonths, iRate);
    console.log(typeof(payment));
}
main();