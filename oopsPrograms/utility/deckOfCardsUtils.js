var utilityQueue = require('../utility/cardsQueueLinkedList');
function shuffle(arr1, arr2, arr3) {
    var n = arr1.length * arr2.length;
    for (var i = 0; i < n; i++) {
        var random = i + parseInt(Math.random() * (n - i));
        var temp = arr3[random];
        arr3[random] = arr3[i];
        arr3[i] = temp;
    }
    return arr3;
}
function deckOfCards(arr1, arr2){
    var finalArray = new Array(4);
    for(var i =0; i < 4; i++){
        finalArray[i] = new Array(9);
    }
    var n = arr1.length * arr2.length;
    var arr3 = new Array(n);
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            arr3[arr1.length * i + j] = arr2[i] + arr1[j];
        }
    }
    for (var j = 0; j < 9; j++) {
        i = 0;
        var arr = [];
        arr.push(arr3[i + j * 4]);
        var queue = new utilityQueue.Queue();
        queue.enQueue(arr);
        i++;
    }
    arr3 = shuffle(arr1, arr2, arr3);
    for (var j = 0; j < 9; j++) {
        i = 0;
        var arr = [];
        arr.push(arr3[i + j * 4]);
        var queue1 = new utilityQueue.Queue();
        queue1.enQueue(arr);
        i++;
        arr2.sort(function (a, b) { return a - b; });
        finalArray[0][j]=arr;
    }
    arr3 = shuffle(arr1, arr2, arr3);
    for (var j = 0; j < 9; j++) {
        i = 0;
        var arr = [];
        arr.push(arr3[i + j * 4]);
        var queue2 = new utilityQueue.Queue();
        queue2.enQueue(arr);
        i++;
        finalArray[1][j]=arr;
    }
    arr3 = shuffle(arr1, arr2, arr3);
    for (var j = 0; j < 9; j++) {
        i = 0;
        var arr = [];
        arr.push(arr3[i + j * 4]);
        var queue3 = new utilityQueue.Queue();
        queue3.enQueue(arr);
        i++;
        finalArray[2][j]=arr;
    }
    arr3 = shuffle(arr1, arr2, arr3);
    for (var j = 0; j < 9; j++) {
        i = 0;
        var arr = [];
        arr.push(arr3[i + j * 4]);
        var queue3 = new utilityQueue.Queue();
        queue3.enQueue(arr);
        i++;
        finalArray[3][j]=arr;
    }
    return finalArray;
}
module.exports ={
    shuffle, 
    deckOfCards
}

