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
 * @description importing the readline-sync file
 * @var {*} readlineSync
 * @description importing the utility file from ../utility/temperatureCoversionUtils
 * @let {*} temperatureConversion
 */
var readlineSync = require("readline-sync");
let temperatureConversion = require("../utility/temperatureCoversionUtils");
/**
 * @description making a new object for class 
 * @let {*} findTemp
 * @var {*} temp creating a temporary variable temp
 */
let findTemp = new temperatureConversion();
var temp;
/**
 * @description main() is the initial driver function 
 */
var main = function(){
    console.log("****** Temperature conversion ******");
    console.log("press 1 to convert celsius to farenheit");
    console.log("press 2 to convert farenheit to celsius");
/**
 * @let {number} choice takes the input to select the function
 */
    let choice = parseInt(readlineSync.question("Give the input : "));
    if(choice==1){
/**
 * @if choice == 1 it takes value in celcius
 * @var {*} temp takes the input
 */
        temp=parseInt(readlineSync.question("Input the temp in celsius : "));
/**
 * @description calling function toFarenheit()
 */
        console.log("in farenheit",findTemp.toFarenheit(temp));
    }
    else if(choice==2){
/**
 * @if choice == 2 it takes value in farenheit
 * @var {*} temp takes the input
 */
        temp=parseInt(readlineSync.question("Input the temp in Farenheit : "));
/**
 * @description calling function toCelsius()
 */
        console.log("in celsius",findTemp.toCelsius(temp));
    }
    else {
/**
 * @description for user inputs which are not ==1 and ==2
 */
        console.log("Give correct Input!");
    }
}
/**
 * 
 * The module.exports or exports is a special object which is included in every JS file in the Node.js application by default.
 *  
 * module is a variable that represents current module and exports is an object that will be exposed as a module. 
 * 
 * So, whatever you assign to module.exports or exports, will be exposed as a module.
 */
/**
 * @description calling main()
 */
main();