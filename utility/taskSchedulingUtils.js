
inputArray = function(n){
    
    var taskArray = new Array(n);
    // var n = readlineSync.question("Enter the no of tasks: ");
    for(var i=0;i<n; i++){
        taskArray[i]= new Array(2);
        taskArray[i][0] = parseInt(readlineSync.question("deadline "+parseInt(i+1)+": "));
        taskArray[i][1] = parseInt(readlineSync.question("time "+parseInt(i+1)+": "));
        try{
            if(taskArray[i][1]>taskArray[i][0]) throw "Task deadline cannot be less than task time";
            if(taskArray[i][1]=='' || taskArray[i][0]=='') throw "Deadline or Time cannot be empty";
        }
        catch(err){
            return err;
        }
    }
    console.log("print the array", taskArray);
    return taskArray;
}
merge = function(leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr = leftArr.slice(1)
        } 
        else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length)
        sortedArr.push(leftArr.shift());
      while (rightArr.length)
        sortedArr.push(rightArr.shift());
      return sortedArr;
}
mergesort = function (arr) {
    if (arr.length <2) {
        return arr; 
    }
    else {
        var midpoint = parseInt(arr.length / 2);
        var leftArr   = arr.slice(0, midpoint);
        var rightArr  = arr.slice(midpoint, arr.length);
        return merge(mergesort(leftArr), mergesort(rightArr));
    }
}
    // console.log('This should be the sorted array!')
    // console.log(mergesort(taskArray));
taskScheduling = function(taskArray, taskNumber){
    this.taskArray = taskArray;
    this.taskNumber = taskNumber;
    console.log(taskArray);
    var sortedArray = mergesort(taskArray);
    //var sortedTaskArray = sortArrayDeadline(taskArray, taskNumber);
    console.log("first array" , sortedArray);   
    var finalTaskArray = new Array(taskNumber);
    for(var i = 0; i < taskNumber; i++){
        finalTaskArray[i] = new Array(2);
        finalTaskArray = mergesort(sortedArray);
    }
    console.log("******",finalTaskArray);
    var maxTask = findMaxDeadline(finalTaskArray);
    var finalArray = taskCompleting(sortedArray, maxTask);
    return finalArray;
}
findMaxDeadline = function(finalTaskArray){
    var maxDead = 0
    for(var i=0; i< finalTaskArray.length ;i++){
        if(maxDead<finalTaskArray[i]){
            maxDead = finalTaskArray[i];
        }
    }
    console.log(maxDead);
    return maxDead;
}
taskCompleting = function(sortedArray, maxTask){
    var timeCount = 0;
    var scheduleArray = new Array(maxTask);
    maxTask = this.maxTask;
    for(var i =0; i<maxTask;i++){
        if(timeCount <= maxTask){
            //scheduleArray[i] = sortedArray[i][0]-sortedArray[i][1];
            scheduleArray[i]=sortedArray.slice( i, 0, sortedArray[i][0]-sortedArray[i][1]);
        }
        else{
            //scheduleArray[i]=sortedArray[i][1];
            scheduleArray[i]=sortedArray.slice( i, 0,sortedArray[i][1]);
        }
    }
    console.log('     **********    ', scheduleArray);
    return scheduleArray;
}
module.exports = {
    inputArray,
    taskScheduling,
    //sortArrayDeadline,
    mergesort,
    merge,

}