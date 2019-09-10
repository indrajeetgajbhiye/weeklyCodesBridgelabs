let assert = require('chai').assert;
let newAddressUtils = require('../utility/newAddressUtils');
let address = new newAddressUtils.AddressBook();
describe("AddressBook", function(){
    describe("createAddress", function(){
        it("should do null", function(){
            assert.isOk(address.createAddress)
        })
    })
    describe("deleteAddress", function(){
        it("should do null", function(){
            assert.isOk(address.deleteAddress);
        })
    })
    describe("openProfile", function(){
        it("should do null", function(){
            assert.isOk(address.openProfile)
        })
    })
})