class Queue {
    /**
     * create a new constructor to create object of item.
     */
    constructor() {
        this.items = [];
    }
    /**
     * add elements into the queue.
     */
    enQueue(element) {
        return this.items.push(element);
    }
    /**
     * remove elements from the queue.
     */
    deQueue() {
        if (this.isEmpty())
            return "underflow";
        return this.items.shift();
    }
    /**
    * it will return front element of queue without removing it.
    */
    front() {
        if (this.isEmpty())
            return "No elements in the queue";
        return this.items[0];
    }
    /** 
    * checks if queue is empty are not
    */
    isEmpty() {
        return this.items.length == 0;
    }
    /**
    * returns the length of queue
    */
    len() {
        return this.items.length;
    }
    /**
    * print queue
    */
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + "|";
        return str;
    }
}
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports = {
    Queue
};