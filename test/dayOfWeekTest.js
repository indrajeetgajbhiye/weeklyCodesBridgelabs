const assert = require("chai").assert;
const dayOfWeekImport = require("../utility/dayOfWeekUtils");
const commonVar = require("../utility/commonUtils");
let dayOfweekresult = dayOfWeekImport.dayOfWeek(1996,11,24);
let dayFinderResult = dayOfWeekImport.dayFinder(5);
let inputFunctionResult = commonVar.inputFunction("do anything  ");
describe('Day Of Week', function(){
    describe('dayOfWeek()',function(){
        it('dayOfWeek should return a number', function(){
            assert.typeOf(dayOfweekresult, 'number');
        });
        it('dayOfWeek is atleast', function(){
            assert.isAtLeast(dayOfweekresult, 0);
        });
        it('dayOfWeek is atmost', function(){
            assert.isAtMost(dayOfweekresult, 6);
        });
    });
    describe('inputFunction()', function(){
        it('input function should return a number', function(){
            assert.typeOf(inputFunctionResult, 'number');
        });
    });
    describe('dayFinder()',function(){
        it('dayFinder() should return a string', function(){
            assert.typeOf(dayFinderResult, 'string');
        });
    });
});