module.exports = {
    dayOfWeek : function( year, month, day){
        var tick = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        year -= month < 3;
        return (year + year/4 - year/100 + year/400 + tick[month-1] + day) % 7;
    },
    dayFinder : function(dayOfWeekCount){
        var dDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',];
        return dDay[dayOfWeekCount];
    }
}