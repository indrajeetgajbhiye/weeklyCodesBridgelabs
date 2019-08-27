/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.
*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed
*/
/******************************************************************************************************************
 *  Execution       :   
 * 
 * 
 *  Purpose         :   the pusrpose of this program is to convert the given value of temperature in farenheit 
 *                      or celsius according to the user input
 *                      
 * 
 * @description     
 *  
 * @file            :   temperatureConversion.js
 * @overview        :   To convert the temperature into celcius or farenheit
 * @module          :
 * @author          :   Indrajeet Gajbhiye indrajetgajbhiye@gmail.com
 * @version         :   
 * @since           :   27-08-2019
 * 
 * 
 *******************************************************************************************************************
 */
/**
 * @description import the functions from ../utility/commonUtils
 * @var {*} common 
 * @description import the functions from ../utility/toBinaryUtils
 * @var {*} toBinaryUtils 
 */
var common = require('../utility/commonUtils');
var toBinaryUtils = require('../utility/toBinaryUtils');
/**
 * @var {number} number takes input from common input function 
 * @function inputFunction('string') takes string as an agrument 
 */
var number = common.inputFunction('Enter the number');
var binaryOut;
main = function(number){
    binaryOut = toBinaryUtils.toBinary(number);
    console.log("Binary is = ", binaryOut);
    console.log(typeof(binaryOut));
    return parseInt(binaryOut);
}
main(number);