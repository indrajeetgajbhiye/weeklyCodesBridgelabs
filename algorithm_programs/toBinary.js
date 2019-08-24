var common = require('../utility/commonUtils');
var toBinaryUtils = require('../utility/toBinaryUtils');
var number = common.inputFunction('Enter the number');
var binaryOut;
main = function(number){
    binaryOut = toBinaryUtils.toBinary(number);
    console.log("Binary is = ", binaryOut);
    console.log(typeof(binaryOut));
    return parseInt(binaryOut);
}
main(number);