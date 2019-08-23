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
