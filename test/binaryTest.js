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
const binaryUtils = require("../utility/binaryUtils");
describe('Binary Nibble Swap', function(){
    describe('nibbleSwap()',function(){
        it('nibbleswap should return type number', function(){
            assert.typeOf(binaryUtils.nibbleSwap(45), "number");
        });
        it('nibbleswap should return output more than 0', function(){
            assert.isAbove(binaryUtils.nibbleSwap(45), 0);
        });
    });
    describe('swapIt()',function(){
        it('swapIt() should return type number', function(){
            assert.typeOf(binaryUtils.swapIt(45), "number");
        });
    });
});
