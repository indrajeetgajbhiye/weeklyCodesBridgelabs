/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.

*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed

*/

/******************************************************************************************************************
 *  Execution       :   Default mode terminal> $ node Quadratic.js
 * 
 * 
 *  Purpose         :   Find the roots of Quadratic Equation when inputs are provided
 * 
 * @description     
 *  
 * @file            :   Quadratic.js
 * @overview        :   Program to calculate roots when inputs are give
 * @module          :
 * @author          :   Indrajeet Gajbhiye
 * @version         :   
 * @since           :   21-08-2019
 * 
 * 
 ********************************************************************************************************************/

/**
 * readlineSync tries to let your script have a conversation with the user via a console, 
 * even when the input/output stream is redirected
 * 
 * to use readline-sync we have to import this module via npm and save it
 * 
 * @command         :   nmp i readline-sync --save 
 * 
 * it imports readline-sync in th object readlineSync
 */

var readlineSync = require('readline-sync');

console.log("Give the values for a*x*x + b*x + c in the following");

/**
 * Waiting for th user to give the inputs for the quadratic equation in the form of a* x * x + b * x + c
 */

var a = readlineSync.question('Input the value of a '); 

var b = readlineSync.question('Input the value of b '); 

var c = readlineSync.question('Input the value of c ');

/**
 *
 * importing utility.js file from the folder utility in the work directory into the object FindRoot
 * 
 */
let FindRoot= require("./utility/utility.js")

/**
 * Calling out the definition of Checkroot(a,b,c) function which takes 3 numbers as arguments 
 */
FindRoot.checkRoot(a,b,c);

