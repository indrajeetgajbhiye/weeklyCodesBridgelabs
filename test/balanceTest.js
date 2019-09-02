var balanceUtils = require('../utility/balanceUtils');
let assert = require('chai').assert;
var common = require('..//utility/commonUtils');
var expression = common.inputFunctionString('Enter the string to test: ');
describe('main()', function(){
    it('main() function should return string', function(){
        assert.typeOf(balanceUtils.main(expression),'string');
    });
});