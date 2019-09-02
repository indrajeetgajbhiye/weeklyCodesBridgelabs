let assert = require('chai').assert;
var common =  require('../utility/commonUtils');
var calender = require('../utility/calenderUtils');
var calenderUtils = new calender.Calender();
var cal = require('../dataStructures/calender');
var month = common.inputFunction('Enter the Month : ');
var year = common.inputFunction('Enter the Year: ');
cal.main(month, year);
describe('firstDayOfWeek()', function(){
    it('firstDayOfWeek() should return the number', function(){
        assert.typeOf(calenderUtils.firstDayOfWeek(year , month),'number');
    });
    it('firstDayOfWeek() should not be negative',function(){
        assert.isAtLeast(calenderUtils.firstDayOfWeek(year, month), 0);
    });
    it('firstDayOfWeek() should not be greater than 6',function(){
        assert.isAtMost(calenderUtils.firstDayOfWeek(year, month), 6);
    });
})
