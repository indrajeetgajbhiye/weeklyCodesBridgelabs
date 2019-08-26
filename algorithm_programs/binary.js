/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.

*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed

*/

/******************************************************************************************************************
 *  Execution       :   
 * 
 * 
 *  Purpose         :   Program to swap nibbles in given binary number and give its equivalent binary
 * 
 * @description     
 *  
 * @file            :   binary.js
 * @overview        :   given file is used to find the binary swaps
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
 * @descriptrion making an object to store the binaryUtils.js files functions
 * @let {object} binaryUtils 
 */
let binaryUtils = require("../utility/binaryUtils");
/**
 * @description making an object to store the exported functions in ../utility/commonUtils file
 * @let {object} common
 */
let common = require("../utility/commonUtils");

let toBinaryUtilsObj = require("../utility/toBinaryUtils")
console.log('Enter the binary number');
/**
 * @description made a variable to store thw output of the given function which is user input 
 * @var {string} number
 * @function inputFunctionString() takes argument string and returns string as which 
 *                                  is getting stored in @var number
 */
var number = common.inputFunctionString('in bianary only');
/**
 * JAVASCRIPT STYLE GUIDE - STATIC FUNCTION DECLARED
 * NOTES    - FUNCTION IS DEDCLARED IN THE DRIVER FILE ITSELF
 *          - FOLLOWING CAMELCASE FOR INDENTATION 
 * @description function passes the inputs to utility class functions and check for input string
 * @function main() takes argument string and returns string
 */
main = function(number){
/**
 * @var {string} saves the output of toBinary function
 */
    var number1 = toBinaryUtilsObj.toBinary(number);
/**
 * @var {string} outPut is to strore the result of function nibbleSwap 
 * @function nibbleSwap(number) {string} takes string as a input and retruns string
 * @description it swaps the nibbles of binary number
 */
    
    var outPut = binaryUtils.nibbleSwap(number1);        
/**
 * returs the outPut variable
 */
    return outPut;
}
/**
 * @description calling th function main
 */
main(number);

module.exports = {
    main,
}