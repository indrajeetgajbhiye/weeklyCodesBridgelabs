let assert = require('chai').assert;
var addressBookUtils =  require('../utility/addressBookUtils');
var addressObj = new addressBookUtils.Address();
var createAddressObj = addressObj.createAddress();
describe("createAddress()", function(){
    it("createAddress should return true", function(){
        assert.equal(createAddressObj, true);
    })
    it("createAddress is boolean", function(){
        assert.isBoolean(createAddressObj);
    })
})
describe("createAddress()", function(){
    it("createAddress should return true", function(){
        assert.equal(createAddressObj, true);
    })
    it("createAddress is boolean", function(){
        assert.isBoolean(createAddressObj);
    })
})