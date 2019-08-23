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