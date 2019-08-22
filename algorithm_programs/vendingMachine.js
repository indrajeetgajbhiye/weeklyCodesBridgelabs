var readlineSync = require("readline-sync");
let vendingUser = require("./utility/vendingUtils");



var amountTemp= readlineSync.question("Enter the amount: ");
var amount = parseInt(amountTemp);
new vendingUser(amount); 
var utility = new vendingUser(amount);

utility.countCurrency(amount);