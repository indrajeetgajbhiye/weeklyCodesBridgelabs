/******************************************************************************
 * Execution    :   default node            terminal> node cashCounter.js
 * 
 * Purpose      :   find the number of total Binary search tree can be formed
 *                  
 * 
 * @description     
 * 
 * @file        :   numberOfBST.js
 * @overview    :   
 *                  
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/
/**
 * @let {} readlineSync
 * @var {} bstUtils
 * @description imports all the contect from file
 */
let readlineSync = require('readline-sync')
var bstUtils = require('../utility/numberOfBSTUtils');
/**
 * @function takeInput()
 * @description to take input as no os nodes 
 */
function takeInput() {
    var input = readlineSync.question('Enter the number of nodes');
    try {
        /**
         * @description check for nunbers 
         */
        if (input <= 0 || isNaN(input)) {
            throw 'Invalid Input'
        } else {
            return parseInt(input);
        }
    }
    catch (err) {
        if (err) {
            console.log('Try again with valid numbers and not strings');
            takeInput();
        }
    }
}
/**
 * @description calling a main driver function
 */
function main() {
    var number = takeInput();
    var bstNumber = new bstUtils.NumberOfBST();
    console.log('Tatal number of combinations are', bstNumber.catalanNumber(number));
}
main();