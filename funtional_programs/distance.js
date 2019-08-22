var readLineSync= require("readline-sync");
var distance, x, y;
x = readLineSync.question("type the value of x: ");
y = readLineSync.question("type the value of y: ");
distance = Math.pow((Math.pow(x,2))+(Math.pow(y,2)),1/2);
console.log("The Euclidian distance between origin and (x,y)", distance);   