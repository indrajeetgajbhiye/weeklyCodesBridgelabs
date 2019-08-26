let assert = require("chai").assert;
let findSqrtVar = require("../algorithm_programs/findSqrt");
//let findSqrtUtilVar = require("../utility/findSqrtUtils");
let common = require("../utility/commonUtils");
var number = common.inputFunctionFloat("Enter the number");
var square = findSqrtVar.main(number);
describe("findSqrt()", function(){
    it('findSqrt must have a return type number', function(){
        assert.typeOf(square,'number');
    });
});
describe("main()", function(){
    it('main should return a number', function(){
        assert.typeOf(number,'number');
    });
    it('main should return a number > 0', function(){
        assert.isAbove(number,0);
    });
});
