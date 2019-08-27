let vendingUser = require("../utility/vendingUtils");
var utility = new vendingUser();

function main() {

    var amountTemp = utility.takeInputs();
    var amount = parseInt(amountTemp);
    utility.countCurrency(amount);

}
main();

