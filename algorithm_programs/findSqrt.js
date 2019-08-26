/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.

*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed

*/

/******************************************************************************************************************
 *  Execution       :   
 * 
 * 
 *  Purpose         :   find the square root of given function using newtons method
 * 
 * @description     
 *  
 * @file            :   findSqrt.js
 * @overview        :   to find the square root of the given function using
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
