var readlineSync = require("readline-sync");
let temperatureConversion = require("../utility/temperatureCoversionUtils");
let findTemp = new temperatureConversion();
var temp;
var main = function(){
    console.log("****** Temperature conversion ******");
    console.log("press 1 to convert celsius to farenheit");
    console.log("press 2 to convert farenheit to celsius");
    let choice = parseInt(readlineSync.question("Give the input : "));
    if(choice==1){
        temp=parseInt(readlineSync.question("Input the temp in celsius : "));
        console.log("in farenheit",findTemp.toFarenheit(temp));
    }
    else if(choice==2){
        temp=parseInt(readlineSync.question("Input the temp in Farenheit : "));
        console.log("in celsius",findTemp.toCelsius(temp));
    }
    else {
        console.log("Give correct Input!");
    }
}
main();