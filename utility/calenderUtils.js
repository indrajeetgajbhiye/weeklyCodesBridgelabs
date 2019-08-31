class Calender{
    constructor(){
        this.tick = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        this.weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',];
        this.monthName = ['January','Februry','March','April','May','June','July','August',
                            'September', 'October','November','December'];
        this.monthPrint = [[' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ']];
    }
    firstDayOfWeek( year, month){
        year -= month < 3;
        return (year + year/4 - year/100 + year/400 + this.tick[month-1] + 1) % 7;
    }
    dayFinder(dayOfWeekCount){
        return this.weekDay[dayOfWeekCount];
    }
    monthMaker(dayOfWeekCount, arrMonth, month, year){
        var arrText='';
        var addDate= 1;
        console.log(this.monthName[month-1], year);
        console.log('S Mo Tu Wed Th Fri Sat');
        for (var i = 0; i < this.monthPrint.length; i++) {
            for (var j = 0; j < this.monthPrint[i].length; j++) {
                if( i == 0 && j <dayOfWeekCount){
                    arrText+=this.monthPrint[i][j]+'  ';
                    continue;
                }
                else if(addDate <= arrMonth[month-1]){
                    if(j>=dayOfWeekCount || addDate <= arrMonth[month-1]){
                        this.monthPrint[i][j] = addDate.toString();
                        addDate++;
                    }
                    if(addDate<=10 && addDate<arrMonth[month]){
                        arrText+=this.monthPrint[i][j]+'  ';
                    }
                    else{
                        arrText+=this.monthPrint[i][j]+' ';
                    }
                }
            }
            console.log(arrText);
            arrText='';
        }
    }
    
}
module.exports = {
    Calender,
}