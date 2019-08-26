/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.

*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed

*/

/******************************************************************************************************************
 *  Execution       :   
 * 
 * 
 *  Purpose         :   Program to sort the given array via bubble sort
 * 
 * @description     
 *  
 * @file            :   bubbleSort.js
 * @overview        :   to get the sorted arryay using the algorythm of bubble sort
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
let readlineSync = require("readline-sync");
let bubbleSortUtilObj = require("../utility/bubbleSortUtils");
var number = readlineSync.question("enter the size of array");
var bubbleArray = new Array(number);
for(var i = 0;i<number;i++){
    bubbleArray[i]=readlineSync.question("");
}
var arr = bubbleSortUtilObj.bubbleSort(bubbleArray);
console.log(arr);