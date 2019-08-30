class Node {
    constructor(element){
        this.element = element;
        this.next = null
    }
}
class Queue{
    constructor() {
        this.front = null;
        this.back = null;
    }
    enqueue(element) {
        var N = new Node(element);
        if (this.back == null) {
            this.front = N;
            this.back = this.front;
        } 
        else { 
            this.back.next = N; 
            this.back = this.back.next;
        } 
    }
    dequeue(){
        if (this.front !== null) { 
            var first = this.front;
            this.front = this.front.next; 
            return first.element;
        } 
        else {
            if (this.back!= null) { 
            this.back = null; 
            }
            return 'Cannot dequeue because queue is empty';
        }
    }
    isEmpty() {
        if(this.back == null)
            return true;
        else 
            return false;
    }
    size(){
        var i=1;
        var current = this.front;
        while(current.next != null && current != null){
            i++;
            current = current.next;
        }
        return i;
    }
}

module.exports = {
    Queue,
    Node
}