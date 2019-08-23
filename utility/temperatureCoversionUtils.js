module.exports= class temperatureConversion{
    constructor(){
    }
    toCelsius(temp){
        this.temp= temp;
        return parseInt((temp-32)*5/9);
    }
    toFarenheit(temp){
        this.temp= temp;
        return parseInt((temp*9/5)+32);
    }
}