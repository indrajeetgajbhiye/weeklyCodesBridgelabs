module.exports = {
    findSqrt : function(number){
        this.number = number;
        var tick = parseFloat(number);
        var epsilon = 1e-15;
        while(Math.abs(tick - (number/tick))> epsilon*tick){
            tick = ((number/tick) + tick) / 2;
        }
        return tick;
    },
}