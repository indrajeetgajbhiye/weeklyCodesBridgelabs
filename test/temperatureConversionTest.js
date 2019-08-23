const assert = require("chai").assert;
const tempConv = require("../utility/temperatureCoversionUtils");
let tempConvObj = new tempConv();
//let toCelResult = temp
describe("Temperature Conversion", function(){
    describe("toCelsius", function(){
        it('toCelsius must have a return type number', function(){
            assert.typeOf(tempConvObj.toCelsius(40),"number");
        });
    });
    describe("toFarenheit()",function(){
        it('toFarenheit must have ruturn type number', function(){
            assert.typeOf(tempConvObj.toFarenheit(),'number');
        });
    });
});