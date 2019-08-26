readlineSync=require('readline-sync');
var n = readlineSync.question("Enter the no of tasks: ");
let taskSchedulingUtilsObj = require("../utility/taskSchedulingUtils");
let taskArray = taskSchedulingUtilsObj.inputArray(n);
let outArray = taskSchedulingUtilsObj.taskScheduling(taskArray, n);
