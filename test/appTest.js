/* 
*   Before executing this script expected that javascript is already installed and running in the linux/windows 
    environment.

*   DEPENDANCIES AND PACKAGES - Expect the nodejs & npm installed

*/

/******************************************************************************************************************
 *  Execution       :   
 * 
 * 
 *  Purpose         :   Saving the needed set of function definition 
 * 
 * @description     
 *  
 * @file            :   gamblerUtils.js
 * @overview        :   Required file to save user defined functions for multipurpose use
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

const assert = require("chai").assert;
const vendingUtils = require("../utility/vendingUtils");

//let amount = vendingMachine.takeInput();
let vendingMachineClass = new vendingUtils();
let countCurrencyResult= vendingMachineClass.takeInputs();
describe('Vending Machine', function(){
    describe('countcurrency()',function(){
        it('countCurrency() should return type number', function(){
            assert.typeOf(countCurrencyResult, "number");
        });
        it('count currency should return output more than 0', function(){
            assert.isAbove(countCurrencyResult, 0);
        });
    });
    describe('takeInput()',function(){
        it('takeInput() should return type number', function(){
            assert.typeOf(countCurrencyResult, "number");
        });
        it('count currency should return output more than 0', function(){
            assert.isAbove(countCurrencyResult, 0);
        });
    });
});
