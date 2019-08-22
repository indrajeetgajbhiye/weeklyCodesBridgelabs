var readLineSync = require('readline-sync');
let tripl = require("./utility/utility.js");
console.log("ennn")
var n = readLineSync.question('Enter total number of integers'); 
var arr=[];
var i;
for(i=0;i<n;i++){
    arr.push(readLineSync.question());
}
var totalTriplets = tripl.findTriplets(arr,n);
console.log("the total no of triplets are", totalTriplets);