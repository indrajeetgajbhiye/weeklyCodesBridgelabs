var fs =  require('fs');
let readlineSync = require('readline-sync'); 
let assert = require('chai').assert;
let unOrderedListObj = require('../dataStructures/unOrderedList');
var orderArray= fs.readFileSync('../fileRead/unOrderedListInputs.txt', 'utf-8').toString().split(" ");
describe('unOrderedList file', function(){
    describe('unOrderedList()', function(){
        it('function should be a string', function(){
            assert.equal(unOrderedListObj.check(orderArray), 'Empty file');
        });
        // it('function should not be empty', function(){
        //     assert.typeOf(orderArray, 'string');
        // })
    });
});