var fs =  require('fs');
let assert = require('chai').assert;
let unOrderedListObj = require('../dataStructures/unOrderedList');
var orderArray= fs.readFileSync('../fileRead/unOrderedListInputs.txt', 'utf-8').toString().split(" ");
var text = unOrderedListObj.check(orderArray)
console.log('>>>>>>>>>>>>',text);
describe('unOrderedList file', function(){
    describe('main()', function(){
        it('function should not be empty', function(){
            assert.isEqual(unOrderedListObj.main(),'file handled correctly');
        });
    });
});