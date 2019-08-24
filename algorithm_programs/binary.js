let binaryUtils = require("../utility/binaryUtils");
let common = require("../utility/commonUtils");
console.log('enter the binary number');
var number = common.inputFunctionString('in bianary only');
main = function(number){
    var outPut = binaryUtils.nibbleSwap(number);
    return outPut;
}
main(number);