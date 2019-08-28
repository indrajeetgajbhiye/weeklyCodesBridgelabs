let assert =  require('chai').assert;
let orderedListUtils = require('../utility/orderedListUtils');
var fs =  require('fs');
let bubbleSort = require('../utility/bubbleSortUtils');
var newOrderedObj = new orderedListUtils.OrderList();
//var newOrderedVar = newOrderedObj.convertIntoNumbers();
var separators = [' ', '\n', ',', 'NaN',"0,"];
var file = fs.readFileSync('../fileRead/orderedList.txt', 'utf-8').split(new RegExp(separators.join('|'), 'g'));
describe('file',function(){
    it('file should not be null', function(){
        assert.isNotEmpty(file)
    })
})
describe('function',function(){
    it('should print my name', function(){
        assert.equal(newOrderedObj.convertIntoNumbers(),'my name')
    })
})
describe('function',function(){
    it('should print my name', function(){
        assert.isTrue(newOrderedObj.writeIntoFile(file))
    })
})