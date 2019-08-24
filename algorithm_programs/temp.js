readlineSync=require('readline-sync');
var n = readlineSync.question("Enter the no of tasks: ");
var task = new Array(n);
// var n = readlineSync.question("Enter the no of tasks: ");
for(var i=0;i<n; i++){
  task[i]= new Array(2);
  task[i][0] = readlineSync.question(" ");
  task[i][1] = readlineSync.question(" ");
}
console.log("print the array", task);