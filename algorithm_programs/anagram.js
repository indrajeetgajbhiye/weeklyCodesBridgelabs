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
let anagramObj=require('../utility/permuteUtils');
var str1 = readline.question("Enter string 1: ");
var anagram = anagramObj.permut(str1);
var k;
//console.log(anagram);
for(var i =1; anagram[i]!=null; i++){
    try{
        if(anagram [i] == str1) throw "its an anagram";
    }
    catch(err){
        console.log(err);
    }
}
