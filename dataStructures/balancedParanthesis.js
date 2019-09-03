/******************************************************************************
 * Execution    :   default node            terminal> node cashCounter.js
 * 
 * Purpose      :   to balance the paranthesis of given expression and return true if balanced
 *                  .
 * 
 * @description
 * 
 * @file        :   balanceParanthesis.js
 * @overview    :   to balance the paranthesis in given arithmatic expression
 *                  
 * @author      :   Indrajeet Gajbhiye indrajeetgajbhiye@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/
/**
 * @var {*} balanceUtils 
 * @description to get the contecnt from the file 
 */
var balanceutils = require('../utility/balanceUtils');
/**
 * @var {*} common 
 * @description to access the common util functions
 */
var common = require('../utility/commonUtils');
/**
 * @var {string} expression
 * @description to read the string fro user
 */
var expression = common.inputFunctionString('Enter the expression');
/**
 * @description calling the function main(expression) in balanceUtils
 */
balanceutils.main(expression);
