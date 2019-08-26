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
 * @file            :   anagram.js
 * @overview        :   to find the anagram of the given string
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
var readline = require('readline-sync');
let anagramObj=require('../utility/anagramUtils');
var str1 = readline.question("Enter string 1: ");
var str2 = readline.question("Enter string 2: ");
anagramObj.checkAnagram(str1, str2);