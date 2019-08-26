let readlineSync = require("readline-sync");
let bubbleSortUtilObj = require("../utility/bubbleSortUtils");
var number = readlineSync.question("enter the size of array");
var bubbleArray = new Array(number);
for(var i = 0;i<number;i++){
    bubbleArray[i]=readlineSync.question("");
}
var arr = bubbleSortUtilObj.bubbleSort(bubbleArray);
console.log(arr);