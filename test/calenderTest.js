let assert = require('chai').assert;
var common =  require('../utility/commonUtils');
var calender = require('../utility/calenderUtils');
var calenderUtils = new calender.Calender();
// var cal = require('../dataStructures/calender');
var month = common.inputFunction('Enter the Month : ');
var year = common.inputFunction('Enter the Year: ');
var dayOfWeekCount = parseInt(calenderUtils.firstDayOfWeek(year, month));
console.log(dayOfWeekCount);
describe('firstDayOfWeek()', function(){
    it('firstDayOfWeek() should return the number', function(){
        assert.typeOf(dayOfWeekCount,'number');
    });
    it('firstDayOfWeek() should not be negative',function(){
        assert.isAtLeast(dayOfWeekCount, 0);
    });
    it('firstDayOfWeek() should not be greater than 6',function(){
        assert.isAtMost(dayOfWeekCount, 6);
    });
})
