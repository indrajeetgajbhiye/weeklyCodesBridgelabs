let assert = require('chai').assert;
var grocery =  require('../utility/groceryUtils');
var data = new grocery.JsonData();
var newData = new Array();
var inventory = data.read('../jsonFiles/food.json');
describe("read() ", function(){
    it("read should be okay ", function(){
        assert.ok(inventory);
    });
    it("read should not be null ", function(){
        assert.notTypeOf(inventory, 'null');
    });
    it("read should not be null ", function(){
        assert.notTypeOf(inventory, 'object');
    });
    it("read should not be null ", function(){
        assert.notTypeOf(inventory, 'undefined');
    });
})
describe("write() ", function(){
    it("read should be okay ", function(){
        assert.isNotNaN(data.write("../jsonFiles/outputFood.json", newData, inventory));
    });
})
