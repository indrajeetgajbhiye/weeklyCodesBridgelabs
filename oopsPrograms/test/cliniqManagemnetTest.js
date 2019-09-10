let assert = require('chai').assert;
var utils = require('../utility/cliniqManagementUtils');
var appointmentObj = utils.addAppointment();
var searchObj = utils.searchList();
describe("addAppointment()", function(){
    it("addAppintment() should retrun true", function(){
        assert.equal(appointmentObj,true);
    })
    it("addAppointment() should be a boolean", function(){
        assert.isBoolean(appointmentObj);
    })
})
describe("searchList()", function(){
    it("searchList() should return true", function(){
        assert.equal(searchObj,true);
    })
    it("searchList() should be a boolean", function(){
        assert.isBoolean(searchObj);
    })
})
