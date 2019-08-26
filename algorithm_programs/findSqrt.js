// var readlineSync = require("readline-sync");
let common = require("../utility/commonUtils");
let findSqrtVar = require("../utility/findSqrtUtils");
var number = common.inputFunctionFloat("Enter the number : ");
function main(number) {
    
    if(number>0){
        console.log("the root is", findSqrtVar.findSqrt(number));
        return number;
    }
    else {
        console.log("Enter a valid number");
        return number;
    }
}
main(number);

module.exports = {
    main
}
