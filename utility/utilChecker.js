var que = require('../utility/queueUsingLinkedList');
var queue = new que.Queue();
console.log(queue.isEmpty());
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(8);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.size());